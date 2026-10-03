const TREES = [90, 190, 610, 710]

/** Fallback illustration for the About image: school building, trees and a sports field. */
export default function AboutArt() {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Illustration of a school building with trees and a sports field"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <rect width="800" height="600" style={{ fill: 'var(--hero-sky)' }} />
      <circle cx="660" cy="130" r="56" style={{ fill: 'var(--sun)' }} />
      <path d="M0 360 L130 290 L260 350 L400 260 L540 350 L680 290 L800 340 V600 H0Z" style={{ fill: 'var(--ridge-a)' }} />
      <rect y="400" width="800" height="200" style={{ fill: 'var(--ridge-b)' }} />
      <g style={{ fill: 'var(--ridge-c)' }}>
        <rect x="290" y="300" width="220" height="110" />
        <rect x="380" y="250" width="40" height="60" />
        <path d="M372 250 L400 218 L428 250Z" />
        {TREES.map((x) => (
          <g key={x}>
            <rect x={x - 6} y="360" width="12" height="50" />
            <circle cx={x} cy="340" r="38" />
          </g>
        ))}
      </g>
      <g style={{ fill: 'var(--sun)' }}>
        {[310, 350, 440, 480].map((x) => (
          <rect key={x} x={x} y="330" width="18" height="26" />
        ))}
        <rect x="390" y="268" width="20" height="24" />
      </g>
      <g style={{ stroke: 'var(--ink)', fill: 'none' }} strokeWidth="3" opacity="0.5">
        <path d="M60 470 H740 M60 520 H740 M60 570 H740" />
      </g>
    </svg>
  )
}
