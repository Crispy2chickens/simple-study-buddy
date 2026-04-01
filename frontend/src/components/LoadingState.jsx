export default function LoadingState({ topic }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center animate-fade-in">
        <div className="flex gap-2 justify-center mb-6">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full bg-teal animate-blink"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <p className="text-foreground font-semibold font-poppins text-lg">
          Generating your study session
        </p>
        <p className="text-muted font-inter text-sm mt-1">
          on <span className="text-teal font-medium">{topic}</span>
        </p>
      </div>
    </div>
  )
}
