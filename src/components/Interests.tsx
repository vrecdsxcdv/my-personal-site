import Section from './Section'
import { Music, Code, Bitcoin } from 'lucide-react'

const items = [
  {
    title: 'тёмный принц',
    icon: Music,
    text: 'а парадокси реально порядочная.',
    tags: ['solaflipper', 'овердоз'],
  },
  {
    title: 'крипта',
    icon: Bitcoin,
    text: 'формула успеха=купил 10usdt вывел 11 комиссия составила 12 usdt.',
    tags: ['Bybit', 'Solana'],
  },
  {
    title: 'программирование',
    icon: Code,
    text: 'я фронтент девелопер',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
]

export default function Interests() {
  return (
    <Section id="interests" title="Увлечения">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ title, icon: Icon, text, tags }) => (
          <article
            key={title}
            className="card p-6 transition will-change-transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center border border-black/5 dark:border-white/10">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <p className="mt-3 text-foreground/70">{text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="px-2 py-1 rounded-lg text-xs bg-secondary">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
