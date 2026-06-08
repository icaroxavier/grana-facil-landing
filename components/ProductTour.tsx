import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { SITE } from '@/lib/site'

/**
 * Mini tour visual em 4 cards — cada um destaca uma tela do app com mockup
 * CSS que evoca o real (sem precisar de PNG). Texto curto + benefício
 * direto.
 */
export function ProductTour() {
  return (
    <section id="tour" className="border-b py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Veja por dentro
          </h2>
          <p className="mt-4 text-balance text-lg text-slate-600">
            Quatro telas. Cada uma resolve um problema que sua planilha não resolve.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* ─── 1. Grade Ano × Mês ─── */}
          <TourCard
            kicker="Grade ano × mês"
            title="O ano inteiro de uma vez"
            body="Jan a Dez na mesma tela. Categorias agrupadas, sobra calculada por mês e a coluna 'Ano' com o seu balanço final."
          >
            <div className="grid grid-cols-[60px_repeat(6,minmax(0,1fr))_60px] gap-px overflow-hidden rounded-md bg-slate-200 text-[9px] tabular-nums">
              <div className="bg-white px-1.5 py-1.5 font-semibold text-slate-500">Compromisso</div>
              {['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((m) => (
                <div key={m} className="bg-white px-1 py-1.5 text-center font-medium text-slate-400">{m}</div>
              ))}
              <div className="bg-amber-50 px-1.5 py-1.5 text-center font-bold text-amber-900">Ano</div>

              <div className="bg-emerald-50 px-1.5 py-1.5 font-semibold text-emerald-700">Entradas</div>
              {[6500, 6500, 7700, 6500, 6500, 13000].map((v, i) => (
                <div key={i} className="bg-emerald-50/60 px-1 py-1.5 text-right text-emerald-700">{v.toLocaleString('pt-BR')}</div>
              ))}
              <div className="bg-amber-50 px-1 py-1.5 text-right font-bold text-emerald-700">96.717</div>

              <div className="bg-red-50 px-1.5 py-1.5 font-semibold text-red-700">Saídas</div>
              {[7912, 5862, 5862, 5937, 7787, 5937].map((v, i) => (
                <div key={i} className="bg-red-50/60 px-1 py-1.5 text-right text-red-700">{v.toLocaleString('pt-BR')}</div>
              ))}
              <div className="bg-amber-50 px-1 py-1.5 text-right font-bold text-red-700">75.785</div>

              <div className="bg-slate-100 px-1.5 py-1.5 font-bold text-slate-900">Sobra</div>
              {[-1412, 637, 1837, 562, -1287, 7062].map((v, i) => (
                <div key={i} className={`bg-slate-100/80 px-1 py-1.5 text-right font-semibold ${v < 0 ? 'text-red-600' : 'text-slate-900'}`}>{v.toLocaleString('pt-BR')}</div>
              ))}
              <div className="bg-amber-100 px-1 py-1.5 text-right font-extrabold text-emerald-700">20.931</div>
            </div>
          </TourCard>

          {/* ─── 2. Pendências ─── */}
          <TourCard
            kicker="Pendências"
            title="Nunca mais esquece de pagar"
            body="Atrasados, vence hoje, próximos 7 dias. Em vermelho o que ficou pra trás, em verde o que tá no prazo."
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between rounded-md border border-red-200 bg-red-50/70 px-3 py-2 text-[11px]">
                <span className="font-semibold text-red-900">⚠ Atrasado</span>
                <span className="font-extrabold text-red-700">R$ 19.238,80</span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-amber-200 bg-amber-50/70 px-3 py-2 text-[11px]">
                <span className="font-semibold text-amber-900">📅 Vence hoje</span>
                <span className="font-extrabold text-amber-700">R$ 65,00</span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-[11px]">
                <span className="font-semibold text-slate-700">⏰ Próximos 7 dias</span>
                <span className="font-extrabold text-slate-900">R$ 897,80</span>
              </div>
              <ul className="mt-2 space-y-0.5 text-[10px] text-slate-500">
                <li>• Aluguel · Jun/2026 · R$ 1.800,00</li>
                <li>• Academia (SmartFit) · Jun/2026 · R$ 120,00</li>
                <li>• iPhone 14 (6/12) · Jun/2026 · R$ 420,00</li>
              </ul>
            </div>
          </TourCard>

          {/* ─── 3. Dashboard com projeção ─── */}
          <TourCard
            kicker="Dashboard"
            title="Saldo acumulado do ano"
            body="Veja seu dinheiro crescer mês a mês. Quanto entrou, quanto saiu, quanto sobrou — em gráfico de linha."
          >
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="rounded-md bg-emerald-50 p-2">
                  <p className="text-emerald-600">Entradas (ano)</p>
                  <p className="text-lg font-extrabold text-emerald-700">R$ 96.717</p>
                </div>
                <div className="rounded-md bg-red-50 p-2">
                  <p className="text-red-600">Saídas (ano)</p>
                  <p className="text-lg font-extrabold text-red-700">R$ 75.785</p>
                </div>
              </div>
              {/* Mini gráfico de linha (SVG inline) */}
              <svg viewBox="0 0 240 80" className="h-20 w-full">
                <defs>
                  <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgb(16,185,129)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="rgb(16,185,129)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,70 L20,55 L40,50 L60,48 L80,42 L100,40 L120,38 L140,35 L160,30 L180,25 L200,15 L220,8 L240,5 L240,80 L0,80 Z" fill="url(#grad)" />
                <path d="M0,70 L20,55 L40,50 L60,48 L80,42 L100,40 L120,38 L140,35 L160,30 L180,25 L200,15 L220,8 L240,5" stroke="rgb(16,185,129)" strokeWidth="2" fill="none" />
              </svg>
              <p className="text-center text-[10px] font-semibold text-slate-700">
                Sobra projetada: <span className="text-emerald-700">R$ 20.931,40</span>
              </p>
            </div>
          </TourCard>

          {/* ─── 4. Recorrências ─── */}
          <TourCard
            kicker="Recorrências"
            title="Cadastra uma vez. O ano todo aparece."
            body="Aluguel, salário, Netflix, plano de saúde… Define o valor + dia + período. O app gera todos os meses."
          >
            <ul className="space-y-1.5 text-[11px]">
              {[
                { name: 'Salário CLT', tag: 'Entrada', value: 'R$ 6.500,00', day: 'dia 5', color: 'emerald' },
                { name: 'Aluguel', tag: 'Saída', value: 'R$ 1.800,00', day: 'dia 5', color: 'red' },
                { name: 'Plano de saúde (Hapvida)', tag: 'Saída', value: 'R$ 380,00', day: 'dia 10', color: 'red' },
                { name: 'Netflix', tag: 'Saída', value: 'R$ 45,90', day: 'dia 8', color: 'red' },
              ].map((r) => (
                <li key={r.name} className="flex items-center gap-2 rounded-md border bg-white px-2.5 py-2">
                  <span className={`inline-block h-2 w-2 rounded-full ${r.color === 'emerald' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                  <span className="flex-1 font-medium text-slate-800">{r.name}</span>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-600">
                    {r.tag}
                  </span>
                  <span className="font-bold tabular-nums text-slate-900">{r.value}</span>
                  <span className="text-slate-400">{r.day}</span>
                </li>
              ))}
            </ul>
          </TourCard>
        </div>

        <div className="mt-12 text-center">
          <Link
            href={SITE.loginUrl}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-income px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
          >
            Experimentar grátis por 7 dias
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-3 text-xs text-slate-500">Sem cartão. Sem fidelidade.</p>
        </div>
      </div>
    </section>
  )
}

function TourCard({
  kicker,
  title,
  body,
  children,
}: {
  kicker: string
  title: string
  body: string
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="grid gap-5 p-6 sm:grid-cols-[1fr_1fr] sm:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">{kicker}</p>
          <h3 className="mt-1 text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
        </div>
        <div className="rounded-xl border bg-slate-50/60 p-3">{children}</div>
      </div>
    </div>
  )
}
