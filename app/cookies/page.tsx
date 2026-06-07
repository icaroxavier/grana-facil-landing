import type { Metadata } from 'next'

import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Como o Sua Grana usa cookies e tecnologias similares.',
  alternates: { canonical: '/cookies' },
}

export default function Page() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Política de Cookies</h1>
        <p className="mt-2 text-sm text-slate-500">
          Última atualização: junho de 2026
        </p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="mt-6 text-lg font-bold">O que são cookies</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu
              navegador. Usamos somente o necessário pra o serviço funcionar
              — nada de cookies de publicidade ou rastreamento entre sites.
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">Quais cookies usamos</h2>
            <div className="space-y-4">
              <div className="rounded-lg border bg-white p-4">
                <p className="font-semibold">Cookies essenciais (sempre ativos)</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-600">
                  <li>
                    <strong>sb-* (Supabase Auth):</strong> mantém sua sessão
                    logada. Sem esses, você teria que fazer login a cada
                    request. Não rastreiam você fora do app.
                  </li>
                  <li>
                    <strong>localStorage (preferências):</strong> guarda
                    pequenas escolhas de UI (ex.: modo de visualização da
                    grade). Fica só no seu navegador.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border bg-white p-4">
                <p className="font-semibold">Analytics e performance</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-600">
                  <li>
                    <strong>Vercel Analytics:</strong> coleta pageviews
                    agregados e anônimos. Sem cookies de terceiros, sem
                    fingerprinting.
                  </li>
                  <li>
                    <strong>Vercel Speed Insights:</strong> coleta métricas
                    de performance (Web Vitals) do seu navegador. Anônimo.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border bg-white p-4">
                <p className="font-semibold">Pagamento (Stripe)</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-600">
                  <li>
                    Durante o checkout, a Stripe usa cookies próprios pra
                    detectar fraude e completar o pagamento. Veja a{' '}
                    <a
                      href="https://stripe.com/privacy"
                      target="_blank"
                      rel="noopener"
                      className="text-income underline"
                    >
                      política da Stripe
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">Como desativar</h2>
            <p>
              Você pode bloquear cookies nas configurações do seu navegador,
              mas isso pode quebrar o login e o pagamento. Cookies essenciais
              não exigem consentimento prévio sob a LGPD (Art. 7º, V — execução
              de contrato).
            </p>
          </section>

          <section>
            <h2 className="mt-6 text-lg font-bold">Alterações</h2>
            <p>
              Se mudarmos algo importante nessa política (ex.: adicionarmos
              um analytics novo), publicamos aqui e atualizamos a data no
              topo da página.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
