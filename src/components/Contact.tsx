import Section from './Section'
import Image from './ui/Image'
import { Mail, Send, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <Section id="contact" title="Как связаться">
      <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
        <div className="space-y-4">
          <p className="text-lg">Буду рад сообщениям и новым идеям.</p>
          <div className="flex gap-3">
            <a className="btn-primary" href="mailto:me@example.com" aria-label="Email">
              <Mail size={16} className="mr-2" />
              Email
            </a>
            <a className="btn-ghost" href="#" aria-label="Telegram">
              <Send size={16} className="mr-2" />
              Telegram
            </a>
            <a className="btn-ghost" href="#" aria-label="Instagram">
              <Instagram size={16} className="mr-2" />
              Instagram
            </a>
          </div>
        </div>
        <Image
          src="media/me-casual.jpg"
          alt="[Имя] в повседневной обстановке"
          loading="lazy"
          className="rounded-2xl border border-black/5 dark:border-white/10 w-full object-cover"
        />
      </div>
    </Section>
  )
}
