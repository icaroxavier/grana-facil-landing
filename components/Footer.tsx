import Link from 'next/link'
import { Instagram } from 'lucide-react'

import { SITE } from '@/lib/site'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Logo size="sm" />
            <p className="mt-3 text-xs text-slate-500">
              Controle financeiro pessoal feito no Brasil.
            </p>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-emerald-700"
              title={`Instagram @${SITE.instagramHandle}`}
            >
              <Instagram className="h-4 w-4" />@{SITE.instagramHandle}
            </a>
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
