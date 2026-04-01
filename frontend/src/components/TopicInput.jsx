export default function TopicInput({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault()
    const topic = e.target.topic.value.trim()
    if (topic) onSubmit(topic)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">🧠</div>
          <h1 className="text-3xl font-bold text-foreground font-poppins">Study Buddy</h1>
          <p className="text-muted mt-2 font-inter text-sm">Enter any topic and get a quick lesson + quiz</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="topic"
            type="text"
            placeholder="e.g. photosynthesis, the French Revolution..."
            className="w-full px-4 py-3 rounded-[10px] border border-gray-200 bg-white text-foreground placeholder-muted text-sm font-inter shadow-sm focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-200"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-[10px] bg-teal text-white font-semibold font-poppins text-sm shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Study This Topic
          </button>
        </form>
      </div>
    </div>
  )
}
