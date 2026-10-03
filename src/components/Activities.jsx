import { useRef } from 'react'
import { ACTIVITIES, SPORTS } from '../data/content'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'

export default function Activities() {
  const trackRef = useRef(null)

  const scrollTrack = (direction) => {
    const track = trackRef.current
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="life" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Life at TIS"
            title="Where every day brings something new to discover"
          />
          <div className="mb-12 flex gap-3">
            {[
              { label: 'Scroll activities left', icon: 'left', direction: -1 },
              { label: 'Scroll activities right', icon: 'right', direction: 1 },
            ].map((control) => (
              <button
                key={control.label}
                type="button"
                aria-label={control.label}
                onClick={() => scrollTrack(control.direction)}
                className="grid h-12 w-12 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-accent hover:bg-sun hover:text-navy active:scale-90"
              >
                <Icon name={control.icon} className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>

        <ul
          ref={trackRef}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8"
        >
          {ACTIVITIES.map((activity) => (
            <li
              key={activity.title}
              data-cursor
              className="group relative aspect-[3/4] w-64 shrink-0 snap-start overflow-hidden rounded-3xl border-2 border-ink sm:w-72"
            >
              <SmartImage
                src={activity.image}
                alt={`Students at ${activity.title}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                fallback={
                  <div
                    role="img"
                    aria-label={activity.title}
                    className={`grid h-full w-full place-items-center font-display text-[9rem] font-extrabold leading-none ${activity.tone}`}
                  >
                    {activity.title[0]}
                  </div>
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-5 left-5 font-display text-2xl font-semibold text-white">
                {activity.title}
              </p>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12">
          <h3 className="mb-4 font-display text-xl font-semibold text-ink">16+ sports to choose from</h3>
          <ul className="flex flex-wrap gap-2">
            {SPORTS.map((sport) => (
              <li
                key={sport}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-ink"
              >
                {sport}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
