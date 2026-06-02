const faqs = [
  {
    q: 'Como funciona o teste grátis?',
    a: 'Quando você cria a conta, ganha 7 dias com todas as funcionalidades liberadas. Não pedimos cartão de crédito no cadastro. Quando os 7 dias acabam, você escolhe um plano (ou sai sem pagar nada).',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim, qualquer plano. Você cancela direto no portal do Stripe (acesso pelo app, em Assinatura → Gerenciar). Mantém o acesso até o fim do ciclo que já pagou.',
  },
  {
    q: 'Meus dados financeiros estão seguros?',
    a: 'Sim. Os dados ficam em banco gerenciado (Supabase / PostgreSQL) com criptografia em repouso e em trânsito (TLS). Cada usuário só consegue ler seus próprios dados via Row-Level Security. Pagamentos passam pela Stripe — a gente não armazena número de cartão.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Funciona — é um web app responsivo, abre direto no navegador do celular. App nativo está no roadmap.',
  },
  {
    q: 'E se eu quiser exportar meus dados?',
    a: 'Você pode exportar seus lançamentos em CSV pelo próprio app. Em caso de cancelamento, seus dados ficam guardados por 30 dias antes de remoção definitiva — tempo de você reativar se quiser.',
  },
  {
    q: 'Por que pagar se eu já tenho uma planilha?',
    a: 'Planilha quebra com fórmula errada, não te avisa do que tá pra vencer, não importa CSV automaticamente, não tem dashboard. O Grana Fácil resolve essas dores e te economiza horas por mês. A partir de R$ 14,99/mês no plano anual — o preço de um café por semana.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="border-b bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border bg-white px-5 py-4 transition-colors hover:border-slate-300"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 font-semibold text-slate-900">
                {item.q}
                <span className="text-slate-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
