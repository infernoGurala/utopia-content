const admin = require('firebase-admin');
const fetch = require('node-fetch');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

async function generateWithAI() {
  const prompt = `
Generate a science word puzzle.

Rules:
- Answer must be ONE word (3–6 letters)
- Provide:
  answer, question, category (easy/medium/hard)
- No special characters
- Keep it clear and factual

Return JSON ONLY like:
{
  "answer": "ATOM",
  "question": "Smallest unit of matter",
  "category": "easy"
}
`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  const data = await res.json();

  const text =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "";

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("AI returned invalid JSON");
  }
}

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
    console.log("AI failed, using fallback");
    question = {
      answer: "ATOM",
      question: "Smallest unit of matter",
      category: "easy"
    };
  }

  // Basic validation
  if (!question.answer || question.answer.length < 3) {
    throw new Error("Invalid AI output");
  }

  question.answer = question.answer.toUpperCase();

  await docRef.set(question);

  console.log('Created AI question for', today);
}

run();
