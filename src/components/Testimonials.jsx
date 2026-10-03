import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TESTIMONIALS } from '../data/content'
import Icon from './ui/Icon'
import SectionHeading from './ui/SectionHeading'

const AUTOPLAY_MS = 6000

function Avatar({ name, image }) {
  const [failed, setFailed] = useState(false)
  const initials = name.replace(/^Mrs\s/, '').split(' ').map((part) => part[0]).slice(0, 2).join('')

  if (failed) {
    return (
      <span className="grid h-14 w-14 place-items-center rounded-full bg-brand font-semibold text-brand-ink" aria-hidden="true">
        {initials}
      </span>
    )
  }

  return (
    <img
      src={image}
      alt=""
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="h-14 w-14 rounded-full object-cover"
    />
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = TESTIMONIALS.length
  const current = TESTIMONIALS[index]

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused, total])

  const go = (step) => setIndex((i) => (i + step + total) % total)

  return (
    <section id="testimonials" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="From the Parents" title="Families who trust Tulas" align="center" />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="group"
          aria-roledescription="carousel"
          aria-label="Parent testimonials"
        >
          <div className="relative min-h-[18rem] rounded-3xl border border-line bg-bg p-8 sm:p-12">
            <span aria-hidden="true" className="absolute left-6 top-2 font-display text-8xl leading-none text-link/40">
              “
            </span>
            <AnimatePresence mode="wait">
              <motion.figure
                key={current.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                aria-live="polite"
                className="relative"
              >
                <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                  {current.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <Avatar name={current.name} image={current.image} />
                  <div>
                    <p className="font-semibold text-ink">{current.name}</p>
                    <p className="text-sm text-muted">{current.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((item, dotIndex) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={dotIndex === index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    dotIndex === index ? 'w-8 bg-accent' : 'w-2.5 bg-line hover:bg-muted'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition hover:border-accent active:scale-90"
              >
                <Icon name="left" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition hover:border-accent active:scale-90"
              >
                <Icon name="right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
