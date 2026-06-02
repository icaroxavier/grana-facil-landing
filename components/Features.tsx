import {
  Calendar,
  Repeat,
  CreditCard,
  BarChart3,
  Bell,
  Upload,
  PiggyBank,
  Target,
  Users,
  ReceiptText,
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
    icon: ReceiptText,
    title: 'Faturas de cartão',
    desc: 'Cada cartão tem fatura mensal projetada (soma das compras) ou manual. Confirma pagamento em 1 clique.',
  },
  {
    icon: CreditCard,
    title: 'Parcelamento + anuidade',
    desc: 'Compra parcelada vira N lançamentos automáticos. Anuidade do cartão sai do atalho em 5 segundos.',
  },
  {
    icon: Target,
    title: 'Reservar com regras inteligentes',
    desc: 'Crie reservas com aporte fixo, % das entradas ou % da sobra. Cascata por prioridade quando enche uma meta.',
  },
  {
    icon: PiggyBank,
    title: 'Projeção + ETA da meta',
    desc: 'Quando você atinge R$ 100k? E se aportar 25% a mais? O app mostra mês a mês.',
  },
  {
    icon: Bell,
    title: 'Alertas de pendência',
    desc: 'Atrasados, vence hoje, próximos 7 dias. Lançamentos, faturas e aportes — tudo num lugar só.',
  },
  {
    icon: BarChart3,
    title: 'Dashboard com gráficos',
    desc: 'KPIs do ano, evolução mensal, breakdown por categoria, resumo das reservas. Tudo em um clique.',
  },
  {
    icon: Upload,
    title: 'Importação CSV',
    desc: 'Cole o extrato do banco e categorize de uma vez. Sem digitar lançamento por lançamento.',
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
