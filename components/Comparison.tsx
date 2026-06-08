import { Check, X } from 'lucide-react'

type Row = {
  feature: string
  suaGrana: boolean | string
  mobills: boolean | string
  organizze: boolean | string
  planilha: boolean | string
}

const rows: Row[] = [
  { feature: 'Ver o ano inteiro em uma tela', suaGrana: true, mobills: false, organizze: false, planilha: '⚠️ com fórmula' },
  { feature: 'Sobra do ano calculada automaticamente', suaGrana: true, mobills: '⚠️ só mês', organizze: '⚠️ só mês', planilha: false },
  { feature: 'Cadastra recorrência uma vez (e o ano inteiro aparece)', suaGrana: true, mobills: true, organizze: true, planilha: false },
  { feature: 'Faturas de cartão com parcelamento automático', suaGrana: true, mobills: true, organizze: true, planilha: false },
  { feature: 'Alertas de pendências (atrasado, vence hoje, próximos)', suaGrana: true, mobills: true, organizze: true, planilha: false },
  { feature: 'Reservas com cascata por prioridade', suaGrana: true, mobills: false, organizze: false, planilha: false },
  { feature: 'Importar extrato em CSV', suaGrana: true, mobills: '⚠️ pago', organizze: '⚠️ pago', planilha: '⚠️ manual' },
  { feature: 'Dashboard de projeção do ano', suaGrana: true, mobills: '⚠️ só mês', organizze: '⚠️ só mês', planilha: false },
  { feature: 'Sem propaganda (mesmo no grátis)', suaGrana: true, mobills: false, organizze: false, planilha: true },
  { feature: 'LGPD + criptografia + opt-in granular', suaGrana: true, mobills: '?', organizze: '?', planilha: false },
]

/**
 * Tabela comparativa Sua Grana vs Mobills vs Organizze vs Planilha.
 *
 * Critério: só lista o que sabemos / é documentado. "?" pra coisas que
 * concorrentes não explicitam — sem mentir.
 */
export function Comparison() {
  return (
    <section id="comparacao" className="border-b bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Por que Sua Grana e{' '}
            <span className="text-income">não Mobills, Organizze ou planilha?</span>
          </h2>
          <p className="mt-4 text-balance text-lg text-slate-600">
            Comparação honesta. Todos os 3 concorrentes têm features ótimas. A
            diferença é que só o Sua Grana monta o ano inteiro de uma vez.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-xl border bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
                <th className="px-4 py-3 text-left font-semibold">Recurso</th>
                <th className="px-3 py-3 text-center font-bold text-emerald-700">Sua Grana</th>
                <th className="px-3 py-3 text-center font-semibold">Mobills</th>
                <th className="px-3 py-3 text-center font-semibold">Organizze</th>
                <th className="px-3 py-3 text-center font-semibold">Planilha</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
                >
                  <td className="px-4 py-3 text-left font-medium text-slate-800">
                    {row.feature}
                  </td>
                  <Cell value={row.suaGrana} highlight />
                  <Cell value={row.mobills} />
                  <Cell value={row.organizze} />
                  <Cell value={row.planilha} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Comparação baseada em sites oficiais e planos pagos comparáveis (junho/2026). Errei algo?{' '}
          <a href="mailto:contato@suagrana.com" className="underline hover:text-slate-700">
            me avisa
          </a>
          .
        </p>
      </div>
    </section>
  )
}

function Cell({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  if (value === true) {
    return (
      <td className={`px-3 py-3 text-center ${highlight ? 'bg-emerald-50/40' : ''}`}>
        <Check className="mx-auto h-5 w-5 text-emerald-600" strokeWidth={3} />
      </td>
    )
  }
  if (value === false) {
    return (
      <td className="px-3 py-3 text-center">
        <X className="mx-auto h-5 w-5 text-slate-300" />
      </td>
    )
  }
  return (
    <td className={`px-3 py-3 text-center text-xs font-medium text-slate-600 ${highlight ? 'bg-emerald-50/40' : ''}`}>
      {value}
    </td>
  )
}
