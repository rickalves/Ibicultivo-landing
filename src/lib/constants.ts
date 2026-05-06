// All static content extracted from ibicultivo-v3.html

export const navLinks = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#como", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#sobre", label: "Sobre" },
];

export const proofItems = [
  { num: "120+", label: "Produtores" },
  { num: "50k", label: "Lotes rastreados" },
  { num: "5", label: "Estados" },
  { num: "R$0", label: "Para começar" },
];

export const stripItems = [
  { icon: "fa-route", text: "Rastreabilidade completa" },
  { icon: "fa-qrcode", text: "QR Code de origem" },
  { icon: "fa-map-location-dot", text: "Gestão de lotes por mapa" },
  { icon: "fa-chart-line", text: "Painel de indicadores" },
  { icon: "fa-file-lines", text: "Relatórios de safra" },
  { icon: "fa-users", text: "Multi-produtor" },
  { icon: "fa-wifi", text: "Funciona offline" },
  { icon: "fa-leaf", text: "Feito no Ceará" },
];

export const agricultorFeatures = [
  "Cadastro pelo celular em minutos",
  "Registro de plantio, insumos e colheita",
  "QR Code de origem para valorizar a venda",
  "Funciona com internet fraca ou offline",
];

export const tecnicoFeatures = [
  "Painel multi-produtor consolidado",
  "Alertas de anomalias por lote",
  "Exportação para laudos técnicos",
  "API para cooperativas e sistemas externos",
];

export const steps = [
  {
    icon: "fa-house",
    title: "Cadastre sua propriedade",
    desc: "Registre seus lotes e cultivos no mapa. Simples como tirar uma foto.",
  },
  {
    icon: "fa-pen-to-square",
    title: "Registre cada etapa",
    desc: "Plantio, adubação, irrigação, colheita — tudo em tempo real pelo celular.",
  },
  {
    icon: "fa-qrcode",
    title: "Gere o QR Code",
    desc: "Cada lote ganha um código de rastreabilidade. Imprime e cola na caixa.",
  },
  {
    icon: "fa-hand-holding-dollar",
    title: "Venda com mais valor",
    desc: "O comprador escaneia e vê origem, práticas e qualidade do produto.",
  },
];

export const serraNumbers = [
  { val: "R$1,9B", label: "Valor da produção\nagrícola em 2023" },
  { val: "444k", label: "Habitantes na\nSerra da Ibiapaba" },
  { val: "26k+", label: "Empresas ativas\nna região" },
];

export const bentoLotes = [
  { dot: "green", name: "Tomate Italiano", area: "2,4 ha", tag: "Crescendo", tagType: "green" as const },
  { dot: "orange", name: "Abacate Hass", area: "1,8 ha", tag: "Colheita próx.", tagType: "orange" as const },
  { dot: "green", name: "Maracujá Azedo", area: "3,1 ha", tag: "Monitorando", tagType: "green" as const },
  { dot: "blue", name: "Batata-doce", area: "0,9 ha", tag: "Plantio", tagType: "green" as const },
];

export const bentoBarHeights = [
  { height: "35%", highlight: false },
  { height: "50%", highlight: false },
  { height: "42%", highlight: false },
  { height: "65%", highlight: false },
  { height: "55%", highlight: false },
  { height: "70%", highlight: false },
  { height: "48%", highlight: false },
  { height: "90%", highlight: true },
];

export const tecnicoFeatureList = [
  {
    icon: "fa-table-columns",
    title: "Painel multi-produtor",
    desc: "Todos os produtores em uma visão única, com alertas de anomalias em tempo real.",
  },
  {
    icon: "fa-file-export",
    title: "Relatórios para laudos técnicos",
    desc: "Exporte dados de insumos, colheita e produtividade em PDF direto para o laudo.",
  },
  {
    icon: "fa-plug",
    title: "API para cooperativas",
    desc: "Integre com os sistemas da sua cooperativa ou associação de produtores.",
  },
];

export const plans = [
  {
    icon: "fa-seedling",
    type: "Gratuito",
    price: "R$ 0",
    period: "/mês, para sempre",
    features: [
      "Até 2 cultivos ativos",
      "Até 10 lotes/mês",
      "QR Code de origem básico",
      "Suporte por WhatsApp",
    ],
    cta: "Criar conta grátis",
    mid: false,
  },
  {
    icon: "fa-rocket",
    type: "Pro",
    price: "R$ 49",
    period: "/mês por produtor",
    features: [
      "Cultivos e lotes ilimitados",
      "Dashboard de indicadores",
      "Relatórios exportáveis",
      "QR Code personalizado",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    mid: true,
    badge: "Mais popular",
  },
  {
    icon: "fa-handshake",
    type: "Cooperativa",
    price: "Sob consulta",
    period: "para equipes e cooperativas",
    features: [
      "Multi-produtor ilimitado",
      "API e integrações",
      "Treinamento presencial",
      "SLA e suporte dedicado",
    ],
    cta: "Falar com a equipe",
    mid: false,
    smallPrice: true,
  },
];

export const originStats = [
  {
    icon: "fa-mountain-sun",
    val: "R$ 1,9B",
    ctx: "Valor da produção agrícola da Serra da Ibiapaba em 2023, segundo IBGE/SEBRAE",
  },
  {
    icon: "fa-people-group",
    val: "444 mil",
    ctx: "Habitantes na região — uma população produtiva aguardando tecnologia local",
  },
  {
    icon: "fa-location-dot",
    val: "Guaraciaba",
    ctx: "Nossa origem — nascemos no coração da Serra para servir a Serra",
  },
];
