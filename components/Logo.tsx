import Link from 'next/link'

import { SITE } from '@/lib/site'

type LogoSize = 'sm' | 'md' | 'lg' | 'hero'

interface LogoProps {
  size?: LogoSize
  /** Mostrar wordmark "Sua Grana" ao lado do ícone */
  withWordmark?: boolean
  /** Envolver num <Link href="/">. Default true. */
  asLink?: boolean
  className?: string
}

const sizeMap: Record<LogoSize, { icon: number; text: string; gap: string; rounded: string }> = {
  sm: { icon: 32, text: 'text-base font-bold', gap: 'gap-2', rounded: 'rounded-lg' },
  md: { icon: 44, text: 'text-lg font-bold', gap: 'gap-2.5', rounded: 'rounded-xl' },
  lg: { icon: 64, text: 'text-2xl font-extrabold', gap: 'gap-3', rounded: 'rounded-2xl' },
  hero: { icon: 96, text: 'text-3xl font-extrabold', gap: 'gap-4', rounded: 'rounded-3xl' },
}

/**
 * Logo reutilizável — SVG inline (sem FOUC/CLS) com gradient verde e
 * "G" branco. Igual ao `public/logo-1080.svg` mas como componente
 * React pra escalar pra qualquer tamanho.
 *
 * Uso:
 *   <Logo />                       — pequeno, com wordmark, linka pra /
 *   <Logo size="hero" />           — gigante (hero da landing)
 *   <Logo withWordmark={false} />  — só ícone (favicon, footer compacto)
 */
export function Logo({
  size = 'sm',
  withWordmark = true,
  asLink = true,
  className = '',
}: LogoProps) {
  const s = sizeMap[size]
  const content = (
    <div className={`flex items-center ${s.gap} ${className}`}>
      <LogoIcon size={s.icon} rounded={s.rounded} />
      {withWordmark && <span className={s.text}>{SITE.name}</span>}
    </div>
  )
  if (!asLink) return content
  return (
    <Link href="/" className="inline-flex items-center" aria-label={`${SITE.name} — início`}>
      {content}
    </Link>
  )
}

function LogoIcon({ size, rounded }: { size: number; rounded: string }) {
  // Raio do <rect> SVG ajusta automaticamente conforme o tamanho.
  const r = (size / 1080) * 240
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1080 1080"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${rounded}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`grad-${size}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect width="1080" height="1080" rx={(r * 1080) / size} fill={`url(#grad-${size})`} />
      <text
        x="540"
        y="770"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        fontSize="780"
        fontWeight="900"
        fill="#ffffff"
        letterSpacing="-30"
      >
        G
      </text>
    </svg>
  )
}
