import { motion, useScroll, useTransform } from 'framer-motion'

export default function BackgroundFX() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -60])
  const y2 = useTransform(scrollY, [0, 600], [0, 80])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-24 right-1/3 h-72 w-72 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.55),transparent_60%)] mix-blend-soft-light"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full blur-3xl opacity-40 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(16,185,129,0.5),rgba(59,130,246,0.5),rgba(236,72,153,0.5),rgba(16,185,129,0.5))] mix-blend-soft-light"
      />
    </div>
  )
}
