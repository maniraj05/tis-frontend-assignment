import { SITE } from '../data/site'
import Button from './ui/Button'
import Reveal from './ui/Reveal'

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border-2 border-ink bg-cobalt px-6 py-16 text-white shadow-[10px_10px_0_0_var(--ink)] sm:px-16 sm:py-24">
        <div aria-hidden="true" className="absolute -bottom-48 -right-32 h-[26rem] w-[26rem] rounded-full bg-sun" />
        <div
          aria-hidden="true"
          className="absolute -bottom-64 -right-48 h-[34rem] w-[34rem] rounded-full border-2 border-sun/50"
        />

        <div className="relative max-w-3xl">
          <p className="mb-4 text-base font-semibold text-sun">Admissions open for Class IV to XII</p>
          <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Begin your journey at Tulas International School
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={SITE.admissionUrl} arrow>
              Apply now
            </Button>
            <Button href="#contact" variant="onDark">
              Enquire now
            </Button>
            <Button href={SITE.phoneHref} variant="onDark">
              Schedule a visit
            </Button>
          </div>
          <p className="mt-6 text-white/70">Admissions helpline: {SITE.phone}</p>
        </div>
      </Reveal>
    </section>
  )
}
