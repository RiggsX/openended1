"use client";

import { motion } from "framer-motion";

interface RadarChartProps {
  data: { label: string; value: number }[];
  size?: number;
}

export function RadarChart({ data, size = 280 }: RadarChartProps) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.38;
  const levels = 4;
  const angleStep = (2 * Math.PI) / data.length;

  function polarToCartesian(angle: number, r: number) {
    return {
      x: cx + r * Math.sin(angle),
      y: cy - r * Math.cos(angle),
    };
  }

  const gridLines = Array.from({ length: levels }, (_, i) => {
    const r = (radius / levels) * (i + 1);
    const points = data
      .map((_, j) => {
        const p = polarToCartesian(j * angleStep, r);
        return `${p.x},${p.y}`;
      })
      .join(" ");
    return points;
  });

  const dataPoints = data
    .map((d, i) => {
      const r = (d.value / 100) * radius;
      const p = polarToCartesian(i * angleStep, r);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  const axisLines = data.map((_, i) => {
    const p = polarToCartesian(i * angleStep, radius);
    return { x1: cx, y1: cy, x2: p.x, y2: p.y };
  });

  const labels = data.map((d, i) => {
    const p = polarToCartesian(i * angleStep, radius + 24);
    return { ...p, label: d.label, value: d.value };
  });

  return (
    <div className="relative" style={{ width: size, height: size + 48 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Grid */}
        {gridLines.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="var(--border)"
            strokeWidth={i === levels - 1 ? 1.5 : 0.5}
            opacity={0.6}
          />
        ))}

        {/* Axis lines */}
        {axisLines.map((line, i) => (
          <line key={i} {...line} stroke="var(--border)" strokeWidth={0.5} opacity={0.4} />
        ))}

        {/* Data area — gold fill and stroke */}
        <motion.polygon
          points={dataPoints}
          fill="var(--accent)"
          fillOpacity={0.12}
          stroke="var(--accent)"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Data points — gold */}
        {data.map((d, i) => {
          const r = (d.value / 100) * radius;
          const p = polarToCartesian(i * angleStep, r);
          return (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={4}
              fill="var(--accent)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              filter="url(#glow-gold)"
            />
          );
        })}

        {/* Glow filter — gold-toned */}
        <defs>
          <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Labels */}
      {labels.map((l, i) => (
        <motion.div
          key={i}
          className="absolute text-center"
          style={{
            left: l.x,
            top: l.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.1 }}
        >
          <div
            className="text-xs font-bold text-[var(--accent)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {l.value}%
          </div>
          <div
            className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {l.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
