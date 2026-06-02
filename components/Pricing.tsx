import Link from 'next/link'
import { Check, Crown, Sparkles } from 'lucide-react'

import { SITE } from '@/lib/site'

const plans = [
  {
    id: 'monthly',
    name: 'Mensal',
    price: 1990,
    period: '/mês',
    cycle: 'mensal',
    save: 0,
    tagline: 'Sem compromisso',
  },
  {
    id: 'quarterly',
    name: 'Trimestral',
    price: 5390,
    period: 'a cada 3 meses',
    cycle: 'trimestre',
    save: 10,
    tagline: 'Economize 10%',
  },
  {
    id: 'semiannual',
    name: 'Semestral',
    price: 9990,
    period: 'a cada 6 meses',
    cycle: 'semestre',
    save: 16,
    tagline: 'Economize 16%',
    badge: 'Mais popular',
    badgeIcon: Sparkles,
  },
  {
    id: 'annual',
    name: 'Anual',
    price: 17990,
    period: '/ano',
    cycle: 'ano',
    save: 25,
    tagline: 'R$ 14,99/mês equivalente',
    badge: 'Melhor valor',
    badgeIcon: Crown,
    highlighted: true,
  },
]

const benefits = [
  'Lançamentos ilimitados',
  'Recorrências (mensal/anual)',
  'Faturas de cartão + parcelamentos',
  'Reservar com cascata e projeção',
  'Devedores',
  'Dashboard com gráficos e ETA das metas',
  'Importação de extrato em CSV',
  'Alertas de pendências',
  'Backup automático em nuvem',
]

function formatBRL(cents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100)
}

export function Pricing() {
  return (
    <section id="planos" className="border-b py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Um preço justo.{' '}
            <span className="text-income">7 dias grátis</span> pra experimentar.
          </h2>
          <p className="mt-4 text-balance text-lg text-slate-600">
            Cancele a qualquer momento. Sem fidelidade. Sem letras miúdas.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const monthlyEquivalent = Math.round(
              plan.price /
                (plan.id === 'monthly'
                  ? 1
                  : plan.id === 'quarterly'
                    ? 3
                    : plan.id === 'semiannual'
                      ? 6
                      : 12)
            )
            const Badge = plan.badgeIcon
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-xl border bg-white p-6 transition-shadow hover:shadow-lg ${
                  plan.highlighted
                    ? 'border-income/60 shadow-md ring-2 ring-income/20'
                    : ''
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      plan.highlighted
                        ? 'bg-income text-white'
                        : 'bg-slate-900 text-white'
                    }`}
                  >
                    {Badge && <Badge className="h-3 w-3" />}
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-xs text-slate-500">{plan.tagline}</p>
                </div>

                <div className="mt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold tabular-nums">
                      {formatBRL(monthlyEquivalent)}
                    </span>
                    <span className="text-xs text-slate-500">/mês</span>
                  </div>
                  {plan.id !== 'monthly' && (
                    <p className="mt-1 text-xs text-slate-500">
                      {formatBRL(plan.price)} {plan.period}
                    </p>
                  )}
                  {plan.save > 0 && (
                    <p className="mt-1 text-xs font-semibold text-income">
                      -{plan.save}% vs mensal
                    </p>
                  )}
                </div>

                <Link
                  href={SITE.loginUrl}
                  className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-income text-white hover:bg-emerald-700'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Começar grátis por 7 dias
                </Link>
              </div>
            )
          })}
        </div>

        {/* Benefícios compartilhados */}
        <div className="mt-10 rounded-xl border bg-slate-50 p-6">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-slate-700">
            Todos os planos incluem
          </p>
          <ul className="grid grid-cols-2 gap-y-2 text-sm sm:grid-cols-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-income" />
                <span className="text-slate-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
