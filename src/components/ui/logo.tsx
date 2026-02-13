export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 主体 - 三条优雅的波浪线 */}
      <path
        d="M 4 14 Q 10 11, 15 14 T 25 14 T 35 14"
        stroke="url(#wave1Gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 4 20 Q 10 17, 15 20 T 25 20 T 35 20"
        stroke="url(#wave2Gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 4 26 Q 10 23, 15 26 T 25 26 T 35 26"
        stroke="url(#wave3Gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* 延伸线 - 渐变淡出到无限 */}
      <line
        x1="35"
        y1="14"
        x2="39"
        y2="14"
        stroke="url(#fadeGradient1)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <line
        x1="35"
        y1="20"
        x2="39"
        y2="20"
        stroke="url(#fadeGradient2)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <line
        x1="35"
        y1="26"
        x2="39"
        y2="26"
        stroke="url(#fadeGradient3)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* 环境光晕 - 增加深度 */}
      <ellipse cx="20" cy="20" rx="20" ry="10" fill="url(#ambientGlow)" opacity="0.1" />

      {/* 顶部高光 - Apple 式质感 */}
      <path
        d="M 4 14 Q 10 11, 15 14 T 25 14 T 35 14"
        stroke="url(#highlightGradient)"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      <path
        d="M 4 20 Q 10 17, 15 20 T 25 20 T 35 20"
        stroke="url(#highlightGradient)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />

      {/* 底部阴影 - 立体感 */}
      <path
        d="M 4 26 Q 10 23, 15 26 T 25 26 T 35 26"
        stroke="url(#shadowGradient)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
        tm="translate(0, 0.5)"
      />

      {/* 渐变定义 */}
      <defs>
        {/* 波浪线渐变 - 从暗到亮 */}
        <linearGradient id="wave1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.65" />
        </linearGradient>

        <linearGradient id="wave2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.75" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="wave3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.75" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>

        {/* 延伸线淡出渐变 */}
        <linearGradient id="fadeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.65" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="fadeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="fadeGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* 环境光晕 */}
        <radialGradient id="ambientGlow">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>

        {/* 高光渐变 */}
        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="50%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* 阴影渐变 */}
        <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="black" stopOpacity="0" />
          <stop offset="50%" stopColor="black" stopOpacity="0.3" />
          <stop offset="100%" stopColor="black" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
