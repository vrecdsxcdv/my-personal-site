import { useEffect, useRef, useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

const sections = [
  { id: 'hero', label: 'Начало' },
  { id: 'about', label: 'Обо мне' },
  { id: 'interests', label: 'Увлечения' },
  { id: 'media', label: 'Медиа' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'moments', label: 'Моменты' },
  { id: 'quotes', label: 'Цитаты' },
  { id: 'contact', label: 'Связь' },
]

export default function Nav() {
  const { theme, setTheme } = useTheme()
  const [active, setActive] = useState('hero')
  const observers = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const opts: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -70% 0px',
      threshold: 0,
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
    }, opts)
    observers.current = io
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const nextTheme = () => {
    setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light')
  }

  const themeIcon =
    theme === 'dark' ? (
      <Moon size={18} />
    ) : theme === 'light' ? (
      <Sun size={18} />
    ) : (
      <Sun size={18} />
    )
  const themeLabel = theme === 'dark' ? 'Тёмная' : theme === 'light' ? 'Светлая' : 'Системная'

  return (
    <nav
      aria-label="Главная навигация"
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-neutral-950/50 border-b border-black/5 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="font-semibold tracking-tight">
          Матвей67
        </button>
        <div className="hidden md:flex gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${active === s.id ? 'bg-secondary text-foreground' : 'text-foreground/70 hover:bg-secondary'}`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <button
          onClick={nextTheme}
          className="btn-ghost gap-2"
          aria-label={`Сменить тему: ${themeLabel}`}
          title={`Тема: ${themeLabel}`}
        >
          {themeIcon}
          <span className="hidden sm:inline">{themeLabel}</span>
        </button>
      </div>
    </nav>
  )
}
