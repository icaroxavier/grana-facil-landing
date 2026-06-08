import Link from 'next/link'

import { SITE } from '@/lib/site'
import { Logo } from '@/components/Logo'

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo size="sm" />
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          <Link href="#tour" className="hover:text-slate-900">
            Tour
          </Link>
          <Link href="#comparacao" className="hover:text-slate-900">
            Compare
          </Link>
          <Link href="#planos" className="hover:text-slate-900">
            Planos
          </Link>
          <Link href="#faq" className="hover:text-slate-900">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={SITE.loginUrl}
            className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 sm:inline-block"
          >
            Entrar
          </Link>
          <Link
            href={SITE.loginUrl}
            className="inline-flex items-center gap-1 rounded-lg bg-income px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            Começar grátis
          </Link>
        </div>
      </div>
    </header>
  )
}
