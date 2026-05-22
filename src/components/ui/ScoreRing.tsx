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
    <div ref={ringRef} className="relative mb-[0.8rem] size-[90px]">
      <svg viewBox="0 0 90 90" className="size-full -rotate-90">
        <circle className="score-track" cx="45" cy="45" r="35" />
        <circle ref={fillRef} className="score-fill" cx="45" cy="45" r="35" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-[1.5rem] leading-none font-bold text-g700">92</span>
        <span className="text-[0.58rem] text-muted">/ 100</span>
      </div>
    </div>
  );
}
