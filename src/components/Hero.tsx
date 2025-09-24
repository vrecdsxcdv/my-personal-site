import { motion } from 'framer-motion'
import Image from './ui/Image'

export default function Hero() {
  return (
    <header id="hero" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-12 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
            Привет! Я Матвей. Играю в Стендоф.Любимый смешарик Тр...Кар-карыч.
          </h1>
          <p className="mt-6 text-lg text-foreground/70">бр бр патапим</p>
          <div className="mt-8 flex gap-3">
            <a href="#interests" className="btn-primary">
              Увлечения
            </a>
            <a href="#gallery" className="btn-ghost">
              Галерея
            </a>
          </div>
        </div>
        <motion.div
          className="w-full rounded-3xl shadow-soft border border-black/5 dark:border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="mainphoto.jpg"
            alt="[Имя] — портрет для главного экрана"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </header>
  )
}
