'use client'

import { useEffect, useRef, useState } from 'react'
import {
  CreditCard,
  HelpCircle,
  Lightbulb,
  MessageCircle,
  Wrench,
  X,
} from 'lucide-react'

import { SITE } from '@/lib/site'

/**
 * Botão flutuante de suporte (canto inferior direito). Clique → popover
 * explicando os 4 tipos de coisa que o suporte cobre + CTA verde abrindo
 * conversa no WhatsApp com mensagem pré-preenchida apontando que veio
 * do Grana Fácil.
 *
 * Versão da landing (Next, App Router) — usa estado nativo em vez de
 * componentes shadcn pra evitar carregar dependências pesadas.
 */
export function SupportButton() {
  const [open, setOpen] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  // Fecha quando clica fora ou aperta Esc
  useEffect(() => {
    if (!open) return
    function onDown(e: MouseEvent) {
      if (!popoverRef.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {/* Popover */}
      {open && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-label="Suporte"
          className="absolute bottom-16 right-0 w-80 origin-bottom-right animate-in slide-in-from-bottom-2 fade-in rounded-xl border bg-white p-4 shadow-2xl sm:w-96"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="absolute right-3 top-3 rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div>
              <p className="text-base font-semibold text-slate-900">
                Precisa de ajuda?
              </p>
              <p className="text-xs text-slate-500">
                Atendimento humano pelo WhatsApp
              </p>
            </div>
          </div>

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Use para:
          </p>
          <ul className="mb-4 space-y-1.5 text-sm">
            <SupportTopic
              icon={HelpCircle}
              title="Dúvidas"
              desc="Sobre features, planos, como começar."
            />
            <SupportTopic
              icon={Lightbulb}
              title="Sugestões"
              desc="Faltou algo? Conta, evoluímos juntos."
            />
            <SupportTopic
              icon={Wrench}
              title="Problemas técnicos"
              desc="Bug, erro, algo travado."
            />
            <SupportTopic
              icon={CreditCard}
              title="Financeiro"
              desc="Cobrança, cancelar, trocar plano."
            />
          </ul>

          <a
            href={SITE.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            <MessageCircle className="h-4 w-4" />
            Abrir WhatsApp
          </a>

          <p className="mt-2 text-center text-[11px] text-slate-500">
            Ou email:{' '}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="font-medium text-slate-700 hover:underline"
            >
              {SITE.contactEmail}
            </a>
          </p>
        </div>
      )}

      {/* FAB */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title="Suporte"
        aria-label="Abrir suporte"
        aria-expanded={open}
        className="flex h-12 items-center gap-2 rounded-full bg-emerald-600 px-4 text-sm font-medium text-white shadow-lg shadow-emerald-900/20 transition-all hover:gap-3 hover:bg-emerald-700 hover:pr-5 hover:shadow-xl active:scale-95"
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        <span className="hidden sm:inline">Suporte</span>
      </button>
    </div>
  )
}

interface SupportTopicProps {
  icon: typeof HelpCircle
  title: string
  desc: string
}

function SupportTopic({ icon: Icon, title, desc }: SupportTopicProps) {
  return (
    <li className="flex items-start gap-2 rounded-md border bg-slate-50 p-2">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white text-slate-500">
        <Icon className="h-3 w-3" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium leading-tight text-slate-900">
          {title}
        </p>
        <p className="text-[11px] text-slate-500">{desc}</p>
      </div>
    </li>
  )
}
