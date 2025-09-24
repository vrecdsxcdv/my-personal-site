export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 text-sm text-foreground/70 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Сделано с любовью, чмоки чмоки.</p>
        <p className="hidden sm:block">Права не защищены. Только очкошники защищаются</p>
      </div>
    </footer>
  )
}
