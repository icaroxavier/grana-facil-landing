import Link from 'next/link'
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react'

import { SITE } from '@/lib/site'

/**
 * CTA final — urgência sutil (não falsa) baseada no calendário real do user:
 * o ano tem 12 meses e cada mês que passa sem planejar é mês perdido.
 *
 * Reforça selos de segurança lado a lado do botão pra remover ansiedade
 * no clique.
 */
export function FinalCTA() {
  return (
    <section className="border-b bg-gradient-to-b from-white to-emerald-50/40 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
          <Clock className="h-4 w-4" />
          Cada mês sem planejar é R$ a menos no fim do ano
        </div>

        <h2 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
          Comece hoje.{' '}
          <span className="text-income">Veja dezembro em 5 minutos.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-slate-600">
          Cadastra suas recorrências, o app monta o ano inteiro pra você. Sem
          planilha. Sem fórmula. Sem cartão pra começar.
        </p>

        <Link
          href={SITE.loginUrl}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-income px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-200/50 transition-all hover:bg-emerald-700 hover:shadow-xl"
        >
          Criar minha conta grátis
          <ArrowRight className="h-5 w-5" />
        </Link>

        {/* Selos lado a lado, removem fricção */}
        <ul className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-600">
          <li className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Sem cartão no cadastro
          </li>
          <li className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Reembolso garantido em 7 dias
          </li>
          <li className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Cancele quando quiser
          </li>
        </ul>

        <p className="mt-4 text-xs text-slate-500">
          A partir de <strong className="text-slate-700">R$ 14,99/mês</strong>{' '}
          no plano anual. Garantia incondicional pelo CDC Art. 49.
        </p>
      </div>
    </section>
  )
}
