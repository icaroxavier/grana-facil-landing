import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

import { SITE } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-emerald-50/60 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Texto */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              <Sparkles className="h-3.5 w-3.5" />
              7 dias grátis, cancele quando quiser
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Substitua sua planilha.{' '}
              <span className="text-income">Controle sua grana</span> em
              minutos.
            </h1>
            <p className="max-w-xl text-balance text-lg text-slate-600">
              O Grana Fácil projeta o ano todo de uma vez, te avisa o que vai
              vencer e mostra quanto sobra mês a mês. Sem planilha. Sem fórmula
              quebrada. Sem surpresa no fim do mês.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={SITE.loginUrl}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-income px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
              >
                Começar grátis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#planos"
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-base font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                Ver planos
              </Link>
            </div>
            <p className="text-xs text-slate-500">
              Sem cartão de crédito no cadastro. R$ 20/mês depois do trial.
            </p>
          </div>

          {/* Mockup ilustrativo (CSS puro — leve, sem imagem externa) */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border bg-white shadow-2xl shadow-emerald-100">
              <div className="flex h-8 items-center gap-1.5 border-b bg-slate-50 px-3">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="ml-3 text-[10px] text-slate-500">
                  grana-facil.vercel.app
                </span>
              </div>
              <div className="grid grid-cols-13 gap-px bg-slate-200 p-2 text-[10px] tabular-nums">
                <div className="bg-white px-2 py-1.5 font-semibold">2025</div>
                {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map(
                  (m, i) => (
                    <div
                      key={i}
                      className="bg-white px-1 py-1.5 text-center font-medium text-slate-500"
                    >
                      {m}
                    </div>
                  )
                )}
                <div className="bg-emerald-50 px-2 py-1.5 font-semibold text-emerald-700">
                  Entradas
                </div>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-emerald-50/60 px-1 py-1.5 text-right text-emerald-700"
                  >
                    8.500
                  </div>
                ))}
                <div className="bg-red-50 px-2 py-1.5 font-semibold text-red-700">
                  Saídas
                </div>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-red-50/60 px-1 py-1.5 text-right text-red-700"
                  >
                    {[5200, 5400, 6100, 5300, 5600, 5800, 5700, 5500, 5900, 6000, 5800, 5400][i].toLocaleString('pt-BR')}
                  </div>
                ))}
                <div className="bg-slate-100 px-2 py-1.5 font-bold">
                  Sobra
                </div>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-slate-100/80 px-1 py-1.5 text-right font-semibold text-slate-900"
                  >
                    {(8500 - [5200, 5400, 6100, 5300, 5600, 5800, 5700, 5500, 5900, 6000, 5800, 5400][i]).toLocaleString('pt-BR')}
                  </div>
                ))}
                {/* Categorias */}
                {[
                  { label: 'Salário', vals: Array(12).fill(8500), color: 'text-emerald-700' },
                  { label: 'Aluguel', vals: Array(12).fill(2200), color: 'text-red-700' },
                  { label: 'Mercado', vals: Array(12).fill(1500), color: 'text-red-700' },
                  { label: 'Cartão', vals: [1200, 1400, 2100, 1300, 1600, 1800, 1700, 1500, 1900, 2000, 1800, 1400], color: 'text-red-700' },
                ].map((row) => (
                  <>
                    <div key={row.label} className="bg-white px-2 py-1.5 text-slate-600">
                      {row.label}
                    </div>
                    {row.vals.map((v, j) => (
                      <div
                        key={j}
                        className={`bg-white px-1 py-1.5 text-right ${row.color}`}
                      >
                        {v.toLocaleString('pt-BR')}
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
            <style>{`.grid-cols-13 { grid-template-columns: 80px repeat(12, 1fr); }`}</style>
          </div>
        </div>
      </div>
    </section>
  )
}
