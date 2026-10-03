import { motion, useTransform } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/** Sun rising behind layered hills and a lit school building. Layers drift at different speeds on scroll. */
export default function HeroArt({ progress }) {
  const sunY = useTransform(progress, [0, 1], [0, 110])
  const backY = useTransform(progress, [0, 1], [0, 60])
  const midY = useTransform(progress, [0, 1], [0, 30])

  return (
    <svg
      viewBox="0 0 800 900"
      role="img"
      aria-label="Illustration of the sun rising over hills behind a school building"
      preserveAspectRatio="xMidYMax slice"
      className="h-full w-full"
    >
      <rect width="800" height="900" style={{ fill: 'var(--hero-sky)' }} />

      <motion.g style={{ y: sunY }}>
        <motion.g initial={{ y: 340 }} animate={{ y: 0 }} transition={{ duration: 1.8, delay: 0.3, ease: EASE }}>
          <circle cx="400" cy="400" r="215" fill="none" style={{ stroke: 'var(--sun)' }} strokeOpacity="0.35" strokeWidth="3" />
          <circle cx="400" cy="400" r="150" style={{ fill: 'var(--sun)' }} />
        </motion.g>
      </motion.g>

      <motion.path
        style={{ y: backY, fill: 'var(--ridge-a)' }}
        d="M0 520 L110 430 L200 490 L320 360 L430 470 L540 390 L660 480 L800 410 V900 H0Z"
      />
      <motion.path
        style={{ y: midY, fill: 'var(--ridge-b)' }}
        d="M0 640 L140 540 L260 610 L390 500 L520 600 L650 530 L800 600 V900 H0Z"
      />

      <g style={{ fill: 'var(--ridge-c)' }}>
        <rect x="320" y="650" width="160" height="100" />
        <rect x="378" y="600" width="44" height="60" />
        <path d="M370 600 L400 566 L430 600Z" />
      </g>
      <g style={{ fill: 'var(--sun)' }}>
        <rect x="338" y="672" width="18" height="24" />
        <rect x="372" y="672" width="18" height="24" />
        <rect x="410" y="672" width="18" height="24" />
        <rect x="444" y="672" width="18" height="24" />
        <rect x="392" y="618" width="16" height="22" />
      </g>

      <path style={{ fill: 'var(--ridge-c)' }} d="M0 770 L170 700 L320 750 L470 695 L640 750 L800 715 V900 H0Z" />
    </svg>
  )
}
