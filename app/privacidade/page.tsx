import type { Metadata } from 'next'

import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade do Grana Fácil — em conformidade com a LGPD.',
  alternates: { canonical: '/privacidade' },
}

export default function Page() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-slate-500">
          Última atualização: junho de 2026
        </p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="mt-6 text-lg font-bold">1. Quem somos</h2>
            <p>
              O <strong>{SITE.name}</strong> é um aplicativo web de controle
              financeiro pessoal. Esta política descreve como coletamos,
              usamos e protegemos seus dados em conformidade com a Lei Geral
              de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>
            <p>
              Para questões de privacidade, contate{' '}
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="text-income underline"
              >
                {SITE.contactEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">2. Quais dados coletamos</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Dados de cadastro:</strong> email e (opcionalmente)
                nome. Senha armazenada com hash criptográfico (bcrypt).
              </li>
              <li>
                <strong>Login social (Google OAuth):</strong> quando você
                escolhe entrar com Google, recebemos email e nome do perfil.
              </li>
              <li>
                <strong>Dados financeiros que você insere:</strong>{' '}
                descrições, valores, datas e categorias dos seus lançamentos.
                Esses dados são <em>seus</em> — você é o titular.
              </li>
              <li>
                <strong>Dados de pagamento:</strong> processados pela Stripe.
                <strong> Não armazenamos número de cartão.</strong> Guardamos
                apenas um identificador opaco da assinatura.
              </li>
              <li>
                <strong>Dados técnicos:</strong> através do Vercel Analytics
                e Vercel Speed Insights, coletamos métricas anônimas de uso
                (pageviews, Web Vitals) sem cookies de rastreamento de
                terceiros.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">
              3. Como usamos seus dados
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Operar o serviço (autenticar, salvar lançamentos).</li>
              <li>Cobrar assinaturas e processar pagamentos (via Stripe).</li>
              <li>Enviar emails essenciais (confirmação, recibos).</li>
              <li>
                Entender uso agregado e performance pra melhorar o produto.
              </li>
            </ul>
            <p>
              <strong>Não usamos seus dados financeiros</strong> pra publicidade,
              não vendemos pra terceiros e não treinamos modelos de IA com
              eles.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">4. Base legal (LGPD)</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Execução de contrato</strong> (Art. 7º, V): pra prestar
                o serviço que você assinou.
              </li>
              <li>
                <strong>Consentimento</strong> (Art. 7º, I): pra analytics
                opcionais e comunicações de marketing.
              </li>
              <li>
                <strong>Cumprimento de obrigação legal</strong> (Art. 7º, II):
                pra reter dados fiscais quando exigido por lei.
              </li>
              <li>
                <strong>Legítimo interesse</strong> (Art. 7º, IX): pra prevenir
                fraude e garantir segurança.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">5. Com quem compartilhamos</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Supabase</strong> (Estados Unidos): host do banco de
                dados e auth. Subprocessador essencial.
              </li>
              <li>
                <strong>Stripe</strong> (Irlanda/Estados Unidos): processamento
                de pagamentos.
              </li>
              <li>
                <strong>Vercel</strong> (Estados Unidos): hospedagem da
                aplicação e analytics anônimos.
              </li>
              <li>
                <strong>Google</strong> (somente se usar login social):
                autenticação OAuth.
              </li>
            </ul>
            <p>
              Transferências internacionais seguem o disposto no Art. 33 da
              LGPD (países com nível de proteção adequado ou cláusulas
              contratuais padrão).
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">6. Seus direitos (LGPD)</h2>
            <p>Você pode, a qualquer momento:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Confirmar o tratamento dos seus dados.</li>
              <li>Acessar e exportar seus lançamentos (CSV no app).</li>
              <li>Corrigir dados imprecisos.</li>
              <li>
                Solicitar a anonimização, bloqueio ou eliminação dos seus
                dados.
              </li>
              <li>Solicitar portabilidade dos dados.</li>
              <li>Revogar consentimento.</li>
            </ul>
            <p>
              Pra exercer qualquer um, envie email pra{' '}
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="text-income underline"
              >
                {SITE.contactEmail}
              </a>
              . Respondemos em até 15 dias.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">7. Retenção de dados</h2>
            <p>
              Seus dados são mantidos enquanto sua conta estiver ativa. Após
              cancelamento ou solicitação de exclusão, os dados são apagados
              em até 30 dias (exceto dados que precisamos manter por
              obrigação legal — ex.: faturas para fins fiscais por 5 anos).
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">8. Segurança</h2>
            <p>
              Os dados são transmitidos com TLS (HTTPS) e armazenados com
              criptografia em repouso. O isolamento entre usuários é
              garantido por Row-Level Security no banco. Senhas são salvas
              com hash bcrypt (a gente nem vê a sua).
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">9. Cookies</h2>
            <p>
              Veja nossa{' '}
              <a href="/cookies" className="text-income underline">
                política de cookies
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">10. Alterações</h2>
            <p>
              Esta política pode ser atualizada. Mudanças relevantes serão
              comunicadas por email com antecedência de 30 dias.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
