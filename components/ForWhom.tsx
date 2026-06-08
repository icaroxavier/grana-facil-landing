import { Briefcase, Heart, Sparkles, TrendingDown } from 'lucide-react'

const personas = [
  {
    icon: Briefcase,
    title: 'CLT com salário fixo',
    desc: 'Vê quanto sobra todo mês, separa pro IPVA de outubro, planeja o 13º.',
    accent: 'emerald',
  },
  {
    icon: TrendingDown,
    title: 'Freelancer / renda variável',
    desc: 'Cadastra projetos como entradas projetadas. Vê meses fracos antes de chegar.',
    accent: 'blue',
  },
  {
    icon: Heart,
    title: 'Casal organizando finanças',
    desc: 'Duas rendas, contas conjuntas, planos pra o ano. Tudo na mesma grade.',
    accent: 'rose',
  },
  {
    icon: Sparkles,
    title: 'Quer sair do vermelho',
    desc: 'Projeta parcelamentos, vê quando zera as dívidas, plano realista.',
    accent: 'amber',
  },
]

const accentMap: Record<string, { bg: string; text: string; ring: string }> = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', ring: 'ring-emerald-200' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', ring: 'ring-blue-200' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', ring: 'ring-rose-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', ring: 'ring-amber-200' },
}

/**
 * Seção "Pra quem é" — quebra a objeção "será que serve pro meu caso?".
 * 4 personas claras com benefício específico, sem precisar de testimonial.
 */
export function ForWhom() {
  return (
    <section className="border-b bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Funciona pra qualquer{' '}
            <span className="text-income">vida financeira</span>
          </h2>
          <p className="mt-4 text-balance text-lg text-slate-600">
            Salário fixo, renda variável, casal, autônomo. Se você quer planejar
            o ano todo, é pra você.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p) => {
            const Icon = p.icon
            const c = accentMap[p.accent]
            return (
              <div
                key={p.title}
                className="rounded-xl border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg ${c.bg} ${c.text} ring-1 ${c.ring}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
