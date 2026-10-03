import { AnimatePresence, motion } from 'framer-motion'
import Icon from './ui/Icon'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line bg-surface text-ink transition hover:border-accent active:scale-90"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          <Icon name={isDark ? 'sun' : 'moon'} className="h-5 w-5" />
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
