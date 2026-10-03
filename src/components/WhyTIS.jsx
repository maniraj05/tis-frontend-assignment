import { REASONS } from '../data/content'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function WhyTIS() {
  return (
    <section id="why" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Why choose TIS" title="Six reasons families choose Tulas" />

        <ul className="grid gap-5 lg:grid-cols-3">
          {REASONS.map((reason, index) => {
            const featured = index === 0
            return (
              <Reveal
                key={reason.title}
                as="li"
                delay={(index % 3) * 0.1}
                className={`rounded-3xl border-2 border-ink p-7 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--ink)] ${
                  reason.tone ?? 'bg-bg text-ink'
                } ${reason.wide ? 'lg:col-span-2' : ''} ${featured ? 'lg:p-10' : ''}`}
              >
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl border-2 border-current">
                  <Icon name={reason.icon} />
                </span>
                <h3 className={`font-bold ${featured ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
                  {reason.title}
                </h3>
                <p className={`mt-2 max-w-xl opacity-80 ${featured ? 'text-lg' : ''}`}>{reason.description}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
