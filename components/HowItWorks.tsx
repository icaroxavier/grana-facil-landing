const steps = [
  {
    n: 1,
    title: 'Cadastre suas recorrências',
    desc: 'Aluguel, salário, faturas, assinaturas. Em 5 minutos o ano todo fica projetado.',
  },
  {
    n: 2,
    title: 'Confirme valores ao longo do mês',
    desc: 'Pagou o aluguel? Marca como pago. Recebeu menos do salário? Atualiza. A grade ajusta.',
  },
  {
    n: 3,
    title: 'Veja o que sobra (de verdade)',
    desc: 'Sobra mensal, sobra anual, alertas do que tá pra vencer. Nunca mais perdido.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Três passos. Sem onboarding chato.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-income text-base font-bold text-white">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
