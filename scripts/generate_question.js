async function generateWithAI() {
  const prompt = `
Generate a science word puzzle.

Rules:
- Answer must be ONE word (3–6 letters)
- Provide JSON ONLY:
{
  "answer": "...",
  "question": "...",
  "category": "easy|medium|hard"
}
`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  const data = await res.json();

  console.log("AI RAW:", JSON.stringify(data)); // 🔥 DEBUG

  const text =
    data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) throw new Error("No AI response");

  return JSON.parse(text);
}
