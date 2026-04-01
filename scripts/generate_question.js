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
async function generateWithAI() {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3-70b-8192",
      messages: [
        {
          role: "user",
          content: `
Generate a science word puzzle.

Rules:
- Answer must be ONE word (3–6 letters)
- Only alphabets
- Return ONLY JSON (no explanation):

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

  // 🔥 Extract JSON safely
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("Invalid JSON from AI");

  const parsed = JSON.parse(match[0]);

  return parsed;
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

  let question;

  try {
    question = await generateWithAI();
  } catch (e) {
    console.log("AI failed, fallback:", e.message);

    question = {
      answer: "ATOM",
      question: "Smallest unit of matter",
      category: "easy"
    };
  }

  // ✅ validation
  if (!question.answer || question.answer.length < 3) {
    throw new Error("Invalid AI output");
  }

  question.answer = question.answer.toUpperCase();

  await docRef.set(question);

  console.log("✅ Created:", today, question);
}

run();
