const pins = [
  { left: "38%", top: "22%", label: "São Benedito", type: "orange" as const },
  { left: "65%", top: "50%", label: "Ibiapina", type: "green" as const },
  { left: "22%", top: "68%", label: "Tianguá", type: "blue" as const },
];

const pinDotClass = {
  orange: "animate-pin-orange bg-o400",
  green: "animate-pin-green bg-g400",
  blue: "bg-[#5B8ED6] shadow-[0_0_0_4px_rgba(91,142,214,0.2)]",
};

export default function MapCanvas() {
  return (
    <div className="relative mt-4 min-h-[150px] overflow-hidden rounded-sm border border-g500/15 bg-g500/[0.05]">
      {/* Terrain lines */}
      <div className="t-line top-[28%] rotate-[-2deg]" />
      <div className="t-line top-[52%] rotate-[1.5deg] opacity-40" />
      <div className="t-line top-[74%] rotate-[-1deg] opacity-25" />

      {/* Pins */}
      {pins.map(({ left, top, label, type }) => (
        <div
          key={label}
          className="absolute z-[2] flex -translate-x-1/2 flex-col items-center gap-[2px]"
          style={{ left, top }}
        >
          <div className={`size-[10px] rounded-full ${pinDotClass[type]}`} />
          <span className="rounded-[4px] bg-black/[0.45] px-[6px] py-[2px] text-[0.58rem] font-medium whitespace-nowrap text-white/65">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
