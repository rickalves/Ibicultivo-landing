// All static content for ibicultivo landing page

// URL do app (trocar pelo domínio definitivo quando disponível)
export const appUrl = "https://app.ibicultivo.com.br";

// Substitua pelo número real antes de publicar
// Formato: https://wa.me/55DDD9XXXXXXXX?text=...
export const whatsappUrl =
  "https://wa.me/5588993260894?text=Olá!%20Tenho%20interesse%20em%20participar%20do%20programa%20piloto%20do%20Ibicultivo.";

export const navLinks = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#como", label: "Como funciona" },
  { href: "#piloto", label: "Piloto" },
  { href: "#sobre", label: "Sobre" },
];

export const proofItems = [
  { num: "6+", label: "Culturas com rastreabilidade obrigatória por lei" },
  { num: "INC", label: "02/2018 · Conformidade regulatória exigida" },
  { num: "Ibiapaba", label: "Serra · Ceará — nossa origem" },
  { num: "R$0", label: "Para começar" },
];

export const stripItems = [
  { icon: "fa-route", text: "Rastreabilidade completa" },
  { icon: "fa-qrcode", text: "QR Code de origem" },
  { icon: "fa-file-lines", text: "Relatórios R-01 a R-06" },
  { icon: "fa-users", text: "Multi-produtor" },
  { icon: "fa-shield-halved", text: "Registro com CREA vinculado" },
  { icon: "fa-bell", text: "Alertas de carência" },
  { icon: "fa-tag", text: "Etiquetas ZPL por Bluetooth" },
  { icon: "fa-leaf", text: "Feito no Ceará" },
];

export const agricultorFeatures = [
  "Cadastro pelo celular em minutos",
  "Registro de plantio, insumos e colheita",
  "QR Code de origem para valorizar a venda",
  "Registro de expedições com nota fiscal e placa",
  "Impressão de etiquetas ZPL via Bluetooth",
];

export const tecnicoFeatures = [
  "Painel multi-produtor consolidado",
  "Alertas automáticos de carência de defensivos",
  "Exportação para laudos técnicos",
  "Registro com CREA e número ART vinculados",
];

export const steps = [
  {
    icon: "fa-house",
    title: "Cadastre sua propriedade",
    desc: "Registre seus lotes e cultivos. Simples como tirar uma foto.",
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
  { val: "R$ 6,1bi", label: "Produção agrícola\ndo Ceará em 2024\n· IBGE/PAM 2024" },
  { val: "444.648", label: "Habitantes na\nSerra da Ibiapaba\n· IPECE/2025" },
  { val: "26.675", label: "Empresas ativas\nna região\n· Receita Federal/2026" },
];

export const bentoLotes = [
  {
    dot: "green",
    name: "Tomate Italiano",
    area: "2,4 ha",
    tag: "Crescendo",
    tagType: "green" as const,
  },
  {
    dot: "orange",
    name: "Abacate Hass",
    area: "1,8 ha",
    tag: "Colheita próx.",
    tagType: "orange" as const,
  },
  {
    dot: "green",
    name: "Maracujá Azedo",
    area: "3,1 ha",
    tag: "Monitorando",
    tagType: "green" as const,
  },
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
    icon: "fa-shield-halved",
    title: "Registro imutável com CREA vinculado",
    desc: "Cada aplicação de defensivo fica vinculada ao seu nome e número de CREA. Nenhum produtor pode editar ou apagar.",
  },
  {
    icon: "fa-bell",
    title: "Alertas automáticos de carência",
    desc: "O sistema calcula e alerta quando um lote vai ser colhido antes do prazo de carência do defensivo registrado.",
  },
  {
    icon: "fa-file-export",
    title: "Relatórios R-01 a R-06 em 1 clique",
    desc: "Conformes à INC 02/2018 e Lei 7.802/1989. Sem copiar dado de planilha.",
  },
];

export const originStats = [
  {
    icon: "fa-mountain-sun",
    val: "R$ 6,1bi",
    ctx: "Produção agrícola do Ceará em 2024 — crescimento de 22,9% vs 2023 · IBGE/PAM 2024",
  },
  {
    icon: "fa-people-group",
    val: "444 mil",
    ctx: "Habitantes na Serra da Ibiapaba · IPECE/2025",
  },
  {
    icon: "fa-location-dot",
    val: "Guaraciaba",
    ctx: "Nossa origem — R$ 381 mi em produção em 2024, maior município produtor do Ceará · IBGE/PAM 2024",
  },
];
