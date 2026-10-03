import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, input, textarea, select, [data-cursor]'
const isFinePointer = () => window.matchMedia('(pointer: fine)').matches

/** Mouse-follower ring that grows over interactive elements. Hidden on touch devices. */
export default function CustomCursor() {
  const [enabled] = useState(isFinePointer)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 })

  useEffect(() => {
    if (!enabled) return undefined

    const handleMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const handleOver = (event) => setHovering(Boolean(event.target.closest(INTERACTIVE)))

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.9 : 0.6 }}
      transition={{ duration: 0.25 }}
      className="pointer-events-none fixed left-0 top-0 z-[100] -ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-accent"
    />
  )
}
