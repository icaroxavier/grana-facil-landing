import type { Metadata } from 'next'

import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do Sua Grana.',
  alternates: { canonical: '/termos' },
}

export default function Page() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Termos de Uso</h1>
        <p className="mt-2 text-sm text-slate-500">
          Última atualização: junho de 2026
        </p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="mt-6 text-lg font-bold">1. Aceitação</h2>
            <p>
              Ao criar uma conta no <strong>{SITE.name}</strong>, você
              concorda com estes Termos de Uso e com nossa{' '}
              <a href="/privacidade" className="text-income underline">
                Política de Privacidade
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">2. Descrição do serviço</h2>
            <p>
              O Sua Grana é uma ferramenta web pra controle financeiro
              pessoal. Não somos consultores financeiros, banco, corretora
              nem instituição autorizada pelo Banco Central. As informações
              que você insere são para seu próprio uso e organização.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">3. Conta de usuário</h2>
            <p>
              Você é responsável por manter sua senha em sigilo e por toda
              atividade na sua conta. Avise imediatamente em caso de uso
              não autorizado.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">4. Período de teste</h2>
            <p>
              Toda conta nova ganha 7 dias de acesso completo. Após esse
              período, é necessário escolher um plano pra continuar usando.
              Não pedimos cartão de crédito no cadastro.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">5. Pagamentos</h2>
            <p>
              Os planos são cobrados em ciclo recorrente (mensal, trimestral,
              semestral ou anual) pela Stripe. O cancelamento pode ser feito
              a qualquer momento pelo painel de assinatura. Você mantém o
              acesso até o fim do ciclo pago — não há reembolso
              proporcional, exceto quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">6. Uso permitido</h2>
            <p>
              Você concorda em não:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Usar o serviço pra atividades ilegais ou fraudulentas.</li>
              <li>
                Tentar acessar dados de outros usuários, fazer engenharia
                reversa ou bypassar mecanismos de segurança.
              </li>
              <li>Revender o acesso pra terceiros.</li>
              <li>Usar a plataforma pra spam ou conteúdo abusivo.</li>
            </ul>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">7. Propriedade intelectual</h2>
            <p>
              O nome, logo, design e código do Sua Grana são nossos. Os
              <strong> dados financeiros</strong> que você insere{' '}
              <strong>são seus</strong> — você é o titular e pode exportá-los
              ou solicitar exclusão a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">8. Limitação de responsabilidade</h2>
            <p>
              O serviço é fornecido "como está". Não nos responsabilizamos
              por decisões financeiras que você tome com base em informações
              do app. Faça backup dos seus dados (a função de exportar CSV
              está sempre disponível).
            </p>
            <p>
              Não somos responsáveis por danos indiretos, lucros cessantes
              ou perda de dados decorrentes de uso ou impossibilidade de
              uso do serviço, exceto em casos previstos pelo Código de
              Defesa do Consumidor.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">9. Suspensão e encerramento</h2>
            <p>
              Podemos suspender ou encerrar contas que violem estes Termos.
              Você pode encerrar sua conta a qualquer momento — os dados
              são apagados em até 30 dias.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">10. Lei aplicável</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do
              Brasil. Fica eleito o foro da comarca do consumidor, ou no
              último domicílio conhecido do titular, conforme CDC.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">11. Contato</h2>
            <p>
              Dúvidas sobre estes Termos:{' '}
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="text-income underline"
              >
                {SITE.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
