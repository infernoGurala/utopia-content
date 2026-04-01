const admin = require('firebase-admin');

// 🔐 Load Firebase from GitHub Secret
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// 🤖 Gemini API
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// 📅 Get today's date in IST (IMPORTANT FIX)
function getTodayDate() {
  const now = new Date();

  const istOffset = 5.5 * 60 * 60 * 1000;
  const istTime = new Date(now.getTime() + istOffset);

  const date = istTime.toISOString().split('T')[0];

  console.log("TODAY DATE (IST):", date); // 🔍 debug

  return date;
}

// 🤖 Generate question using AI
async function generateWithAI() {
  const prompt = `
Generate a science word puzzle.

Rules:
- Answer must be ONE word (3–6 letters)
- Only alphabets (no symbols)
- Provide JSON ONLY in this format:
{
  "answer": "ATOM",
  "question": "Smallest unit of matter",
  "category": "easy"
}
`;

const res = await fetch(
  `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  }
);

  const data = await res.json();

  console.log("AI RAW:", JSON.stringify(data)); // 🔍 debug

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) throw new Error("No AI response");

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON from AI");
  }
}

// 🚀 Main runner
async function run() {
  const today = getTodayDate();

  const docRef = db.collection('sciwordle_daily').doc(today);
  const doc = await docRef.get();

  if (doc.exists) {
    console.log('Already exists:', today);
    return;
  }

  let question;

  try {
    question = await generateWithAI();
  } catch (e) {
    console.log("AI failed, using fallback:", e.message);

    question = {
      answer: "ATOM",
      question: "Smallest unit of matter",
      category: "easy"
    };
  }

  // ✅ Validation
  if (!question.answer || question.answer.length < 3) {
    throw new Error("Invalid AI output");
  }

  // Normalize
  question.answer = question.answer.toUpperCase();

  await docRef.set(question);

  console.log("✅ Created question for", today, question);
}

run();
