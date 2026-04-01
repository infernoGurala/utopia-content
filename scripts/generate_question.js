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

  const random = words[Math.floor(Math.random() * words.length)];

  await docRef.set(random);

  console.log('Created question for', today);
}

run();
