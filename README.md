# Sua Grana — Landing

Landing page de marketing pro [app principal](https://github.com/icaroxavier/grana). Construída em Next.js 15 (App Router) + Tailwind + Vercel Analytics/Speed Insights, com SEO completo (metadata, sitemap, robots, JSON-LD, OG).

## Stack

- **Next.js 15** (App Router, RSC, route handlers)
- **React 19**
- **TypeScript** estrito
- **Tailwind v3** (cores alinhadas com o app: `income`/`expense`)
- **lucide-react** pros ícones
- **@vercel/analytics** + **@vercel/speed-insights**

## SEO

- `metadata` API por página (title, description, canonical, OG, Twitter)
- `sitemap.ts` automático
- `robots.ts`
- JSON-LD `SoftwareApplication` no `<head>` global
- `metadataBase` apontando pro domínio do site (`SITE.url` em `lib/site.ts`)
- Headers e estrutura semântica (h1 único, h2 por seção)

## Rotas

- `/` — landing principal (Hero, Features, How it works, Pricing, FAQ, CTA)
- `/privacidade` — Política de Privacidade (LGPD)
- `/termos` — Termos de Uso
- `/cookies` — Política de Cookies

## Rodar local

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy (Vercel)

1. Push pra GitHub (`grana-facil-landing` em repo separado).
2. Vercel → Import Project → conectar repo.
3. Sem env vars necessárias (`SITE` em `lib/site.ts` é estático).
4. Ligar **Analytics** e **Speed Insights** no painel do projeto.
5. Apontar o domínio final (`suagrana.com` pra landing, `app.suagrana.com` pro app) no Vercel.

## Estrutura

```
app/
  layout.tsx              # SEO global + Analytics + JSON-LD
  page.tsx                # landing principal
  globals.css
  sitemap.ts
  robots.ts
  privacidade/page.tsx
  termos/page.tsx
  cookies/page.tsx
components/
  Nav.tsx
  Hero.tsx                # com mockup CSS ilustrativo da grade
  Features.tsx
  HowItWorks.tsx
  Pricing.tsx             # 4 planos com badge "melhor valor"
  FAQ.tsx
  FinalCTA.tsx
  Footer.tsx
lib/
  site.ts                 # constantes globais (nome, URL, contato)
public/
  favicon.svg
```

## Manutenção

Pra atualizar conteúdo (preço, links, copy): mexer em `lib/site.ts` ou nos
componentes de `components/`. Cores do produto vivem em `tailwind.config.ts`.

CTAs apontam pra `${SITE.loginUrl}` — definido em `lib/site.ts`. Se trocar o
domínio do app, mudar lá só uma vez.
