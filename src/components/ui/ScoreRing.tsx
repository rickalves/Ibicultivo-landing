"use client";

import { useEffect, useRef } from "react";

export default function ScoreRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const fill = fillRef.current;
    if (!ring || !fill) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            fill.style.strokeDashoffset = "50";
          }, 300);
          obs.unobserve(ring);
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(ring);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ringRef}
      style={{ width: 90, height: 90, position: "relative", marginBottom: "0.8rem" }}
    >
      <svg
        viewBox="0 0 90 90"
        style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}
      >
        <circle className="score-track" cx="45" cy="45" r="35" />
        <circle ref={fillRef} className="score-fill" cx="45" cy="45" r="35" />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#235025",
            lineHeight: 1,
          }}
        >
          92
        </span>
        <span style={{ fontSize: "0.58rem", color: "#5A6B5C" }}>/ 100</span>
      </div>
    </div>
  );
}
