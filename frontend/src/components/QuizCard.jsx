import { useState } from 'react'

export default function QuizCard({ question, options, answer, questionNumber, total, onNext, isLast }) {
  const [selected, setSelected] = useState(null)

  function handleSelect(option) {
    if (selected) return
    setSelected(option)
  }

  function getButtonStyle(option) {
    if (!selected) {
      return 'bg-white border-2 border-gray-200 text-foreground hover:border-teal hover:scale-[1.02] cursor-pointer'
    }
    if (option === answer) {
      return 'bg-correct border-2 border-correct text-white animate-bounce-in cursor-default'
    }
    if (option === selected) {
      return 'bg-incorrect border-2 border-incorrect text-white animate-shake cursor-default'
    }
    return 'bg-white border-2 border-gray-100 text-gray-300 cursor-default'
  }

  return (
    <div className="bg-white rounded-[6px] shadow-sm border border-gray-100 p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-teal font-inter">
          Question {questionNumber} of {total}
        </span>
        {selected && (
          <span className={`text-xs font-semibold font-inter ${selected === answer ? 'text-correct' : 'text-incorrect'}`}>
            {selected === answer ? '✓ Correct' : '✗ Incorrect'}
          </span>
        )}
      </div>

      <p className="text-foreground font-poppins font-semibold text-base mb-5 leading-snug">
        {question}
      </p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`px-4 py-3 rounded-[10px] text-sm font-inter font-medium text-left transition-all duration-200 shadow-sm ${getButtonStyle(option)}`}
          >
            {option}
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-5 animate-fade-in">
          {selected !== answer && (
            <p className="text-sm font-inter text-muted mb-3">
              Correct answer: <span className="text-correct font-semibold">{answer}</span>
            </p>
          )}
          <button
            onClick={() => onNext(selected === answer)}
            className="w-full py-3 rounded-[10px] bg-teal text-white font-semibold font-poppins text-sm shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            {isLast ? 'See Results' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  )
}
