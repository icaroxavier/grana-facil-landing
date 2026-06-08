/**
 * Meta Pixel na landing — wrapper LGPD-aware.
 *
 * Eventos disparados (so com consent marketing):
 *   - PageView: toda navegacao
 *   - Lead: clicou em um CTA principal (Hero, Pricing, FinalCTA)
 *   - ViewContent: rolou ate Pricing/FAQ (opcional, futuro)
 *
 * Diferenca do app: usa NEXT_PUBLIC_* em vez de VITE_* (Next.js).
 * Mesmo Pixel ID (1009993538561864) usado em ambos pra Meta atribuir
 * a jornada inteira (visita landing -> click CTA -> signup -> subscribe).
 */

const STORAGE_KEY = 'suagrana-landing-consent'

interface Consent {
  necessary: true
  marketing: boolean
  decided_at: string
}

export function readConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as Consent
  } catch {
    return null
  }
}

export function writeConsent(marketing: boolean): void {
  if (typeof window === 'undefined') return
  const c: Consent = {
    necessary: true,
    marketing,
    decided_at: new Date().toISOString(),
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(c))
  window.dispatchEvent(
    new CustomEvent('suagrana:consent:changed', { detail: c }),
  )
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: (...args: unknown[]) => void
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID as string | undefined

let initialized = false

function canTrack(): boolean {
  if (!PIXEL_ID) return false
  return readConsent()?.marketing === true
}

export function initMetaPixel(): void {
  if (typeof window === 'undefined') return
  if (initialized) return
  if (!canTrack()) return

  /* eslint-disable */
  ;(function (f: any, b: Document, e: string, v: string) {
    if (f.fbq) return
    const n: any = (f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    })
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    const t = b.createElement(e) as HTMLScriptElement
    t.async = true
    t.src = v
    const s = b.getElementsByTagName(e)[0]
    s?.parentNode?.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  /* eslint-enable */

  window.fbq?.('init', PIXEL_ID)
  window.fbq?.('track', 'PageView')
  initialized = true
}

type StandardEvent =
  | 'PageView'
  | 'ViewContent'
  | 'Lead'
  | 'CompleteRegistration'
  | 'InitiateCheckout'

export function trackMetaEvent(
  eventName: StandardEvent,
  params?: Record<string, unknown>,
): void {
  if (!canTrack()) return
  if (!initialized) initMetaPixel()
  if (!initialized) return
  window.fbq?.('track', eventName, params ?? {})
}

/**
 * Helper especifico pro CTA "Comecar gratis" — sinaliza intent de signup.
 * Dispara antes de redirecionar pro app.suagrana.com/login pra Meta
 * conectar a sessao de landing com a de app.
 */
export function trackLeadCTA(source: string): void {
  trackMetaEvent('Lead', { content_name: source })
}

export function refreshMetaPixelConsent(): void {
  if (initialized) return
  initMetaPixel()
}
