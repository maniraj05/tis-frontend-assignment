import { useState } from 'react'

/** Lazy image that renders `fallback` (or a brand gradient) if the source fails to load. */
export default function SmartImage({ src, alt, className = '', fallback = null, ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      fallback ?? (
        <div role="img" aria-label={alt} className={`bg-gradient-to-br from-cobalt to-sky ${className}`} />
      )
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
