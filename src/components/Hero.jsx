import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { HERO } from '../data/content'
import { SITE } from '../data/site'
import HeroArt from './HeroArt'
import Button from './ui/Button'

const EASE = [0.22, 1, 0.36, 1]

const floating = (delay, rotate) => ({
  initial: { rotate },
  animate: { y: [0, -10, 0], rotate },
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
})

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pb-20 pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 inline-block rounded-lg border-2 border-ink bg-surface px-4 py-1.5 text-sm font-semibold text-ink"
          >
            {HERO.eyebrow}
          </motion.p>

          <h1 className="font-display text-[clamp(2.7rem,6.4vw,5.75rem)] font-extrabold leading-[0.95] tracking-tight text-ink">
            {HERO.title.map((word, index) => (
              <span key={word} className="block overflow-hidden pb-2">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + index * 0.12, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          >
            <p className="mt-6 font-display text-2xl font-bold text-link sm:text-3xl">{HERO.subtitle}</p>
            <p className="mt-4 max-w-lg text-lg text-muted">{HERO.description}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={SITE.admissionUrl} arrow>
                Apply now
              </Button>
              <Button href={SITE.virtualTourUrl} variant="secondary">
                Take the virtual tour
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl border-2 border-ink shadow-[10px_10px_0_0_var(--ink)]">
            <HeroArt progress={scrollYProgress} />
          </div>

          <motion.p
            {...floating(0, -5)}
            className="absolute -bottom-6 -left-2 max-w-[15rem] rounded-xl border-2 border-ink bg-sun px-4 py-3 text-sm font-bold text-navy shadow-[4px_4px_0_0_var(--ink)] sm:-left-8"
          >
            {HERO.badge}
          </motion.p>

          <motion.div
            {...floating(1.2, 10)}
            className="absolute -right-2 top-24 grid h-24 w-24 place-items-center rounded-full border-2 border-ink bg-surface text-center shadow-[4px_4px_0_0_var(--ink)] sm:-right-6"
          >
            <p className="font-display text-xs font-bold leading-tight text-muted">
              Established
              <span className="block text-2xl font-extrabold text-ink">{SITE.established}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
