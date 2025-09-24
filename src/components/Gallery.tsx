import { useState } from 'react'
import Section from './Section'
import Image from './ui/Image'

const images = Array.from({ length: 6 }).map((_, i) => ({
  src: `media/gallery-${i + 1}.jpg`,
  alt: `Фото из поездки или прогулки #${i + 1}`,
}))

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  return (
    <Section id="gallery" title="Фотогалерея">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {images.map((img) => (
          <button
            key={img.src}
            className="mb-4 w-full overflow-hidden rounded-2xl border border-black/5 dark:border-white/10"
            onClick={() => setLightbox(img.src)}
          >
            <Image src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto" />
          </button>
        ))}
      </div>
      {lightbox && (
        <div
          role="dialog"
          aria-label="Просмотр фото"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={lightbox}
            alt="Фото крупным планом"
            className="max-h-[85vh] max-w-[90vw] rounded-2xl"
          />
        </div>
      )}
    </Section>
  )
}
