/**
 * Constantes do site — centralizadas pra serem usadas em metadata, sitemap,
 * robots, og-image, etc. Trocar só aqui pra propagar pra tudo.
 */
export const SITE = {
  name: 'Sua Grana',
  tagline: 'Veja seu ano financeiro inteiro em uma tela. Saiba quanto sobra em dezembro.',
  shortDescription:
    'O único app que mostra os 12 meses do seu ano em uma única tela: quanto entra, quanto sai, e quanto sobra no fim. Recorrências automáticas, alertas de pendência, projeção do saldo. 7 dias grátis, sem cartão.',
  longDescription:
    'Pare de planejar mês a mês. O Sua Grana monta janeiro a dezembro em uma tela só — você cadastra suas recorrências uma vez, o app projeta o ano inteiro. Vê quanto sobra todo mês, alertas do que tá pra vencer, saldo do ano acumulado, parcelamentos do cartão automáticos, importação de CSV do banco, dashboard com gráficos. 7 dias grátis sem cartão, garantia incondicional de reembolso em 7 dias após pagar. A partir de R$ 14,99/mês no plano anual.',
  url: 'https://suagrana.com',
  appUrl: 'https://app.suagrana.com',
  loginUrl: 'https://app.suagrana.com/login',
  contactEmail: 'contato@suagrana.com',
  contactPhoneDisplay: '(85) 99816-4001',
  /**
   * Handle do Instagram (sem @). Instagram não aceita ponto em username,
   * por isso usamos "ponto" por extenso pra manter a marca "suagrana.com".
   */
  instagramHandle: 'suagranapontocom',
  instagramUrl: 'https://instagram.com/suagranapontocom',
  /**
   * URL de WhatsApp com mensagem pré-preenchida. Trocar o número edita
   * só este lugar; usado no SupportButton, no Footer e em qualquer CTA.
   */
  whatsappUrl(message?: string): string {
    const text = encodeURIComponent(
      message ?? 'Olá! Vim pelo Sua Grana e tenho uma dúvida:'
    )
    return `https://wa.me/5585998164001?text=${text}`
  },
  locale: 'pt_BR',
  themeColor: '#16a34a',
}
