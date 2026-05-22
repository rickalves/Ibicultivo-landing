# Ibicultivo — Landing Page

Plataforma de gestão e rastreabilidade agrícola criada para produtores e técnicos da **Serra da Ibiapaba**, Ceará. Do plantio ao QR Code de origem, tudo em um lugar.

---

## Sobre o projeto

O **Ibicultivo** é uma landing page institucional desenvolvida em Next.js que apresenta a plataforma de gestão agrícola voltada para dois públicos:

- **Agricultor familiar** — registro simples de cultivos, lotes e geração de QR Code de rastreabilidade para valorizar a venda
- **Técnico agrícola** — painel multi-produtor consolidado, relatórios exportáveis e API para cooperativas

A página é construída com foco em performance, acessibilidade e design editorial com identidade regional.

---

## Stack

| Tecnologia                                   | Versão                      |
| -------------------------------------------- | --------------------------- |
| [Next.js](https://nextjs.org)                | 16.x (App Router)           |
| [React](https://react.dev)                   | 19.x                        |
| [TypeScript](https://www.typescriptlang.org) | 5.x                         |
| [Tailwind CSS](https://tailwindcss.com)      | 4.x                         |
| [Font Awesome](https://fontawesome.com)      | 7.x                         |
| Google Fonts                                 | Cormorant Garamond + Outfit |

---

## Estrutura do projeto

```
src/
├── app/
│   ├── globals.css          # Design tokens, keyframes e estilos globais
│   ├── layout.tsx           # Root layout com metadados e fontes
│   ├── page.tsx             # Composição das seções
│   └── api/
│       ├── contact/         # Endpoint de formulário de contato
│       └── newsletter/      # Endpoint de inscrição na newsletter
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navbar fixa com scroll-aware shadow
│   │   └── Footer.tsx       # Rodapé institucional
│   ├── sections/
│   │   ├── Hero.tsx         # Seção hero com imagem de fundo e CTAs
│   │   ├── MarqueeStrip.tsx # Faixa animada de funcionalidades
│   │   ├── Audiences.tsx    # Cards por perfil (agricultor / técnico)
│   │   ├── HowItWorks.tsx   # Passo a passo de uso
│   │   ├── AppPreview.tsx   # Bento grid com prévia do app
│   │   ├── SerraBlock.tsx   # Bloco de contexto regional (Serra da Ibiapaba)
│   │   ├── TecnicoBlock.tsx # Bloco dedicado ao perfil técnico
│   │   ├── Plans.tsx        # Tabela de planos e preços
│   │   ├── Sobre.tsx        # Seção sobre a empresa
│   │   └── CtaFinal.tsx     # CTA de encerramento com imagem de fundo
│   └── ui/
│       ├── RevealWrapper.tsx # HOC de scroll-reveal animado
│       ├── ChartBars.tsx    # Gráfico de barras decorativo
│       ├── MapCanvas.tsx    # Mapa estilizado com pins de localização
│       ├── QRCodeSvg.tsx    # QR Code decorativo em SVG
│       └── ScoreRing.tsx    # Anel de pontuação animado em SVG
└── lib/
    └── constants.ts         # Todo o conteúdo estático centralizado
```

---

## Executando localmente

**Pré-requisitos:** Node.js 20+

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
# Build de produção
npm run build
npm start

# Lint
npm run lint
```

---

## Seções da landing page

| Seção             | Âncora             | Descrição                                |
| ----------------- | ------------------ | ---------------------------------------- |
| Hero              | —                  | Headline principal, prova social e CTAs  |
| Marquee Strip     | —                  | Faixa contínua com funcionalidades-chave |
| Funcionalidades   | `#funcionalidades` | Cards do agricultor e do técnico         |
| Como funciona     | `#como`            | Passo a passo em 4 etapas                |
| App Preview       | —                  | Bento grid com mockup do painel          |
| Serra da Ibiapaba | —                  | Contexto e números da região             |
| Técnico Agrícola  | —                  | Bloco dedicado ao perfil técnico         |
| Planos            | `#planos`          | Gratuito · Pro · Cooperativa             |
| Sobre             | `#sobre`           | História e origem do produto             |
| CTA Final         | `#contato`         | Chamada para criação de conta            |

---

## Design tokens

Os tokens de design estão centralizados em `src/app/globals.css` e disponíveis como CSS custom properties:

```css
/* Paleta verde */
--color-g900 … --color-g100

/* Paleta laranja */
--color-o600 … --color-o100

/* Border radius */
--r-sm: 8px  |  --r-md: 14px  |  --r-lg: 24px  |  --r-xl: 36px
```

---

## Deploy

O projeto está pronto para deploy na [Vercel](https://vercel.com). Basta conectar o repositório — nenhuma variável de ambiente é necessária para a landing page.

```bash
# Via Vercel CLI
npx vercel
```

---

## Licença

Software proprietário — © 2025–2026 Ibicultivo · Guaraciaba do Norte, CE.  
Todos os direitos reservados. Consulte o arquivo [LICENSE](./LICENSE) para os termos completos.
