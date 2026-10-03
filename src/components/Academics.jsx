import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ACADEMICS } from '../data/content'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Academics() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="academics" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Academics"
          title="A CBSE curriculum that grows with your child"
          intro="From Class IV to XII, learning at TIS is designed to build confidence, curiosity and character."
        />

        <Reveal>
          <ul className="border-t-2 border-ink">
            {ACADEMICS.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <li key={item.title} className="border-b-2 border-ink">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`academics-panel-${index}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="group flex w-full items-center gap-4 py-6 text-left transition-colors hover:bg-sun/25 sm:gap-8 sm:px-4 sm:py-8"
                    >
                      <span className="w-32 shrink-0 text-3xl font-extrabold text-ink sm:w-64 sm:text-6xl">
                        <span className="sr-only">Classes </span>
                        {item.classes}
                      </span>
                      <span className="flex flex-1 items-center gap-4 text-xl font-bold text-ink sm:text-3xl">
                        <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-ink bg-sun text-navy transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:grid">
                          <Icon name={item.icon} />
                        </span>
                        {item.title}
                      </span>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink transition-transform duration-300 ${
                          isOpen ? 'rotate-45 bg-sun text-navy' : 'text-ink group-hover:rotate-90'
                        }`}
                      >
                        <Icon name="plus" className="h-5 w-5" />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`academics-panel-${index}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-5 pb-8 sm:pl-[17.5rem] sm:pr-4">
                          <p className="max-w-xl text-lg text-muted">{item.description}</p>
                          <Button href="#contact" variant="secondary" arrow>
                            Ask about admission
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
