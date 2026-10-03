import { SPORTS } from '../data/content'

const COPIES = [0, 1]

/** Decorative sports ticker. The same list is available to screen readers in the Activities section. */
export default function Marquee() {
  return (
    <div aria-hidden="true" className="group overflow-hidden border-y-2 border-ink bg-sun py-4 text-navy">
      <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        {COPIES.map((copy) =>
          SPORTS.map((sport) => (
            <span key={`${copy}-${sport}`} className="flex items-center gap-8 pr-8 font-display text-2xl font-bold">
              {sport}
              <span className="text-lg">✦</span>
            </span>
          )),
        )}
      </div>
    </div>
  )
}
