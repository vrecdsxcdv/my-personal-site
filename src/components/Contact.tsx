import Section from './Section'
import { Bitcoin, Wallet, Cpu } from 'lucide-react'

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Данные крипто кошелька(Логин: user_example
Почта: example@mail.test
Кошелёк: 0xFAKE...DEADBEEF
Пароль QWERTY123456)"
    >
      <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
        <div className="space-y-4">
          <p className="text-lg">логин и пароль</p>
          <div className="flex gap-3">
            <a className="btn-primary" href="mailto:me@example.com" aria-label="Email">
              <Bitcoin size={16} className="mr-2" />
              login
            </a>
            <a className="btn-ghost" href="#" aria-label="Telegram">
              <Wallet size={16} className="mr-2" />
              password
            </a>
            <a className="btn-ghost" href="#" aria-label="Instagram">
              <Cpu size={16} className="mr-2" />
              2FA
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
