'use client'

import Link from 'next/link'
import { ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react'

import { SITE } from '@/lib/site'
import { trackLeadCTA } from '@/lib/metaPixel'

/**
 * Hero da landing — funil de vendas clássico:
 *   1. Pergunta-gatilho (hook) em vez de feature
 *   2. Promessa específica e mensurável
 *   3. CTA primário + secundário lado a lado
 *   4. Selos de prova (sem cartão, dias grátis, garantia, LGPD)
 *   5. Mockup hi-fi com a coluna ANO destacada (a "sacada")
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-emerald-50/60 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          {/* ───── Texto ───── */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              <Zap className="h-3.5 w-3.5" />
              Veja o ano inteiro de uma vez
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Você sabe quanto vai{' '}
              <span className="text-income">sobrar em dezembro</span>?
            </h1>

            <p className="max-w-xl text-balance text-lg leading-relaxed text-slate-600">
              Pare de planejar mês a mês. O Sua Grana monta os 12 meses do seu
              ano em uma tela só — quanto entra, quanto sai, e{' '}
              <strong className="text-slate-900">o que sobra no fim</strong>.
              Sem planilha. Sem fórmula. Sem surpresa.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={SITE.loginUrl}
                onClick={() => trackLeadCTA('hero')}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-income px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
              >
                Ver meu ano em 5 minutos
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#tour"
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                Ver como funciona
              </Link>
            </div>

            {/* Selos de prova/segurança */}
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-slate-600">
              <li className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                7 dias grátis, sem cartão
              </li>
              <li className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Reembolso em até 7 dias
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-emerald-600" />
                LGPD + criptografia
              </li>
            </ul>

            <p className="text-xs text-slate-500">
              A partir de <strong>R$ 14,99/mês</strong> no plano anual. Cancele quando quiser.
            </p>
          </div>

          {/* ───── Mockup hi-fi (CSS puro, leve, sem imagem) ───── */}
          <div className="relative">
            {/* "Janela" do app */}
            <div className="overflow-hidden rounded-2xl border bg-white shadow-2xl shadow-emerald-200/40 ring-1 ring-black/5">
              {/* Barra de janela */}
              <div className="flex h-9 items-center gap-1.5 border-b bg-slate-50 px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 text-[11px] text-slate-500">
                  app.suagrana.com
                </span>
              </div>

              {/* Topbar do app */}
              <div className="flex items-center justify-between border-b bg-white px-3 py-2 text-[10px]">
                <span className="font-bold text-slate-900">Sua Grana</span>
                <div className="flex items-center gap-1.5">
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-500">‹</span>
                  <span className="font-semibold tabular-nums">2026</span>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-500">›</span>
                </div>
              </div>

              {/* Conteúdo: tabela ano × meses + COLUNA ANO em destaque */}
              <div className="bg-white p-3">
                <div className="grid grid-cols-[60px_repeat(6,minmax(0,1fr))_72px] gap-px overflow-hidden rounded-md bg-slate-200 text-[10px] tabular-nums">
                  {/* Header */}
                  <div className="bg-white px-1.5 py-2 font-semibold text-slate-500">Resumo</div>
                  {['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((m) => (
                    <div
                      key={m}
                      className="bg-white px-1 py-2 text-center font-medium text-slate-500"
                    >
                      {m}
                    </div>
                  ))}
                  <div className="bg-amber-50 px-1.5 py-2 text-center font-bold text-amber-900">
                    Ano
                  </div>

                  {/* Entradas */}
                  <div className="bg-emerald-50 px-1.5 py-2 font-semibold text-emerald-700">
                    Entradas
                  </div>
                  {[6500, 6500, 7700, 6500, 6500, 13000].map((v, i) => (
                    <div
                      key={i}
                      className="bg-emerald-50/60 px-1 py-2 text-right text-[9.5px] text-emerald-700"
                    >
                      {v.toLocaleString('pt-BR')}
                    </div>
                  ))}
                  <div className="bg-amber-50 px-1.5 py-2 text-right text-[10.5px] font-bold text-emerald-700">
                    96.717
                  </div>

                  {/* Saídas */}
                  <div className="bg-red-50 px-1.5 py-2 font-semibold text-red-700">
                    Saídas
                  </div>
                  {[7912, 5862, 5862, 5937, 7787, 5937].map((v, i) => (
                    <div
                      key={i}
                      className="bg-red-50/60 px-1 py-2 text-right text-[9.5px] text-red-700"
                    >
                      {v.toLocaleString('pt-BR')}
                    </div>
                  ))}
                  <div className="bg-amber-50 px-1.5 py-2 text-right text-[10.5px] font-bold text-red-700">
                    75.785
                  </div>

                  {/* Sobra — A SACADA */}
                  <div className="bg-slate-100 px-1.5 py-2 font-bold text-slate-900">
                    Sobra
                  </div>
                  {[-1412, 637, 1837, 562, -1287, 7062].map((v, i) => (
                    <div
                      key={i}
                      className={`bg-slate-100/80 px-1 py-2 text-right text-[9.5px] font-semibold tabular-nums ${
                        v < 0 ? 'text-red-600' : 'text-slate-900'
                      }`}
                    >
                      {v.toLocaleString('pt-BR')}
                    </div>
                  ))}
                  <div className="relative bg-amber-100 px-1.5 py-2 text-right text-[11px] font-extrabold text-emerald-700">
                    20.931
                    <span className="absolute -right-1 -top-1 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  </div>
                </div>

                {/* Mini destaque abaixo */}
                <div className="mt-2.5 flex items-center justify-between rounded-md border border-emerald-200 bg-emerald-50/60 px-2.5 py-1.5 text-[10px]">
                  <span className="font-semibold text-emerald-800">
                    💰 Vai sobrar no ano:
                  </span>
                  <span className="font-extrabold tabular-nums text-emerald-700">
                    R$ 20.931,40
                  </span>
                </div>
              </div>
            </div>

            {/* Balão flutuante "ao vivo" */}
            <div className="absolute -bottom-4 -left-4 hidden rounded-lg border bg-white px-3 py-2 text-[11px] shadow-lg sm:block">
              <p className="font-semibold text-slate-900">📅 Vence hoje</p>
              <p className="text-slate-500">Aluguel · R$ 1.800,00</p>
            </div>
            <div className="absolute -right-3 -top-3 hidden rounded-lg border bg-white px-3 py-2 text-[11px] shadow-lg sm:block">
              <p className="font-semibold text-slate-900">📈 +R$ 850</p>
              <p className="text-slate-500">Freela confirmada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
