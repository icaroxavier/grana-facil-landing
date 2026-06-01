import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { SITE } from '@/lib/site'

export function FinalCTA() {
  return (
    <section className="border-b py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Comece agora.{' '}
          <span className="text-income">7 dias grátis.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-slate-600">
          Cinco minutos pra setar suas recorrências. O resto do ano vai voar.
        </p>
        <Link
          href={SITE.loginUrl}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-income px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl"
        >
          Criar minha conta
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="mt-4 text-xs text-slate-500">
          Não pedimos cartão no cadastro. Cancele quando quiser.
        </p>
      </div>
    </section>
  )
}
