require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'https://simple-study-buddy-kappa.vercel.app',
}));
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Study endpoint
app.post('/api/study', async (req, res) => {
  const { topic } = req.body;
  if (!topic || typeof topic !== 'string' || topic.trim() === '') {
    return res.status(400).json({ error: 'topic is required' });
  }

  const prompt = `You are a study assistant. Given the topic "${topic.trim()}", respond ONLY with valid JSON in this exact format (no markdown, no code fences):
{
  "topic": "${topic.trim()}",
  "explanation": "A clear 2-3 sentence explanation of the topic suitable for a student.",
  "questions": [
    {
      "question": "A quiz question about the topic?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option A"
    },
    {
      "question": "Another quiz question about the topic?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option B"
    }
  ]
}`;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    const data = JSON.parse(text);
    res.json(data);
  } catch (err) {
    if (err instanceof SyntaxError) {
      return res.status(502).json({ error: 'Failed to parse AI response' });
    }
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
