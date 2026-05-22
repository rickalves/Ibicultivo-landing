interface ChartBarsProps {
  bars: { height: string; highlight?: boolean }[];
}

export default function ChartBars({ bars }: ChartBarsProps) {
  return (
    <div className="flex h-[72px] items-end gap-[5px] pt-[1.2rem]">
      {bars.map((bar, i) => (
        <div key={i} className={`bar${bar.highlight ? "hi" : ""}`} style={{ height: bar.height }} />
      ))}
    </div>
  );
}
