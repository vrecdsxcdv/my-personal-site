import Section from './Section'

const moments = [
  { year: '2010', text: 'родился' },
  { year: '2025', text: 'top 1 brainrot holder all over the world' },
]

export default function Moments() {
  return (
    <Section id="moments" title="Моменты">
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
        <ul className="space-y-8">
          {moments.map((m) => (
            <li key={m.year} className="relative">
              <div className="absolute -left-[9px] top-1 h-2.5 w-2.5 rounded-full bg-foreground" />
              <div className="text-sm text-foreground/60">{m.year}</div>
              <div className="mt-1">{m.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
