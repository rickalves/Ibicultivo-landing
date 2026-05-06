import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoute, faQrcode, faMapLocationDot, faChartLine,
  faFileLines, faUsers, faWifi, faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const icons = { "fa-route": faRoute, "fa-qrcode": faQrcode, "fa-map-location-dot": faMapLocationDot, "fa-chart-line": faChartLine, "fa-file-lines": faFileLines, "fa-users": faUsers, "fa-wifi": faWifi, "fa-leaf": faLeaf };

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
    <div
      style={{
        background: "#235025",
        color: "#B8E3BB",
        padding: "0.85rem 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontSize: "0.82rem",
        fontWeight: 400,
        letterSpacing: "0.04em",
      }}
    >
      <div className="animate-marquee" style={{ display: "inline-flex" }}>
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "0 2rem",
            }}
          >
            <FontAwesomeIcon
              icon={icons[item.icon as keyof typeof icons]}
              style={{ color: "#E8962A", fontSize: "0.7rem" }}
            />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
