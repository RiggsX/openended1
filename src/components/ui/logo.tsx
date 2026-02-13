export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 主体 - 三条优雅的波浪线 */}
      <path
        d="M 5 14 Q 10 11, 15 14 T 25 14 T 35 14"
        stroke="url(#wave1Gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 5 20 Q 10 17, 15 20 T 25 20 T 35 20"
        stroke="url(#wave2Gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 5 26 Q 10 23, 15 26 T 25 26 T 35 26"
        stroke="url(#wave3Gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* 起点 - 发光圆点 */}
      <circle cx="5" cy="20" r="2.5" fill="url(#dotGradient)">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* 延伸线 - 渐变淡出 */}
      <line
        x1="35"
        y1="14"
        x2="38"
        y2="14"
        stroke="url(#fadeGradient1)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <line
        x1="35"
        y1="20"
        x2="38"
        y2="20"
        stroke="url(#fadeGradient2)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <line
        x1="35"
        y1="26"
        x2="38"
        y2="26"
        stroke="url(#fadeGradient3)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* 微妙光晕 - 增加深度 */}
      <ellipse cx="20" cy="20" n ry="10" fill="url(#ambientGlow)" opacity="0.08" />

      {/* 高光效果 - Apple 式质感 */}
      <path
        d="M 5 14 Q 10 11, 15 14 T 25 14 T 35 14"
        stroke="url(#highlightGradient)"
        strokeWidth="0.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* 渐变定义 */}
      <defs>
        {/* 波浪线渐变 - 从暗到亮 */}
        <linearGradient id="wave1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>

        <linearGradient id="wave2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="wave3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>

        {/* 起点渐变 */}
        <radialGradient id="dotGradient">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
        </radialGradient>

        {/* 延伸线淡出渐变 */}
        <linearGradient id="fadeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="fadeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="fadeGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* 环境光晕 */}
        <radialGradient id="ambientGlow">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>

        {/* 高光渐变 */}
        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
