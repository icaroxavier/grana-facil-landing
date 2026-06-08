'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

import { readConsent, writeConsent } from '@/lib/metaPixel'

/**
 * Banner LGPD minimo pra landing.
 *
 * Categorias:
 *   - necessarios: sempre on (sessao, preferencias do banner)
 *   - marketing: opt-in (Meta Pixel pra medir resultados de anuncios)
 *
 * Sem analytics aqui (a landing ja usa Vercel Analytics que e anonimo
 * agregado, OK por interesse legitimo Art. 7 IX LGPD).
 *
 * 'Aceitar todos' e 'Recusar opcionais' tem MESMO destaque visual
 * (sem dark pattern - guia ANPD out/2022).
 */
export function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // 1a visita: abre o banner
    if (!readConsent()) setOpen(true)
  }, [])

  function acceptAll() {
    writeConsent(true)
    setOpen(false)
  }
  function rejectOptionals() {
    writeConsent(false)
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-md rounded-xl border bg-white p-4 shadow-2xl shadow-emerald-900/10 sm:inset-x-auto sm:right-4 sm:bottom-4"
    >
      <div className="flex items-start gap-3">
        <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">Sobre cookies</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            Usamos cookies <strong>necessarios</strong> para o site
            funcionar e cookies de <strong>marketing</strong> (Meta Pixel)
            para medir a eficacia dos nossos anuncios — somente se voce
            permitir.{' '}
            <Link
              href="/cookies"
              className="font-medium text-emerald-700 underline-offset-2 hover:underline"
            >
              Politica de Cookies
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-2">
        <button
          onClick={rejectOptionals}
          className="flex-1 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          Apenas necessarios
        </button>
        <button
          onClick={acceptAll}
          className="flex-1 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          Aceitar todos
        </button>
      </div>
    </div>
  )
}
