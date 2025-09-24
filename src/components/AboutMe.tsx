import Section from './Section'
import Image from './ui/Image'

export default function AboutMe() {
  return (
    <Section id="about" title="Обо мне">
      <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 items-center">
        <Image
          src="media/steal-brainrot.jpg"
          alt="Steal Brainrot"
          loading="lazy"
          className="rounded-2xl w-full h-auto"
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
