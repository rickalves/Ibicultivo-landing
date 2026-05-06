const pins = [
  { left: "38%", top: "22%", label: "São Benedito", type: "orange" as const },
  { left: "65%", top: "50%", label: "Ibiapina", type: "green" as const },
  { left: "22%", top: "68%", label: "Tianguá", type: "blue" as const },
];

export default function MapCanvas() {
  return (
    <div
      style={{
        marginTop: "1rem",
        background: "rgba(61,140,65,0.05)",
        border: "1px solid rgba(61,140,65,0.15)",
        borderRadius: "var(--r-sm)",
        minHeight: 150,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Terrain lines */}
      <div className="t-line" style={{ top: "28%", transform: "rotate(-2deg)" }} />
      <div className="t-line" style={{ top: "52%", opacity: 0.4, transform: "rotate(1.5deg)" }} />
      <div className="t-line" style={{ top: "74%", opacity: 0.25, transform: "rotate(-1deg)" }} />

      {/* Pins */}
      {pins.map(({ left, top, label, type }) => (
        <div
          key={label}
          style={{
            position: "absolute",
            left,
            top,
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            zIndex: 2,
          }}
        >
          <div
            className={
              type === "orange"
                ? "animate-pin-orange"
                : type === "green"
                ? "animate-pin-green"
                : undefined
            }
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background:
                type === "orange" ? "#E8962A" : type === "green" ? "#5AAD5F" : "#5B8ED6",
              boxShadow:
                type === "blue" ? "0 0 0 4px rgba(91,142,214,0.2)" : undefined,
            }}
          />
          <span
            style={{
              fontSize: "0.58rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.65)",
              background: "rgba(0,0,0,0.45)",
              padding: "2px 6px",
              borderRadius: 4,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
