import { useState } from 'react'
import { SITE } from '../data/site'
import Button from './ui/Button'
import FormField from './ui/FormField'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const INITIAL_VALUES = { name: '', email: '', phone: '', message: '' }

const VALIDATORS = {
  name: (value) => (value.trim().length < 2 ? 'Please enter your full name.' : ''),
  email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address.'),
  phone: (value) => (/^\+?[\d\s-]{10,15}$/.test(value.trim()) ? '' : 'Please enter a valid phone number.'),
  message: (value) => (value.trim().length < 10 ? 'Please write at least 10 characters.' : ''),
}

const FIELDS = [
  { name: 'name', label: 'Full name', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'message', label: 'Message', multiline: true },
]

const CONTACT_ITEMS = [
  { icon: 'pin', label: 'Address', text: SITE.address, href: SITE.mapsLink },
  { icon: 'phone', label: 'Admissions helpline', text: SITE.phone, href: SITE.phoneHref },
  { icon: 'mail', label: 'Email', text: SITE.email, href: `mailto:${SITE.email}` },
]

export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setSubmitted(false)
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: VALIDATORS[name](value) }))
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    setErrors((current) => ({ ...current, [name]: VALIDATORS[name](value) }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = Object.fromEntries(
      Object.keys(VALIDATORS).map((name) => [name, VALIDATORS[name](values[name])]),
    )
    setErrors(nextErrors)

    const firstInvalid = Object.keys(nextErrors).find((name) => nextErrors[name])
    if (firstInvalid) {
      event.currentTarget.elements[firstInvalid].focus()
      return
    }

    // No backend: the assignment only requires frontend validation.
    setSubmitted(true)
    setValues(INITIAL_VALUES)
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="We would love to hear from you"
          intro="Questions about admissions, campus visits or boarding life? Send us a message."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <ul className="space-y-5">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sun/30 text-link">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">{item.label}</p>
                    <a href={item.href} className="font-medium text-ink hover:text-link">
                      {item.text}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">
              Landline:{' '}
              {SITE.landlines.map((line, index) => (
                <span key={line.href}>
                  {index > 0 && ', '}
                  <a href={line.href} className="hover:text-link">
                    {line.label}
                  </a>
                </span>
              ))}
            </p>
            <iframe
              title="Tulas International School location on Google Maps"
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full rounded-3xl border border-line"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 rounded-3xl border border-line bg-surface p-6 sm:p-8"
            >
              {FIELDS.map((field) => (
                <FormField
                  key={field.name}
                  {...field}
                  value={values[field.name]}
                  error={errors[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ))}
              <Button type="submit" className="w-full">
                Send message
              </Button>
              {submitted && (
                <p role="status" className="rounded-xl bg-sun/30 px-4 py-3 text-sm text-ink">
                  Thank you! Your message has been validated. (Demo form: nothing is sent.)
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
