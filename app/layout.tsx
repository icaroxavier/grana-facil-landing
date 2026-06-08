import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { SupportButton } from '@/components/SupportButton'
import { MetaPixel } from '@/components/MetaPixel'
import { CookieBanner } from '@/components/CookieBanner'
import { SITE } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.shortDescription,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  generator: 'Next.js',
  keywords: [
    'finanças pessoais',
    'controle de gastos',
    'planilha de gastos',
    'orçamento mensal',
    'orçamento anual',
    'gastos cartão',
    'parcelamento',
    'recorrências',
    'fluxo de caixa pessoal',
    'app de finanças',
    'controle financeiro',
    'projeção financeira',
    'SaaS finanças',
    'Brasil',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.shortDescription,
    siteName: SITE.name,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.shortDescription,
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <SupportButton />
        <MetaPixel />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
        {/* JSON-LD: structured data pra Google entender o produto e mostrar
            rich results (preço, descrição, etc) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: SITE.name,
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'Web',
              description: SITE.longDescription,
              offers: {
                '@type': 'Offer',
                price: '19.90',
                priceCurrency: 'BRL',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: '19.90',
                  priceCurrency: 'BRL',
                  unitText: 'MONTH',
                },
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '12',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
