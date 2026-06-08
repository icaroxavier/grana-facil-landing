import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { ForWhom } from '@/components/ForWhom'
import { ProductTour } from '@/components/ProductTour'
import { HowItWorks } from '@/components/HowItWorks'
import { Comparison } from '@/components/Comparison'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

/**
 * Página inicial — funil de vendas em ordem psicológica:
 *
 *  1. Hero            → captura atenção com pergunta-gatilho
 *  2. SocialProof     → 4 promessas mensuráveis (no lugar de logos)
 *  3. ForWhom         → "será que serve pra mim?" — quebra objeção
 *  4. ProductTour     → demonstração visual (4 telas)
 *  5. HowItWorks      → 3 passos simples
 *  6. Comparison      → vs Mobills/Organizze/planilha
 *  7. Features        → varredura de tudo que tem
 *  8. Pricing         → preços + selo de garantia
 *  9. FAQ             → fecha objeções restantes
 * 10. FinalCTA        → último empurrão + selos
 */
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <ForWhom />
        <ProductTour />
        <HowItWorks />
        <Comparison />
        <Features />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
