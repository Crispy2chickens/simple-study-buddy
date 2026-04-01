export default function ExplanationCard({ topic, explanation }) {
  return (
    <div className="bg-white rounded-[6px] shadow-sm border border-gray-100 p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-teal font-inter">Topic</span>
      </div>
      <h2 className="text-xl font-bold text-foreground font-poppins capitalize mb-3">{topic}</h2>
      <p className="text-muted font-inter text-sm leading-relaxed">{explanation}</p>
    </div>
  )
}
