/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: gera HTML puro em `out/`, sem runtime Next no deploy.
  // Apropriado aqui porque a landing é 100% conteúdo de marketing —
  // sem Server Actions, ISR, middleware ou route handlers dinâmicos.
  // Resultado: serve direto do CDN, cold start zero, custo zero.
  output: 'export',

  reactStrictMode: true,
  poweredByHeader: false,

  // <Image> exige otimização de runtime (que o export desabilita). Não
  // usamos <Image> hoje, mas deixo aqui pra não quebrar se alguém adicionar.
  images: {
    unoptimized: true,
  },

  // Trailing slash facilita servir em hosts mais simples (cada rota vira
  // pasta com index.html). A Vercel lida com ambos, mas dá consistência.
  trailingSlash: true,
}

export default nextConfig
