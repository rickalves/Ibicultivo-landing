"use client";

import { useEffect, useRef } from "react";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  style?: React.CSSProperties;
}

export default function RevealWrapper({
  children,
  delay,
  className = "",
  style,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass = delay ? `d${delay}` : "";

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
