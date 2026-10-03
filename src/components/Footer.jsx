import { FOOTER_LINKS, NAV_LINKS, SITE, SOCIALS } from '../data/site'
import Logo from './ui/Logo'

const columnTitle = 'mb-4 font-display text-lg font-semibold text-ink'
const linkStyle = 'text-muted transition hover:text-link'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-muted">
            A CBSE co-educational boarding and day school in Dehradun for boys and girls from Class IV to XII.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-3 py-1.5 text-sm text-muted transition hover:border-accent hover:text-ink"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h2 className={columnTitle}>Quick Links</h2>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkStyle}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Important links">
          <h2 className={columnTitle}>Important Links</h2>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={columnTitle}>Contact</h2>
          <address className="space-y-2 not-italic text-muted">
            <p>{SITE.address}</p>
            <p>
              <a href={SITE.phoneHref} className={linkStyle}>
                {SITE.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`} className={linkStyle}>
                {SITE.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-line px-5 py-6 text-center text-sm text-muted sm:px-8">
        © {new Date().getFullYear()} {SITE.name}, Dehradun. Redesign concept built for a frontend assignment; not the official website.
      </div>
    </footer>
  )
}
