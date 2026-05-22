"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface TermosSection {
  id: string;
  title: string;
  tag?: string;
  content: React.ReactNode;
}

const sections: TermosSection[] = [
  {
    id: "aceitacao",
    title: "1. Aceitação dos Termos",
    content: (
      <div className="space-y-4">
        <p>
          Ao criar uma conta, acessar o aplicativo ou utilizar qualquer funcionalidade da plataforma
          Ibicultivo, você declara que leu, compreendeu e concorda com estes Termos de Uso e com a
          nossa{" "}
          <Link href="/privacidade" className="text-g600 underline underline-offset-2">
            Política de Privacidade
          </Link>
          , que é parte integrante deste documento.
        </p>
        <p>
          Caso não concorde com alguma das condições aqui estabelecidas, pedimos que não utilize a
          plataforma. O uso continuado do serviço após eventuais alterações implica a aceitação das
          novas condições.
        </p>
        <p className="text-[0.86rem] text-muted/70 italic">
          Nos termos do art. 3.º da Lei 12.965/2014 (Marco Civil da Internet), a concordância pode
          ser expressa por ato inequívoco, como o preenchimento de cadastro ou o uso ativo da
          plataforma.
        </p>
      </div>
    ),
  },
  {
    id: "definicoes",
    title: "2. Definições",
    content: (
      <div className="space-y-3">
        <p className="text-[0.9rem] text-muted">
          Para fins destes Termos, as seguintes expressões têm o significado abaixo:
        </p>
        <dl className="space-y-3">
          {[
            {
              term: "Ibicultivo",
              def: "Empresa titular da plataforma de gestão e rastreabilidade agrícola, com sede em Guaraciaba do Norte — CE.",
            },
            {
              term: "Plataforma",
              def: "Conjunto de serviços digitais oferecidos pelo Ibicultivo, incluindo o aplicativo móvel (iOS e Android) e o site ibicultivo.com.br.",
            },
            {
              term: "Usuário",
              def: "Qualquer pessoa física ou jurídica que acesse ou utilize a plataforma, seja na condição de Agricultor ou de Técnico.",
            },
            {
              term: "Agricultor",
              def: "Produtor rural que utiliza a plataforma para registrar, gerenciar e rastrear sua produção agrícola.",
            },
            {
              term: "Técnico",
              def: "Profissional habilitado (agrônomo, técnico agrícola ou equivalente) que utiliza a plataforma para elaborar e assinar laudos, receituários e ARTs vinculadas às propriedades atendidas.",
            },
            {
              term: "Dados Agronômicos",
              def: "Informações de produção, localização de talhões, registros de insumos, defensivos, colheitas e expedições inseridas na plataforma pelo Usuário.",
            },
            {
              term: "Conta",
              def: "Perfil de acesso individual criado pelo Usuário mediante cadastro na plataforma.",
            },
          ].map(({ term, def }) => (
            <div key={term} className="grid grid-cols-[auto,1fr] gap-x-3">
              <dt className="min-w-[140px] font-semibold text-ink">{term}</dt>
              <dd className="text-[0.9rem]">{def}</dd>
            </div>
          ))}
        </dl>
      </div>
    ),
  },
  {
    id: "servicos",
    title: "3. Descrição dos Serviços",
    content: (
      <div className="space-y-4">
        <p>
          O Ibicultivo é uma plataforma SaaS (Software as a Service) voltada para a gestão,
          rastreabilidade e certificação de produções agrícolas. Os principais recursos incluem:
        </p>
        <ul className="space-y-2 text-[0.93rem]">
          {[
            "Cadastro e mapeamento georeferenciado de propriedades e talhões;",
            "Registro de safras, cultivos, aplicações de insumos e defensivos;",
            "Geração de laudos técnicos e receituários agronômicos com assinatura eletrônica de CREA/ART;",
            "Emissão de QR Code de rastreabilidade para lotes e expedições;",
            "Relatórios de conformidade com a INC 02/2018 (MAPA), Lei 14.785/2023 e EUDR (UE 2023/1115);",
            "Canal de comunicação entre técnico e agricultor;",
            "Painel de gestão de planos e assinaturas.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-g500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[0.86rem] text-muted/70 italic">
          O Ibicultivo pode adicionar, modificar ou descontinuar funcionalidades a qualquer momento,
          comunicando os Usuários com antecedência mínima de 30 (trinta) dias para alterações
          relevantes.
        </p>
      </div>
    ),
  },
  {
    id: "cadastro",
    title: "4. Cadastro e Conta de Usuário",
    tag: "Marco Civil Art. 7",
    content: (
      <div className="space-y-4">
        <p>
          Para utilizar as funcionalidades completas da plataforma, o Usuário deve criar uma conta
          fornecendo informações verdadeiras, completas e atualizadas. Cada conta é pessoal e
          intransferível.
        </p>
        <div className="space-y-2 rounded-lg border border-g300/20 bg-g300/5 p-4">
          <h4 className="font-semibold text-ink">Requisitos de cadastro</h4>
          <ul className="space-y-1 text-[0.9rem]">
            <li>
              • Ter capacidade civil plena (18 anos ou emancipado) ou, se menor, contar com
              autorização do responsável legal;
            </li>
            <li>• Fornecer CPF ou CNPJ válido;</li>
            <li>• Técnicos devem informar número de registro no CREA/CFTA válido;</li>
            <li>• Utilizar e-mail e senha únicos de acesso.</li>
          </ul>
        </div>
        <p>
          O Usuário é inteiramente responsável pela confidencialidade de suas credenciais de acesso.
          Em caso de uso não autorizado, deve notificar imediatamente o Ibicultivo pelo e-mail{" "}
          <a
            href="mailto:contato@ibicultivo.com.br"
            className="text-g600 underline underline-offset-2"
          >
            contato@ibicultivo.com.br
          </a>
          .
        </p>
        <p>
          O Ibicultivo reserva-se o direito de recusar, suspender ou encerrar cadastros que violem
          estes Termos ou as leis brasileiras aplicáveis.
        </p>
      </div>
    ),
  },
  {
    id: "obrigacoes-usuario",
    title: "5. Obrigações e Responsabilidades do Usuário",
    content: (
      <div className="space-y-4">
        <p>Ao utilizar a plataforma, o Usuário compromete-se a:</p>
        <ul className="space-y-2 text-[0.93rem]">
          {[
            "Inserir dados agrícolas verídicos, precisos e atualizados, responsabilizando-se pela exatidão das informações registradas;",
            "Não utilizar a plataforma para fins ilícitos, fraudulentos ou que violem direitos de terceiros;",
            "Não tentar acessar contas de outros usuários, sistemas ou dados sem autorização;",
            "Não reproduzir, distribuir ou sublicenciar o software ou qualquer parte dele sem autorização expressa por escrito do Ibicultivo;",
            "Não realizar engenharia reversa, descompilação ou tentativa de extração do código-fonte da plataforma;",
            "Respeitar os direitos de propriedade intelectual do Ibicultivo e de seus licenciantes;",
            "Cumprir as normas técnicas e regulatórias aplicáveis à sua atividade (INC 02/2018, CREA, CFO, etc.).",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-g500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[0.86rem] text-muted/70 italic">
          O Usuário responderá civil e penalmente por quaisquer danos causados ao Ibicultivo, a
          outros usuários ou a terceiros em decorrência do uso indevido da plataforma.
        </p>
      </div>
    ),
  },
  {
    id: "obrigacoes-ibicultivo",
    title: "6. Obrigações do Ibicultivo",
    content: (
      <div className="space-y-4">
        <p>O Ibicultivo compromete-se a:</p>
        <ul className="space-y-2 text-[0.93rem]">
          {[
            "Manter a plataforma disponível com nível de serviço (SLA) de 99% de uptime mensal, exceto em janelas de manutenção previamente comunicadas;",
            "Proteger os dados dos Usuários com medidas técnicas e organizacionais adequadas, conforme a LGPD e a nossa Política de Privacidade;",
            "Notificar os Usuários sobre incidentes de segurança que possam afetá-los, no prazo e forma exigidos pela ANPD;",
            "Disponibilizar suporte técnico pelos canais indicados no aplicativo e no site;",
            "Manter backups regulares dos dados inseridos pelos Usuários durante o período de vigência do contrato;",
            "Comunicar alterações relevantes nos Termos de Uso com antecedência mínima de 30 dias.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-g500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "propriedade-intelectual",
    title: "7. Propriedade Intelectual",
    tag: "Lei 9.279/1996",
    content: (
      <div className="space-y-4">
        <p>
          Todo o conteúdo da plataforma — incluindo software, código-fonte, interface gráfica,
          logotipos, marcas, textos, imagens, relatórios gerados automaticamente e metodologia de
          rastreabilidade — é de propriedade exclusiva do Ibicultivo ou de seus licenciantes, e é
          protegido pela Lei de Propriedade Industrial (Lei 9.279/1996) e pela Lei de Direitos
          Autorais (Lei 9.610/1998).
        </p>
        <div className="space-y-2 rounded-lg border border-g300/20 bg-g300/5 p-4">
          <h4 className="font-semibold text-ink">Licença de uso</h4>
          <p className="text-[0.9rem]">
            O Ibicultivo concede ao Usuário uma licença limitada, não exclusiva, não sublicenciável
            e revogável para utilizar a plataforma estritamente para os fins previstos nestes
            Termos, enquanto a conta estiver ativa e em conformidade com estas condições.
          </p>
        </div>
        <div className="space-y-2 rounded-lg border border-g300/20 bg-g300/5 p-4">
          <h4 className="font-semibold text-ink">Dados do Usuário</h4>
          <p className="text-[0.9rem]">
            Os dados agronômicos inseridos pelo Usuário pertencem a ele. O Ibicultivo não
            reivindicará propriedade sobre esses dados e utilizará as informações apenas para
            prestar o serviço, conforme descrito na{" "}
            <Link href="/privacidade" className="text-g600 underline underline-offset-2">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "planos-pagamento",
    title: "8. Planos e Condições de Pagamento",
    content: (
      <div className="space-y-4">
        <p>
          O Ibicultivo oferece diferentes planos de assinatura, com funcionalidades e preços
          descritos na página de planos dentro do aplicativo. O acesso às funcionalidades premium
          está condicionado ao pagamento da assinatura vigente.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Cobrança",
              body: "As assinaturas são cobradas de forma recorrente (mensal ou anual), antecipadamente, conforme o plano escolhido.",
            },
            {
              title: "Cancelamento",
              body: "O Usuário pode cancelar a assinatura a qualquer momento. O acesso permanece ativo até o fim do período já pago.",
            },
            {
              title: "Reembolso",
              body: "Solicitações de reembolso devem ser feitas em até 7 dias corridos após a cobrança, conforme o art. 49 do CDC (Lei 8.078/1990).",
            },
            {
              title: "Inadimplência",
              body: "O não pagamento resultará na suspensão do acesso premium. Os dados ficam preservados por 90 dias para eventual reativação.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="rounded-lg border border-g300/20 bg-g300/5 p-4">
              <h4 className="mb-1 font-semibold text-ink">{title}</h4>
              <p className="text-[0.88rem]">{body}</p>
            </div>
          ))}
        </div>
        <p className="text-[0.86rem] text-muted/70 italic">
          Os preços podem ser reajustados anualmente com base no IPCA, com aviso prévio de 30 dias
          por e-mail.
        </p>
      </div>
    ),
  },
  {
    id: "privacidade-dados",
    title: "9. Privacidade e Proteção de Dados",
    tag: "LGPD Art. 6",
    content: (
      <div className="space-y-4">
        <p>
          O tratamento de dados pessoais realizado pelo Ibicultivo é regido pela nossa{" "}
          <Link href="/privacidade" className="text-g600 underline underline-offset-2">
            Política de Privacidade
          </Link>
          , que detalha quais dados coletamos, as bases legais, as finalidades, os prazos de
          retenção e os direitos dos titulares previstos na LGPD (Lei 13.709/2018).
        </p>
        <div className="rounded-lg border border-g300/20 bg-g300/5 p-4">
          <h4 className="mb-2 font-semibold text-ink">Portabilidade e exportação de dados</h4>
          <p className="text-[0.9rem]">
            O Usuário pode solicitar a exportação de seus dados agronômicos em formato aberto
            (CSV/JSON) a qualquer momento, sem custo adicional. Basta acessar as configurações da
            conta no aplicativo ou enviar solicitação para{" "}
            <a
              href="mailto:privacidade@ibicultivo.com.br"
              className="text-g600 underline underline-offset-2"
            >
              privacidade@ibicultivo.com.br
            </a>
            .
          </p>
        </div>
        <p className="text-[0.86rem] text-muted/70 italic">
          Em caso de encerramento da conta, os dados pessoais serão eliminados no prazo de 90
          (noventa) dias, ressalvadas as obrigações legais de retenção (ex.: dados fiscais,
          registros de rastreabilidade).
        </p>
      </div>
    ),
  },
  {
    id: "suspensao-encerramento",
    title: "10. Suspensão e Encerramento de Conta",
    content: (
      <div className="space-y-4">
        <p>
          O Ibicultivo pode suspender ou encerrar a conta do Usuário, com ou sem aviso prévio, nos
          seguintes casos:
        </p>
        <ul className="space-y-2 text-[0.93rem]">
          {[
            "Violação de qualquer disposição destes Termos de Uso;",
            "Fornecimento de dados falsos no cadastro;",
            "Uso da plataforma para atividades ilegais ou que prejudiquem terceiros;",
            "Inadimplência no pagamento da assinatura por período superior a 30 dias;",
            "Solicitação expressa do próprio Usuário.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-g500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          O Usuário pode encerrar sua conta a qualquer momento pelas configurações do aplicativo.
          Após o encerramento, o acesso será imediatamente revogado e os dados serão tratados
          conforme a{" "}
          <Link href="/privacidade" className="text-g600 underline underline-offset-2">
            Política de Privacidade
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: "limitacao-responsabilidade",
    title: "11. Limitação de Responsabilidade",
    content: (
      <div className="space-y-4">
        <p>
          A plataforma é fornecida <em>no estado em que se encontra</em> (<em>as is</em>). Na
          extensão máxima permitida pela legislação brasileira, o Ibicultivo não se responsabiliza
          por:
        </p>
        <ul className="space-y-2 text-[0.93rem]">
          {[
            "Danos indiretos, consequentes, incidentais ou lucros cessantes resultantes do uso ou da impossibilidade de uso da plataforma;",
            "Decisões técnicas e agronômicas tomadas pelo Usuário com base nas informações exibidas na plataforma;",
            "Falhas causadas por terceiros, incluindo provedores de internet, operadoras de telecomunicações e fabricantes de dispositivos;",
            "Perdas de dados causadas por ação do próprio Usuário (exclusão manual, configurações incorretas, etc.);",
            "Desastres naturais, ataques cibernéticos de força maior ou outros eventos fora do controle razoável do Ibicultivo.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-g500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[0.86rem] text-muted/70 italic">
          Nada nesta cláusula exclui ou limita a responsabilidade do Ibicultivo em casos de dolo,
          culpa grave ou nas hipóteses em que a legislação brasileira proíba expressamente tal
          limitação (ex.: art. 25 do CDC).
        </p>
      </div>
    ),
  },
  {
    id: "alteracoes",
    title: "12. Alterações nos Termos",
    content: (
      <div className="space-y-4">
        <p>
          O Ibicultivo pode revisar estes Termos de Uso periodicamente para refletir mudanças nos
          serviços, na legislação ou nas práticas do setor. Toda alteração relevante será comunicada
          com antecedência mínima de 30 (trinta) dias por e-mail e por notificação no aplicativo.
        </p>
        <p>
          O uso continuado da plataforma após o término do período de comunicação constitui
          concordância com os novos termos. Caso o Usuário não concorde, poderá encerrar sua conta
          sem ônus adicionais antes da data de vigência das alterações.
        </p>
        <p className="text-[0.86rem] text-muted/70 italic">
          O histórico de versões dos Termos de Uso está disponível mediante solicitação ao e-mail{" "}
          <a
            href="mailto:contato@ibicultivo.com.br"
            className="text-g600 underline underline-offset-2"
          >
            contato@ibicultivo.com.br
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: "lei-foro",
    title: "13. Lei Aplicável e Foro",
    tag: "Marco Civil Art. 11",
    content: (
      <div className="space-y-4">
        <p>
          Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito
          o foro da comarca de <strong>Guaraciaba do Norte — CE</strong> para dirimir quaisquer
          controvérsias decorrentes deste instrumento, com renúncia expressa a qualquer outro, por
          mais privilegiado que seja.
        </p>
        <p>
          Na hipótese de conflito entre estes Termos e a legislação aplicável, as disposições legais
          prevalecerão. As cláusulas eventualmente declaradas nulas ou ineficazes não prejudicam as
          demais, que continuarão em plena vigência.
        </p>
        <div className="rounded-lg border border-g300/20 bg-g300/5 p-4">
          <h4 className="mb-2 font-semibold text-ink">Legislação aplicável principal</h4>
          <ul className="space-y-1 text-[0.88rem]">
            <li>• Código Civil Brasileiro (Lei 10.406/2002)</li>
            <li>• Código de Defesa do Consumidor (Lei 8.078/1990)</li>
            <li>• Marco Civil da Internet (Lei 12.965/2014)</li>
            <li>• Lei Geral de Proteção de Dados — LGPD (Lei 13.709/2018)</li>
            <li>• Lei de Propriedade Industrial (Lei 9.279/1996)</li>
            <li>• Lei de Direitos Autorais (Lei 9.610/1998)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "contato",
    title: "14. Contato",
    content: (
      <div className="space-y-4">
        <p>Para dúvidas sobre estes Termos de Uso, entre em contato conosco pelos canais abaixo:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              label: "Suporte geral",
              value: "contato@ibicultivo.com.br",
              href: "mailto:contato@ibicultivo.com.br",
            },
            {
              label: "Privacidade e dados",
              value: "privacidade@ibicultivo.com.br",
              href: "mailto:privacidade@ibicultivo.com.br",
            },
          ].map(({ label, value, href }) => (
            <div key={label} className="rounded-lg border border-g300/20 bg-g300/5 p-4">
              <p className="mb-1 text-[0.78rem] font-semibold tracking-wide text-g500 uppercase">
                {label}
              </p>
              <a href={href} className="text-[0.93rem] text-g600 underline underline-offset-2">
                {value}
              </a>
            </div>
          ))}
        </div>
        <p className="text-[0.86rem] text-muted/70 italic">
          O prazo de resposta é de até 5 (cinco) dias úteis. Para solicitações relacionadas a dados
          pessoais, o prazo segue o estabelecido na{" "}
          <Link href="/privacidade" className="text-g600 underline underline-offset-2">
            Política de Privacidade
          </Link>{" "}
          (15 dias úteis, conforme orientação da ANPD).
        </p>
      </div>
    ),
  },
];

function AccordionItem({ section }: { section: TermosSection }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-g300/20 last:border-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-ink">{section.title}</span>
          {section.tag && (
            <span className="rounded-full bg-g300/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-g600">
              {section.tag}
            </span>
          )}
        </span>
        <FontAwesomeIcon
          icon={open ? faMinus : faPlus}
          className="h-3.5 w-3.5 shrink-0 text-g500"
        />
      </button>
      {open && (
        <div className="pb-6 text-[0.93rem] leading-[1.8] text-muted/90">{section.content}</div>
      )}
    </div>
  );
}

export default function TermosContent() {
  return (
    <section className="px-[5%] py-16">
      <div className="mx-auto max-w-[760px]">
        {/* Disclaimer */}
        <div className="mb-10 rounded-xl border border-o400/30 bg-o100/30 px-5 py-4 text-[0.86rem] leading-[1.7] text-muted">
          <strong className="text-ink">Aviso:</strong> Este documento é de caráter informativo e foi
          elaborado com base na legislação brasileira vigente. Recomendamos revisão periódica por
          advogado especializado para garantir conformidade com eventuais atualizações normativas.
        </div>
        {/* Accordion */}
        <div className="divide-y-0 rounded-xl border border-g300/20 bg-white/60 px-6 shadow-sm">
          {sections.map((section) => (
            <AccordionItem key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
