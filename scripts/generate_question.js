const admin = require('firebase-admin');

// ✅ Load from GitHub Secret
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Sample questions
const words = [
  { answer: "ATOM", question: "Smallest unit of matter", category: "easy" },
  { answer: "CELL", question: "Basic unit of life", category: "easy" },
  { answer: "ION", question: "Charged particle", category: "easy" },
  { answer: "FORCE", question: "Push or pull", category: "medium" },
];

// Get today's date
function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

async function run() {
  const today = getTodayDate();

  const docRef = db.collection('sciwordle_daily').doc(today);
  const doc = await docRef.get();

  if (doc.exists) {
    console.log('Already exists:', today);
    return;
  }

const difficulties = ['easy', 'medium', 'hard'];
const todayIndex = new Date().getDate() % difficulties.length;
const targetDifficulty = difficulties[todayIndex];

const filtered = words.filter(w => w.category === targetDifficulty);

const random =
  filtered.length > 0
    ? filtered[Math.floor(Math.random() * filtered.length)]
    : words[Math.floor(Math.random() * words.length)];
  await docRef.set(random);

  console.log('Created question for', today);
}

const existing = await db.collection('sciwordle_daily').get();

const usedAnswers = new Set(
  existing.docs.map(doc => doc.data().answer)
);

let question;

do {
  question = words[Math.floor(Math.random() * words.length)];
} while (usedAnswers.has(question.answer));

run();
