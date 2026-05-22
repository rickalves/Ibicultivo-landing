"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface PolicySection {
  id: string;
  title: string;
  tag?: string;
  content: React.ReactNode;
}

const sections: PolicySection[] = [
  {
    id: "controlador",
    title: "1. Identificação do Controlador",
    tag: "LGPD Art. 5, IX",
    content: (
      <div className="space-y-4">
        <p>
          O controlador dos seus dados pessoais é a <strong>Ibicultivo</strong>, plataforma de
          gestão e rastreabilidade agrícola com sede em Guaraciaba do Norte — CE, Brasil.
        </p>
        <p>
          O encarregado pelo tratamento de dados (DPO) pode ser contactado pelo e-mail{" "}
          <a
            href="mailto:privacidade@ibicultivo.com.br"
            className="text-g600 underline underline-offset-2"
          >
            privacidade@ibicultivo.com.br
          </a>{" "}
          ou pelo endereço de contato geral{" "}
          <a
            href="mailto:contato@ibicultivo.com.br"
            className="text-g600 underline underline-offset-2"
          >
            contato@ibicultivo.com.br
          </a>
          .
        </p>
        <p className="text-[0.86rem] text-muted/70 italic">
          O prazo legal para resposta às solicitações de titulares é de 15 (quinze) dias úteis,
          conforme orientação da Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
      </div>
    ),
  },
  {
    id: "dados-coletados",
    title: "2. Dados Pessoais Coletados",
    tag: "LGPD Art. 9",
    content: (
      <div className="space-y-6">
        <p>
          Coletamos apenas os dados necessários para a prestação dos nossos serviços. As categorias
          são:
        </p>
        <div className="space-y-4">
          <div className="rounded-lg border border-g300/20 bg-g300/5 p-4">
            <h4 className="mb-2 font-semibold text-ink">Dados de identificação pessoal</h4>
            <p className="text-[0.88rem]">
              Nome completo, endereço de e-mail, número de telefone/WhatsApp — coletados via
              formulários de contato, cadastro e inscrição na newsletter do site e do aplicativo.
            </p>
          </div>
          <div className="rounded-lg border border-g300/20 bg-g300/5 p-4">
            <h4 className="mb-2 font-semibold text-ink">Dados profissionais de técnicos</h4>
            <p className="text-[0.88rem]">
              Número de registro no CREA, número da ART (Anotação de Responsabilidade Técnica),
              especialidade e vínculo com produtores atendidos. O registro dessas informações é
              exigência da Lei 14.785/2023 e da INC 02/2018 (MAPA/SDA).
            </p>
          </div>
          <div className="rounded-lg border border-g300/20 bg-g300/5 p-4">
            <h4 className="mb-2 font-semibold text-ink">
              Dados de propriedade e produção agrícola
            </h4>
            <p className="text-[0.88rem]">
              Nome da propriedade, localização geográfica (coordenadas GPS de talhões e lotes),
              culturas plantadas, datas de plantio e colheita, registros de aplicação de insumos e
              defensivos agrícolas, quantidade produzida e expedições com nota fiscal e placa de
              veículo.
            </p>
          </div>
          <div className="rounded-lg border border-g300/20 bg-g300/5 p-4">
            <h4 className="mb-2 font-semibold text-ink">Dados de acesso e navegação</h4>
            <p className="text-[0.88rem]">
              Endereço IP, tipo e versão do navegador ou dispositivo, sistema operacional, páginas
              visitadas, data e horário de acesso — coletados automaticamente por logs do servidor e
              do aplicativo.
            </p>
          </div>
        </div>
        <p className="text-[0.84rem] text-muted/70 italic">
          Não coletamos dados de categorias sensíveis (Art. 11 LGPD) como origem racial ou étnica,
          dados de saúde ou dados biométricos.
        </p>
      </div>
    ),
  },
  {
    id: "bases-legais",
    title: "3. Bases Legais para o Tratamento",
    tag: "LGPD Art. 7",
    content: (
      <div className="space-y-4">
        <p>
          Todo tratamento de dados pessoais realizado pelo Ibicultivo possui uma base legal
          específica, conforme o Art. 7 da LGPD:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[0.86rem]">
            <thead>
              <tr className="border-b border-g300/20 bg-g300/10 text-left">
                <th className="px-4 py-3 font-semibold text-ink">Dado / Atividade</th>
                <th className="px-4 py-3 font-semibold text-ink">Base legal (LGPD Art. 7)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-g300/10">
              {[
                ["Newsletter e comunicações de marketing", "Consentimento — inciso I"],
                ["Cadastro e uso do aplicativo", "Execução de contrato — inciso V"],
                [
                  "Registro de CREA e ART do técnico",
                  "Obrigação legal — inciso II (Lei 14.785/2023)",
                ],
                [
                  "Registros de aplicação de defensivos",
                  "Obrigação legal — inciso II (INC 02/2018 · MAPA)",
                ],
                [
                  "Registros de rastreabilidade para exportação",
                  "Obrigação legal — inciso II (EUDR 2023)",
                ],
                ["Logs de acesso e segurança", "Legítimo interesse — inciso IX"],
                ["Resposta a formulários de contato", "Legítimo interesse — inciso IX"],
              ].map(([dado, base]) => (
                <tr key={dado} className="even:bg-g300/5">
                  <td className="px-4 py-3 text-muted">{dado}</td>
                  <td className="px-4 py-3 font-medium text-g700">{base}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "finalidade",
    title: "4. Finalidade do Tratamento",
    tag: "LGPD Art. 6, I",
    content: (
      <div className="space-y-4">
        <p>
          Os dados pessoais coletados são tratados exclusivamente para as seguintes finalidades:
        </p>
        <ul className="space-y-3">
          {[
            "Prestação dos serviços da plataforma Ibicultivo (gestão de cultivos, rastreabilidade, relatórios).",
            "Geração de QR Codes de origem para valorização do produto na venda.",
            "Emissão de relatórios técnicos R-01 a R-06 exigidos pela INC 02/2018.",
            "Vinculação de registros de aplicação de defensivos ao número de CREA e ART do responsável técnico.",
            "Envio de comunicações sobre o programa piloto, atualizações da plataforma e newsletters (somente mediante consentimento).",
            "Atendimento de obrigações regulatórias perante MAPA, ADAGRI, ANVISA e ANPD.",
            "Prevenção a fraudes e garantia de segurança da informação.",
            "Melhoria contínua da plataforma com base em métricas de uso agregadas e anonimizadas.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.88rem]">
              <span className="mt-[0.3rem] flex size-[18px] shrink-0 items-center justify-center rounded-full bg-g300/20 text-[0.6rem] font-bold text-g600">
                ✓
              </span>
              <span className="text-muted">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[0.84rem] text-muted/70 italic">
          Os dados não serão utilizados para finalidades incompatíveis com as listadas acima sem
          novo consentimento do titular ou nova base legal.
        </p>
      </div>
    ),
  },
  {
    id: "retencao",
    title: "5. Retenção e Armazenamento",
    tag: "Marco Civil Art. 13 e 15",
    content: (
      <div className="space-y-4">
        <p>
          Os dados são mantidos pelo período mínimo necessário às finalidades declaradas e às
          obrigações legais aplicáveis:
        </p>
        <div className="space-y-3">
          {[
            {
              cat: "Registros de conexão (IP, data/hora)",
              prazo: "Mínimo 1 ano",
              base: "Art. 13 Marco Civil da Internet",
            },
            {
              cat: "Registros de acesso à aplicação",
              prazo: "Mínimo 6 meses",
              base: "Art. 15 Marco Civil da Internet",
            },
            {
              cat: "Registros de rastreabilidade agrícola",
              prazo: "Duração da conta + 5 anos",
              base: "INC 02/2018 · MAPA · prescrição civil",
            },
            {
              cat: "CREA / ART dos técnicos",
              prazo: "Duração do vínculo + 5 anos",
              base: "Lei 14.785/2023 · Lei 6.496/1977",
            },
            {
              cat: "Dados de contato e newsletter",
              prazo: "Até revogação do consentimento ou 2 anos sem interação",
              base: "LGPD Art. 7, I",
            },
            {
              cat: "Dados de notas fiscais e expedições",
              prazo: "5 anos",
              base: "Código Tributário Nacional · Lei 9.430/1996",
            },
          ].map(({ cat, prazo, base }) => (
            <div
              key={cat}
              className="grid grid-cols-1 gap-1 rounded-lg border border-g300/15 p-4 sm:grid-cols-[1fr_auto]"
            >
              <div>
                <p className="font-medium text-ink">{cat}</p>
                <p className="mt-0.5 text-[0.8rem] text-muted/60">{base}</p>
              </div>
              <span className="self-start rounded-full bg-g300/15 px-3 py-1 text-[0.76rem] font-semibold whitespace-nowrap text-g700 sm:self-center">
                {prazo}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[0.84rem] text-muted/70 italic">
          Após o vencimento dos prazos, os dados são eliminados de forma segura ou anonimizados,
          salvo obrigação legal ou regulatória que exija manutenção por período superior.
        </p>
      </div>
    ),
  },
  {
    id: "compartilhamento",
    title: "6. Compartilhamento com Terceiros",
    tag: "LGPD Art. 7, §5",
    content: (
      <div className="space-y-4">
        <p>
          O Ibicultivo <strong>não vende, aluga ou cede dados pessoais</strong> a terceiros para
          fins comerciais. O compartilhamento ocorre apenas nas situações abaixo:
        </p>
        <ul className="space-y-3">
          {[
            {
              entidade: "Autoridades regulatórias (MAPA, ADAGRI, ANVISA)",
              motivo:
                "Cumprimento de obrigação legal ou regulatória, mediante solicitação formal fundamentada.",
            },
            {
              entidade: "Autoridade Nacional de Proteção de Dados (ANPD)",
              motivo: "Dever de transparência e resposta a fiscalizações.",
            },
            {
              entidade: "Provedores de infraestrutura (hospedagem, banco de dados, CDN)",
              motivo:
                "Operação técnica da plataforma; estes agentes operam sob acordos de processamento de dados compatíveis com a LGPD.",
            },
            {
              entidade: "Parceiros de envio de e-mail transacional",
              motivo:
                "Entrega de e-mails de confirmação e notificações da plataforma; somente nome e e-mail são compartilhados.",
            },
            {
              entidade: "Autoridades judiciais e policiais",
              motivo:
                "Cumprimento de ordem judicial ou inquérito policial devidamente fundamentado.",
            },
          ].map(({ entidade, motivo }) => (
            <li
              key={entidade}
              className="grid grid-cols-1 gap-1 text-[0.88rem] sm:grid-cols-[180px_1fr]"
            >
              <span className="font-semibold text-ink">{entidade}</span>
              <span className="text-muted">{motivo}</span>
            </li>
          ))}
        </ul>
        <p className="text-[0.84rem] text-muted/70 italic">
          Transferências internacionais de dados, quando necessárias para a operação da
          infraestrutura, são realizadas para países ou organizações que ofereçam grau de proteção
          de dados adequado ou mediante cláusulas contratuais padrão (LGPD Art. 33).
        </p>
      </div>
    ),
  },
  {
    id: "direitos",
    title: "7. Seus Direitos como Titular",
    tag: "LGPD Art. 18",
    content: (
      <div className="space-y-4">
        <p>
          Você possui os seguintes direitos em relação aos seus dados pessoais, garantidos pelo Art.
          18 da LGPD:
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              direito: "Confirmação",
              desc: "Saber se tratamos seus dados pessoais.",
            },
            {
              direito: "Acesso",
              desc: "Receber cópia dos dados que mantemos sobre você.",
            },
            {
              direito: "Correção",
              desc: "Corrigir dados incompletos, inexatos ou desatualizados.",
            },
            {
              direito: "Anonimização ou Bloqueio",
              desc: "Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.",
            },
            {
              direito: "Portabilidade",
              desc: "Receber seus dados em formato estruturado e interoperável para transferência a outro fornecedor.",
            },
            {
              direito: "Eliminação",
              desc: "Solicitar a exclusão dos dados tratados com base em consentimento.",
            },
            {
              direito: "Informação sobre compartilhamento",
              desc: "Conhecer as entidades públicas e privadas com as quais compartilhamos seus dados.",
            },
            {
              direito: "Revogação do consentimento",
              desc: "Retirar o consentimento a qualquer momento, sem prejuízo da licitude do tratamento anterior.",
            },
          ].map(({ direito, desc }) => (
            <div key={direito} className="rounded-lg border border-g300/20 bg-g300/5 p-4">
              <h4 className="mb-1 font-semibold text-g700">{direito}</h4>
              <p className="text-[0.84rem] text-muted">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[0.88rem]">
          Para exercer qualquer um desses direitos, envie solicitação para{" "}
          <a
            href="mailto:privacidade@ibicultivo.com.br"
            className="text-g600 underline underline-offset-2"
          >
            privacidade@ibicultivo.com.br
          </a>
          . Responderemos em até <strong>15 dias úteis</strong>. Caso a solicitação não seja
          atendida, você pode contatar a ANPD (
          <a
            href="https://www.gov.br/anpd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-g600 underline underline-offset-2"
          >
            gov.br/anpd
          </a>
          ).
        </p>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "8. Cookies e Tecnologias de Rastreamento",
    tag: "Marco Civil Art. 7, VII",
    content: (
      <div className="space-y-4">
        <p>
          O site e o aplicativo Ibicultivo utilizam cookies e tecnologias similares para garantir o
          funcionamento adequado da plataforma e analisar o uso de forma agregada.
        </p>
        <div className="space-y-3">
          {[
            {
              tipo: "Cookies essenciais",
              desc: "Necessários para autenticação, segurança de sessão e funcionamento básico da plataforma. Não podem ser desativados.",
              base: "Legítimo interesse",
            },
            {
              tipo: "Cookies de análise",
              desc: "Coletam dados agregados e anonimizados sobre o uso das páginas (páginas mais acessadas, tempo de sessão). Permitem melhorar a experiência.",
              base: "Consentimento",
            },
            {
              tipo: "Cookies de preferências",
              desc: "Armazenam configurações do usuário (idioma, tema) para personalizar a experiência.",
              base: "Consentimento",
            },
          ].map(({ tipo, desc, base }) => (
            <div key={tipo} className="flex items-start gap-4 rounded-lg border border-g300/15 p-4">
              <div className="flex-1">
                <h4 className="font-semibold text-ink">{tipo}</h4>
                <p className="mt-0.5 text-[0.84rem] text-muted">{desc}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-[0.72rem] font-semibold ${
                  base === "Consentimento" ? "bg-o400/15 text-o600" : "bg-g300/15 text-g700"
                }`}
              >
                {base}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[0.84rem] text-muted/70">
          Você pode gerenciar ou desativar cookies não essenciais nas configurações do seu navegador
          ou do aplicativo. A desativação de cookies essenciais pode comprometer o funcionamento da
          plataforma.
        </p>
      </div>
    ),
  },
  {
    id: "seguranca",
    title: "9. Segurança da Informação",
    tag: "LGPD Art. 46",
    content: (
      <div className="space-y-4">
        <p>
          Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais
          contra acesso não autorizado, perda, alteração ou destruição, incluindo:
        </p>
        <ul className="space-y-2">
          {[
            "Transmissão de dados protegida por TLS/HTTPS em todas as comunicações.",
            "Armazenamento com criptografia em repouso para dados sensíveis.",
            "Controle de acesso baseado em funções (RBAC) — cada usuário acessa apenas os dados necessários à sua função.",
            "Autenticação segura com tokens de sessão de curta duração.",
            "Monitoramento contínuo de logs de acesso para detecção de anomalias.",
            "Política interna de segurança da informação com treinamento periódico da equipe.",
            "Plano de resposta a incidentes, com notificação à ANPD e aos titulares afetados em até 72 horas quando exigido pela regulação.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.88rem]">
              <span className="mt-[0.3rem] flex size-[18px] shrink-0 items-center justify-center rounded-full bg-g300/20 text-[0.6rem] font-bold text-g600">
                ✓
              </span>
              <span className="text-muted">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[0.84rem] text-muted/70 italic">
          Nenhum sistema é 100% seguro. Em caso de incidente de segurança envolvendo seus dados,
          notificaremos os titulares afetados de acordo com as exigências da LGPD e da ANPD.
        </p>
      </div>
    ),
  },
  {
    id: "menores",
    title: "10. Dados de Menores de Idade",
    tag: "LGPD Art. 14",
    content: (
      <div className="space-y-4">
        <p>
          O Ibicultivo é uma plataforma de uso profissional destinada a agricultores e técnicos
          agrícolas. O serviço <strong>não se destina a pessoas menores de 18 anos</strong>, e não
          coletamos dados de menores de forma intencional.
        </p>
        <p>
          Caso um responsável legal identifique que uma criança ou adolescente forneceu dados
          pessoais ao Ibicultivo sem o consentimento adequado, solicitamos que entre em contato pelo
          e-mail{" "}
          <a
            href="mailto:privacidade@ibicultivo.com.br"
            className="text-g600 underline underline-offset-2"
          >
            privacidade@ibicultivo.com.br
          </a>{" "}
          para que os dados sejam eliminados imediatamente.
        </p>
      </div>
    ),
  },
  {
    id: "contato",
    title: "11. Contato e Exercício de Direitos",
    tag: "LGPD Art. 18, §3",
    content: (
      <div className="space-y-4">
        <p>
          Para exercer seus direitos, tirar dúvidas sobre esta política ou reportar uma preocupação
          de privacidade, entre em contato:
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-g300/20 bg-g300/5 p-5">
            <h4 className="mb-2 font-semibold text-ink">Encarregado de Dados (DPO)</h4>
            <a
              href="mailto:privacidade@ibicultivo.com.br"
              className="block text-[0.9rem] text-g600 underline underline-offset-2"
            >
              privacidade@ibicultivo.com.br
            </a>
            <p className="mt-2 text-[0.8rem] text-muted/60">Resposta em até 15 dias úteis.</p>
          </div>
          <div className="rounded-lg border border-g300/20 bg-g300/5 p-5">
            <h4 className="mb-2 font-semibold text-ink">Contato Geral</h4>
            <a
              href="mailto:contato@ibicultivo.com.br"
              className="block text-[0.9rem] text-g600 underline underline-offset-2"
            >
              contato@ibicultivo.com.br
            </a>
            <p className="mt-2 text-[0.8rem] text-muted/60">Guaraciaba do Norte — CE, Brasil.</p>
          </div>
        </div>
        <p className="text-[0.84rem] text-muted/70">
          Se não obtiver resposta satisfatória, você pode apresentar reclamação diretamente à{" "}
          <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong> pelo portal{" "}
          <a
            href="https://www.gov.br/anpd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-g600 underline underline-offset-2"
          >
            gov.br/anpd
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: "alteracoes",
    title: "12. Alterações nesta Política",
    tag: "LGPD Art. 9, §2",
    content: (
      <div className="space-y-4">
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nos
          nossos serviços, na legislação aplicável ou nas práticas de privacidade da indústria.
        </p>
        <p>
          Quando ocorrerem alterações <strong>materiais</strong> — que impactem significativamente
          seus direitos ou a forma como tratamos seus dados — notificaremos via:
        </p>
        <ul className="space-y-2">
          {[
            "Aviso em destaque no site e no aplicativo.",
            "E-mail para os titulares cujos dados sejam afetados pela mudança.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.88rem]">
              <span className="mt-[0.3rem] flex size-[18px] shrink-0 items-center justify-center rounded-full bg-g300/20 text-[0.6rem] font-bold text-g600">
                ✓
              </span>
              <span className="text-muted">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[0.84rem] text-muted/70">
          A data da última atualização consta no topo desta página. Alterações sem impacto material
          entram em vigor imediatamente após a publicação. O uso continuado da plataforma após a
          vigência das alterações implica a aceitação da versão atualizada.
        </p>
      </div>
    ),
  },
];

function AccordionItem({ section }: { section: PolicySection }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-g300/15 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-150 hover:text-g700"
      >
        <span className="flex items-center gap-3">
          <span className="font-serif text-[1.12rem] font-semibold text-ink">{section.title}</span>
          {section.tag && (
            <span className="hidden rounded-full border border-g300/25 bg-g300/10 px-[0.6rem] py-[0.2rem] text-[0.65rem] font-medium tracking-wide text-g600 sm:inline-block">
              {section.tag}
            </span>
          )}
        </span>
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-g300/10 text-[0.75rem] text-g600 transition-colors duration-150">
          <FontAwesomeIcon icon={open ? faMinus : faPlus} />
        </span>
      </button>

      {open && (
        <div className="pb-6 text-[0.9rem] leading-[1.75] text-muted">{section.content}</div>
      )}
    </div>
  );
}

export default function PolicyContent() {
  return (
    <section className="bg-cream px-[5%] py-16">
      <div className="mx-auto max-w-[860px]">
        <div className="mb-8 rounded-xl border border-o400/20 bg-o400/5 px-6 py-4 text-[0.84rem] leading-[1.65] text-muted">
          <strong className="text-ink">Nota:</strong> Este documento é uma política de privacidade
          operacional. Recomendamos revisão periódica por advogado especializado em LGPD para
          garantir conformidade com eventuais atualizações regulatórias da ANPD.
        </div>

        <div className="rounded-xl border border-g300/15 bg-white px-6 shadow-sm">
          {sections.map((section) => (
            <AccordionItem key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
