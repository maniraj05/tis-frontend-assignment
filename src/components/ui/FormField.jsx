export default function FormField({ label, name, type = 'text', value, error, onChange, onBlur, multiline = false, ...rest }) {
  const errorId = `${name}-error`
  const Control = multiline ? 'textarea' : 'input'

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <Control
        id={name}
        name={name}
        {...(multiline ? { rows: 4 } : { type })}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-xl border bg-bg px-4 py-3 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40 ${
          error ? 'border-red-500' : 'border-line'
        }`}
        {...rest}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
