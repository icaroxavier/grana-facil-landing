import Link from 'next/link'

import { SITE } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-income text-sm font-extrabold text-white">
                G
              </div>
              <span className="text-sm font-bold">{SITE.name}</span>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Controle financeiro pessoal feito no Brasil.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Produto
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#planos">Planos</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li>
                <Link href={SITE.loginUrl}>Entrar no app</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/privacidade">Privacidade</Link>
              </li>
              <li>
                <Link href="/termos">Termos de uso</Link>
              </li>
              <li>
                <Link href="/cookies">Cookies</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Contato
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href={SITE.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900"
                  title="Abrir WhatsApp"
                >
                  WhatsApp: {SITE.contactPhoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="hover:text-slate-900"
                >
                  {SITE.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
