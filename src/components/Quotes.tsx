import Section from './Section'

const quotes = [
  'Чем больше лес тем шкибиди доб доб ес ес',
  'тот, кто видел глаза умирающего на поле боя солдата, задумается, прежде чем начать войну..',
  'Скачивайте мессенджер  MAX.',
]

export default function Quotes() {
  return (
    <Section id="quotes" title="Цитаты">
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <figure key={q} className="card p-6">
            <blockquote className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-violet-600 to-pink-600">
              “{q}”
            </blockquote>
          </figure>
        ))}
      </div>
    </Section>
  )
}
