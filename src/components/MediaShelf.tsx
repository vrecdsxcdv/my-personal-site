import Section from './Section'
import Image from './ui/Image'

type Media = { cover: string; title: string; why: string; link: string }

const shelves: { title: string; items: Media[] }[] = [
  {
    title: 'Подкасты Арсена Маркаряна',
    items: [
      {
        cover: 'media/bebra.jpg',
        title: 'testesterone realesa 2021 эфир 3',
        why: 'отбил.',
        link: '#',
      },
    ],
  },
  {
    title: 'Фильмы и сериалы',
    items: [
      {
        cover: 'media/50.png',
        title: '50 oттенков серого',
        why: 'фильм для просмотра с семьей.',
        link: '#',
      },
    ],
  },
  {
    title: 'Музыка и подкасты',
    items: [
      {
        cover: 'media/overdose.png',
        title: 'овердоз',
        why: 'no coment.',
        link: '#',
      },
    ],
  },
]

export default function MediaShelf() {
  return (
    <Section id="media" title="Вещи, к которым возвращаюсь">
      <div className="grid md:grid-cols-3 gap-6">
        {shelves.map((shelf) => (
          <div key={shelf.title} className="space-y-4">
            <h3 className="font-semibold">{shelf.title}</h3>
            {shelf.items.map((m) => (
              <article key={m.title} className="card p-4 flex gap-4 items-center">
                <Image
                  src={m.cover}
                  alt={`Обложка: ${m.title}`}
                  loading="lazy"
                  className="w-24 h-24 object-cover rounded-xl border border-black/5 dark:border-white/10"
                />
                <div>
                  <h4 className="font-medium">{m.title}</h4>
                  <p className="text-sm text-foreground/70">{m.why}</p>
                  <a href={m.link} className="btn-ghost mt-2 text-sm">
                    Посмотреть
                  </a>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}
