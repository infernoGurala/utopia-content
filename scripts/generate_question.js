const admin = require('firebase-admin');

// 🔐 Firebase init
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// 🔑 Groq key
const GROQ_API_KEY = process.env.GROQ_API_KEY;

// 📅 IST date
function getTodayDate() {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istTime = new Date(now.getTime() + istOffset);
  const date = istTime.toISOString().split('T')[0];

  console.log("TODAY DATE (IST):", date);
  return date;
}

// 🤖 AI generation
async function generateWithAI(topic) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: `
Generate a ${topic} science word puzzle.

Rules:
- Answer must be ONE word (3–6 letters)
- Only alphabets
- Must strictly belong to ${topic}
- Return ONLY JSON:

{
  "answer": "ATOM",
  "question": "Smallest unit of matter",
  "category": "easy"
}
`
        }
      ],
      temperature: 0.7
    })
  });

  const data = await res.json();

  console.log("AI RAW:", JSON.stringify(data));

  const text = data?.choices?.[0]?.message?.content;

  if (!text) throw new Error("No AI response");

  // 🔥 Extract fields manually (robust)
  const answerMatch = text.match(/"answer"\s*:\s*"([^"]+)"/);
  const questionMatch = text.match(/"question"\s*:\s*"([^"]+)"/);
  const categoryMatch = text.match(/"category"\s*:\s*"([^"]+)"/);

  if (!answerMatch || !questionMatch || !categoryMatch) {
    throw new Error("Invalid AI output");
  }

  return {
    answer: answerMatch[1],
    question: questionMatch[1],
    category: categoryMatch[1]
  };
}

// 🚀 Main
async function run() {
  const today = getTodayDate();

  const docRef = db.collection('sciwordle_daily').doc(today);
  const doc = await docRef.get();

  if (doc.exists) {
    console.log("Already exists:", today);
    return;
  }

  // 🎯 Topic rotation
  const topics = ["Physics", "Chemistry", "Biology"];
  const topic = topics[new Date().getDate() % topics.length];

  console.log("Selected topic:", topic);

  let question;

  try {
    question = await generateWithAI(topic);

    // Normalize
    question.answer = question.answer.toUpperCase();

    // ✅ Validation
    if (!/^[A-Z]{3,6}$/.test(question.answer)) {
      throw new Error("Invalid word format");
    }

    // 🔁 Prevent duplicates
    const existingDocs = await db.collection('sciwordle_daily').get();
    const usedAnswers = new Set(
      existingDocs.docs.map(doc => doc.data().answer)
    );

    if (usedAnswers.has(question.answer)) {
      throw new Error("Duplicate answer generated");
    }

  } catch (e) {
    console.log("AI failed, fallback:", e.message);

    question = {
      answer: "ATOM",
      question: "Smallest unit of matter",
      category: "easy"
    };
  }

  await docRef.set(question);

  console.log("✅ Created:", today, question);
}

run();
