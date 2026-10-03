import { useState } from 'react'
import { SITE } from '../../data/site'

export default function Logo({ className = 'h-11' }) {
  const [failed, setFailed] = useState(false)

  return (
    <a href="#home" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
      {failed ? (
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand font-display text-lg font-bold text-brand-ink">
          {SITE.shortName}
        </span>
      ) : (
        <img
          src={SITE.logo}
          alt=""
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className={`w-auto rounded-lg bg-white p-1 ${className}`}
        />
      )}
      <span className="hidden font-display text-lg font-semibold leading-none sm:block">
        Tulas <span className="text-link">International</span> School
      </span>
    </a>
  )
}
