import type { PropsWithChildren } from 'react'

export default function Section({
  id,
  title,
  children,
}: PropsWithChildren<{ id: string; title?: string }>) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-violet-600 to-pink-600 mb-10">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
