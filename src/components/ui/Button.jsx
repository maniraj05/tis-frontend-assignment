import Icon from './Icon'

const VARIANTS = {
  primary: 'bg-sun text-navy border-ink shadow-[4px_4px_0_0_var(--ink)]',
  secondary: 'bg-surface text-ink border-ink shadow-[4px_4px_0_0_var(--ink)]',
  onDark: 'bg-transparent text-white border-white shadow-[4px_4px_0_0_#ffffff]',
}

/** Sticker-style button. Renders a link when `href` is given, otherwise a <button>. */
export default function Button({ href, variant = 'primary', arrow = false, className = '', children, ...rest }) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-xl border-2 px-6 py-3 text-sm font-bold transition-[translate,box-shadow] duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_currentColor] active:translate-x-1 active:translate-y-1 active:shadow-none ${VARIANTS[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  )

  if (!href) {
    return (
      <button className={classes} {...rest}>
        {content}
      </button>
    )
  }

  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={classes}
      {...rest}
    >
      {content}
    </a>
  )
}
