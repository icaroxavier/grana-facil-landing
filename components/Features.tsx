import {
  Calendar,
  Repeat,
  CreditCard,
  BarChart3,
  Bell,
  Upload,
  PiggyBank,
  Users,
} from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Grade ano × mês',
    desc: 'Veja janeiro a dezembro em uma única tela. Projete agora, confirme valores reais quando souber.',
  },
  {
    icon: Repeat,
    title: 'Recorrências automáticas',
    desc: 'Aluguel, salário, Netflix… cadastre uma vez e o app gera os 12 meses (ou até quando quiser).',
  },
  {
    icon: CreditCard,
    title: 'Cartões + parcelamento',
    desc: 'Lance uma compra parcelada em N vezes e o app distribui automaticamente pelos meses certos.',
  },
  {
    icon: Bell,
    title: 'Alertas de pendência',
    desc: 'Atrasados, vence hoje, próximos 7 dias. Nunca mais paga juros por esquecer.',
  },
  {
    icon: BarChart3,
    title: 'Dashboard com gráficos',
    desc: 'KPIs do ano, evolução mensal, breakdown por categoria. Entenda pra onde sua grana vai.',
  },
  {
    icon: Upload,
    title: 'Importação CSV',
    desc: 'Cole o extrato do banco e categorize de uma vez. Sem digitar lançamento por lançamento.',
  },
  {
    icon: PiggyBank,
    title: 'Guardado (poupança)',
    desc: 'Acompanhe metas de economia em separado, com projeção de quanto vai render.',
  },
  {
    icon: Users,
    title: 'Devedores',
    desc: 'Quem te deve, quanto e quando. Confirmar pagamento já vira entrada na grade.',
  },
]

export function Features() {
  return (
    <section id="features" className="border-b py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo que sua planilha tem.{' '}
            <span className="text-income">E muito mais.</span>
          </h2>
          <p className="mt-4 text-balance text-lg text-slate-600">
            Os recursos foram desenhados a partir de planilhas reais de
            controle anual. Nada faltando, sem fricção de configuração.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="rounded-xl border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
