const faqs = [
  {
    q: 'Como funciona o teste grátis?',
    a: 'Quando você cria a conta, ganha 7 dias com TODAS as funcionalidades liberadas. Não pedimos cartão de crédito no cadastro. Quando os 7 dias acabam, você escolhe um plano (ou sai sem pagar nada — seus dados ficam guardados por 30 dias caso queira voltar).',
  },
  {
    q: 'E se eu não gostar depois de pagar?',
    a: 'Você tem 7 dias pra pedir reembolso integral via email — sem precisar justificar. É garantia incondicional, baseada no Art. 49 do CDC. A gente devolve 100% do valor no mesmo cartão/método em até 5 dias úteis.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim. Cancela direto no app (Assinatura → Gerenciar) — abre o portal do Stripe e em 2 cliques você cancela. Mantém o acesso até o fim do ciclo que já pagou.',
  },
  {
    q: 'Qual a diferença pro Mobills / Organizze?',
    a: 'Os dois são ótimos, mas pensam em "mês a mês". O Sua Grana mostra o ANO INTEIRO numa tela só — janeiro a dezembro, sobra mensal, sobra anual, projeção do saldo. Pra quem quer planejar (e não só registrar) o ano, é uma diferença grande. Veja a comparação completa logo acima.',
  },
  {
    q: 'Meus dados financeiros estão seguros?',
    a: 'Sim. Dados em PostgreSQL gerenciado (Supabase) com criptografia em repouso e em trânsito (TLS 1.3). Cada conta só consegue ler seus próprios dados via Row-Level Security do banco. Pagamentos passam pela Stripe — número de cartão NUNCA toca nosso servidor. LGPD compliance completa (opt-in granular pra analytics/marketing, política transparente, direito de exclusão).',
  },
  {
    q: 'Funciona no celular?',
    a: 'Funciona — é um web app responsivo, abre direto no navegador do celular sem instalar nada. App nativo (iOS/Android) está no roadmap pra 2027.',
  },
  {
    q: 'Posso usar com mais de uma pessoa? (família/casal)',
    a: 'Hoje cada assinatura é individual. Casais usam contas separadas e cada um cuida da sua grade. Suporte a contas compartilhadas (família) está no roadmap.',
  },
  {
    q: 'E se eu quiser exportar tudo pra fora?',
    a: 'Você pode exportar seus lançamentos em CSV a qualquer momento. Cancelou e quer apagar tudo? Pede pelo email e a gente exclui em 48h (LGPD Art. 18). Sem amarrar você por dado.',
  },
  {
    q: 'Por que pagar se eu já tenho uma planilha?',
    a: 'Planilha quebra com fórmula errada. Não te avisa do que tá pra vencer. Não importa CSV automaticamente. Não tem dashboard. Não roda no celular. E você gasta 1-2h por mês mantendo ela. R$ 14,99/mês é o preço de um café por semana pra essas horas de volta.',
  },
  {
    q: 'É confiável? Vocês são uma empresa?',
    a: 'Sim — produto da Xavier Tecnologia LTDA, CNPJ 43.702.960/0001-06, sede em Fortaleza/CE. Suporte humano por WhatsApp e email. Você fala com pessoa, não com bot.',
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
          <p className="mt-3 text-base text-slate-600">
            Não achou a sua?{' '}
            <a
              href="https://wa.me/5585998164001"
              className="font-semibold text-emerald-700 hover:underline"
            >
              Manda no WhatsApp
            </a>{' '}
            — respondo eu mesmo.
          </p>
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
