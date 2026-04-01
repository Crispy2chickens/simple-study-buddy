# Study Buddy

A web app that generates a short explanation and quiz for any topic you enter, powered by Google Gemini.

Live demo: https://simple-study-buddy-kappa.vercel.app

## What it does

1. Enter any study topic (e.g. "photosynthesis", "the French Revolution")
2. Get a concise explanation and two quiz questions
3. Answer the questions and see your score
4. Regenerate or try a new topic

## Tech stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Frontend | React + Vite + Tailwind             |
| Backend  | Node.js + Express                   |
| AI       | Google Gemini API                   |
| Deploy   | Vercel (frontend), Render (backend) |

## Running locally

You need two terminals — one for the backend, one for the frontend.

### Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
GEMINI_API_KEY=your_key_here
PORT=3001
```

Then start the server:

```bash
node index.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`. The frontend calls the backend at `http://localhost:3001` by default.

## Environment variables

### Backend

| Variable         | Description                                      |
| ---------------- | ------------------------------------------------ |
| `GEMINI_API_KEY` | Your Google Gemini API key from AI Studio        |
| `PORT`           | Port to run the server on (default 3001)         |
| `ALLOWED_ORIGIN` | Allowed CORS origin (defaults to the Vercel URL) |

### Frontend

| Variable       | Description                                       |
| -------------- | ------------------------------------------------- |
| `VITE_API_URL` | Backend URL (defaults to `http://localhost:3001`) |

## Getting a Gemini API key

Get a free key at https://aistudio.google.com. The free tier allows 60 requests per minute.
