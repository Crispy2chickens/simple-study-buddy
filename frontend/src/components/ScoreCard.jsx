const MESSAGES = {
  2: { emoji: '🏆', title: 'Perfect score!', subtitle: 'You nailed it.' },
  1: { emoji: '⭐', title: 'Good effort!', subtitle: 'Review the explanation and try again.' },
  0: { emoji: '📚', title: 'Keep studying!', subtitle: "Don't give up — try again." },
}

export default function ScoreCard({ score, total, onNewTopic, onRegenerate }) {
  const msg = MESSAGES[score] ?? MESSAGES[0]

  return (
    <div className="bg-white rounded-[6px] shadow-sm border border-gray-100 p-8 text-center animate-bounce-in">
      <div className="text-5xl mb-3">{msg.emoji}</div>
      <h2 className="text-2xl font-bold text-foreground font-poppins mb-1">{msg.title}</h2>
      <p className="text-muted font-inter text-sm mb-5">{msg.subtitle}</p>

      <div className="inline-flex items-baseline gap-1 bg-background rounded-[6px] px-6 py-3 mb-6 border border-gray-100">
        <span className="text-4xl font-bold text-teal font-poppins">{score}</span>
        <span className="text-lg text-muted font-inter">/ {total}</span>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={onRegenerate}
          className="w-full py-3 rounded-[10px] bg-teal text-white font-semibold font-poppins text-sm shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Try Again — Same Topic
        </button>
        <button
          onClick={onNewTopic}
          className="w-full py-3 rounded-[10px] border-2 border-gray-200 text-foreground font-semibold font-poppins text-sm hover:border-teal hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Study a New Topic
        </button>
      </div>
    </div>
  )
}
