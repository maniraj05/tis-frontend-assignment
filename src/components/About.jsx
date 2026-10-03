import { ABOUT, STATS } from '../data/content'
import AboutArt from './AboutArt'
import Counter from './ui/Counter'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading eyebrow="About TIS" title={ABOUT.heading} />
            <div className="max-w-xl space-y-5 text-lg text-muted">
              {ABOUT.paragraphs.map((text, index) => (
                <Reveal key={text} delay={0.1 * (index + 1)}>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border-2 border-ink shadow-[10px_10px_0_0_var(--ink)]">
              <SmartImage
                src={ABOUT.image}
                alt={ABOUT.imageAlt}
                className="h-full w-full object-cover"
                fallback={<AboutArt />}
              />
            </div>
            <p className="relative -mt-10 ml-6 rounded-3xl border-2 border-ink bg-cobalt p-6 font-display text-2xl font-extrabold leading-tight text-white shadow-[6px_6px_0_0_var(--ink)] sm:ml-12 sm:p-8 sm:text-3xl">
              {ABOUT.statement}
            </p>
          </Reveal>
        </div>

        <ul className="mt-20 grid divide-y-2 divide-ink overflow-hidden rounded-3xl border-2 border-ink bg-surface sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} as="li" delay={index * 0.12} className="p-8">
              <p className="font-display text-6xl font-extrabold text-ink sm:text-7xl">
                <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-3 max-w-[16rem] text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
