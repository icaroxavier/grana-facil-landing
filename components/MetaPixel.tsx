'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import {
  initMetaPixel,
  refreshMetaPixelConsent,
  trackMetaEvent,
} from '@/lib/metaPixel'

/**
 * Monta o Meta Pixel na landing e dispara PageView a cada mudanca de rota.
 *
 * Plugar UMA vez no layout.tsx (dentro do <body>, como client component).
 * Init e lazy — so carrega snippet do Pixel se consent.marketing=true
 * e NEXT_PUBLIC_META_PIXEL_ID estiver setado.
 *
 * Tambem escuta 'suagrana:consent:changed' pra ativar imediatamente
 * quando user opta-in sem precisar navegar.
 */
export function MetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    initMetaPixel()
    trackMetaEvent('PageView')
  }, [pathname])

  useEffect(() => {
    const onChange = () => refreshMetaPixelConsent()
    window.addEventListener('suagrana:consent:changed', onChange)
    return () =>
      window.removeEventListener('suagrana:consent:changed', onChange)
  }, [])

  return null
}
