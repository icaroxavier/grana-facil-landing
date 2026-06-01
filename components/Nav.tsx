import Link from 'next/link'

import { SITE } from '@/lib/site'

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-income font-extrabold text-white">
            G
          </div>
          <span className="text-base font-bold">{SITE.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          <Link href="#features" className="hover:text-slate-900">
            Features
          </Link>
          <Link href="#como-funciona" className="hover:text-slate-900">
            Como funciona
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
