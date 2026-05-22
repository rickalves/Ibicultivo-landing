import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoute,
  faQrcode,
  faMapLocationDot,
  faChartLine,
  faFileLines,
  faUsers,
  faWifi,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  "fa-route": faRoute,
  "fa-qrcode": faQrcode,
  "fa-map-location-dot": faMapLocationDot,
  "fa-chart-line": faChartLine,
  "fa-file-lines": faFileLines,
  "fa-users": faUsers,
  "fa-wifi": faWifi,
  "fa-leaf": faLeaf,
};

const items = [
  { icon: "fa-route", text: "Rastreabilidade completa" },
  { icon: "fa-qrcode", text: "QR Code de origem" },
  { icon: "fa-map-location-dot", text: "Gestão de lotes por mapa" },
  { icon: "fa-chart-line", text: "Painel de indicadores" },
  { icon: "fa-file-lines", text: "Relatórios de safra" },
  { icon: "fa-users", text: "Multi-produtor" },
  { icon: "fa-wifi", text: "Funciona offline" },
  { icon: "fa-leaf", text: "Feito no Ceará" },
];

// Doubled for seamless loop
const allItems = [...items, ...items];

export default function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-g700 py-[0.85rem] text-[0.82rem] font-normal tracking-[0.04em] whitespace-nowrap text-g200">
      <div className="animate-marquee inline-flex">
        {allItems.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-8">
            <FontAwesomeIcon
              icon={icons[item.icon as keyof typeof icons]}
              className="text-[0.7rem] text-o400"
            />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
