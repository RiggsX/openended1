export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 主体 - 三条递进的波浪线，象征持续延伸 */}
      <path
        d="M 5 15 Q 12 12, 15 15 T 25 15 T 35 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />

      <path
        d="M 5 20 Q 12 17, 15 20 T 25 20 T 35 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      <path
        d="M 5 25 Q 12 22, 15 25 T 25 25 T 35 25"
        stroke="url(#waveGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* 起点标记 */}
      <circle cx="5" cy="20" r="2.5" fill="currentColor" />

      {/* 延伸线 - 突破边界 */}
      <line
        x1="35"
        y1="15"
        x2="38"
        y2="15"
        stroke="url(#fadeGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <line
        x1="35"
        y1="20"
        x2="38"
        y2="20"
        stroke="url(#fadeGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <line
        x1="35"
        y1="25"
        x2="38"
        y2="25"
        stroke="url(#fadeGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* 微妙光效 */}
      <ellipse cx="20" cy="20" rx="18" ry="8" fill="url(#glowGradient)" opacity="0.06" />

      {/* 渐变定义 */}
      <defs>
        {/* 波浪渐变 */}
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>

        {/* 淡出渐变 */}
        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* 光晕渐变 */}
        <radialGradient id="glowGradient">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
