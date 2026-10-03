import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

/** Counts from 0 to `to` the first time it scrolls into view. */
export default function Counter({ to, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return undefined
    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (value) => {
        ref.current.textContent = `${prefix}${Math.round(value)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, to, prefix, suffix])

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  )
}
