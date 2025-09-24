import Section from './Section'
import Image from './ui/Image'

export default function AboutMe() {
  return (
    <Section id="about" title="Обо мне">
      <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 items-center">
        <Image
          src="stealbrainrot.png"
          alt="[Имя] портрет, смотрит в камеру"
          loading="lazy"
          className="rounded-3xl shadow-soft border border-black/5 dark:border-white/10 w-full object-cover"
        />
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>Имею много брейнротов в роблоксе</p>
          <ul className="not-prose mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['BR BR patapim', 'la vaca saturno saturnita', '67', 'cocofanto elefanto'].map((v) => (
              <li key={v} className="card px-4 py-3 text-center text-sm font-medium">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
