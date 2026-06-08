import { Clock, Eye, FileSpreadsheet, ShieldCheck } from 'lucide-react'

const numbers = [
  {
    icon: Clock,
    metric: '5 min',
    label: 'pra ver o ano inteiro projetado',
  },
  {
    icon: Eye,
    metric: '12 meses',
    label: 'em uma única tela — sem rolar',
  },
  {
    icon: FileSpreadsheet,
    metric: '0 fórmulas',
    label: 'pra quebrar com Excel quebrado',
  },
  {
    icon: ShieldCheck,
    metric: '100% LGPD',
    label: 'dados criptografados + opt-in',
  },
]

/**
 * Faixa logo abaixo do Hero — substitui "logos de clientes" enquanto não
 * temos. Mostra promessas concretas e mensuráveis. Visualmente leve.
 */
export function SocialProof() {
  return (
    <section className="border-b bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {numbers.map((n) => {
            const Icon = n.icon
            return (
              <div key={n.label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <p className="text-xl font-extrabold tabular-nums text-slate-900">
                    {n.metric}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {n.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
