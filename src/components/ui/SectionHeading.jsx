import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, intro, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <Reveal className={`mb-12 max-w-3xl ${alignment}`}>
      <p className={`mb-4 flex items-center gap-3 text-base font-semibold text-link ${align === 'center' ? 'justify-center' : ''}`}>
        <span aria-hidden="true" className="h-1.5 w-10 rounded-full bg-sun" />
        {eyebrow}
      </p>
      <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
    </Reveal>
  )
}
