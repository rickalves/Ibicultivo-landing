interface ChartBarsProps {
  bars: { height: string; highlight?: boolean }[];
}

export default function ChartBars({ bars }: ChartBarsProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 5,
        height: 72,
        paddingTop: "1.2rem",
      }}
    >
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`bar${bar.highlight ? " hi" : ""}`}
          style={{ height: bar.height }}
        />
      ))}
    </div>
  );
}
