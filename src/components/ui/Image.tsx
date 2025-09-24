import { useState } from 'react'

const fallback =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#38bdf8"/><stop offset="1" stop-color="#a78bfa"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`
  )

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { src: string }

export default function SafeImage({ src, alt, ...rest }: Props) {
  const [err, setErr] = useState(false)
  return <img src={err ? fallback : src} alt={alt} onError={() => setErr(true)} {...rest} />
}
