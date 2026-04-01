import { useState } from 'react'
import TopicInput from './components/TopicInput'
import LoadingState from './components/LoadingState'
import ExplanationCard from './components/ExplanationCard'
import QuizCard from './components/QuizCard'
import ScoreCard from './components/ScoreCard'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export default function App() {
  const [screen, setScreen] = useState('idle') // idle | loading | studying | finished
  const [topic, setTopic] = useState('')
  const [studyData, setStudyData] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [error, setError] = useState(null)

  async function fetchStudyData(topicText) {
    setTopic(topicText)
    setScreen('loading')
    setError(null)
    setCurrentQuestion(0)
    setScore(0)

    try {
      const res = await fetch(`${API_URL}/api/study`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topicText }),
      })
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setStudyData(data)
      setScreen('studying')
    } catch {
      setError('Something went wrong. Please try again.')
      setScreen('idle')
    }
  }

  function handleAnswer(correct) {
    const newScore = correct ? score + 1 : score
    const isLast = currentQuestion === studyData.questions.length - 1

    if (isLast) {
      setScore(newScore)
      setScreen('finished')
    } else {
      setScore(newScore)
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  function handleNewTopic() {
    setStudyData(null)
    setTopic('')
    setScreen('idle')
  }

  function handleRegenerate() {
    fetchStudyData(topic)
  }

  if (screen === 'idle') {
    return (
      <div className="min-h-screen bg-background">
        {error && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-incorrect text-white text-sm font-inter px-4 py-2 rounded-[10px] shadow-md animate-fade-in z-10">
            {error}
          </div>
        )}
        <TopicInput onSubmit={fetchStudyData} />
      </div>
    )
  }

  if (screen === 'loading') {
    return (
      <div className="min-h-screen bg-background">
        <LoadingState topic={topic} />
      </div>
    )
  }

  if (screen === 'studying') {
    const q = studyData.questions[currentQuestion]
    return (
      <div className="min-h-screen bg-background px-4 py-10">
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          <ExplanationCard topic={studyData.topic} explanation={studyData.explanation} />
          <QuizCard
            key={currentQuestion}
            question={q.question}
            options={q.options}
            answer={q.answer}
            questionNumber={currentQuestion + 1}
            total={studyData.questions.length}
            onNext={handleAnswer}
            isLast={currentQuestion === studyData.questions.length - 1}
          />
        </div>
      </div>
    )
  }

  if (screen === 'finished') {
    return (
      <div className="min-h-screen bg-background px-4 py-10">
        <div className="max-w-xl mx-auto">
          <ScoreCard
            score={score}
            total={studyData.questions.length}
            onNewTopic={handleNewTopic}
            onRegenerate={handleRegenerate}
          />
        </div>
      </div>
    )
  }
}
