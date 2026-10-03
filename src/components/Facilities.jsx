import { FACILITIES } from '../data/content'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function FacilityTile({ figure, title, description, tone, featured, href }) {
  const Wrapper = href ? 'a' : 'div'
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Wrapper
      {...linkProps}
      className={`group flex h-full min-h-[14rem] flex-col justify-between rounded-3xl border-2 border-ink p-6 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--ink)] sm:p-8 ${tone}`}
    >
      <p
        className={`font-display font-extrabold leading-none ${
          featured ? 'text-8xl sm:text-9xl' : 'text-6xl sm:text-7xl'
        }`}
      >
        {figure}
      </p>
      <div>
        <h3 className="flex items-center gap-2 text-xl font-bold sm:text-2xl">
          {title}
          {href && <Icon name="arrow" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
        </h3>
        <p className="mt-1 max-w-sm opacity-85">{description}</p>
      </div>
    </Wrapper>
  )
}

export default function Facilities() {
  return (
    <section id="campus" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Campus and facilities"
          title="Everything a growing mind needs, in one place"
          intro="A residential campus designed for learning, sport, wellbeing and community."
        />

        <div className="grid gap-4 md:auto-rows-[14rem] md:grid-cols-4">
          {FACILITIES.map((facility, index) => (
            <Reveal key={facility.title} delay={index * 0.08} className={facility.className}>
              <FacilityTile {...facility} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
