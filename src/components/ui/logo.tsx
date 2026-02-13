export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 主体 - 三条精致的波浪线，曲线更优雅 */}
      <path
        d="M 3 13.5 Q 9 10.5, 14 13.5 Q 19 16.5, 24 13.5 Q 29 10.5, 34 13.5"
        stroke="url(#wave1Gradient)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <path
        d="M 3 20 Q 9 17, 14 20 Q 19 23, 24 20 Q 29 17, 34 20"
        stroke="url(#wave2Gradient)"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <path
        d="M 3 26.5 Q 9 23.5, 14 26.5 Q 19 29.5, 24 26.5 Q 29 23.5, 34 26.5"
        stroke="url(#wave3Gradient)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* 延伸线 - 更长的淡出效果 */}
      <line
        x1="34"
        y1="13.5"
        x2="39"
        y2="13.5"
        stroke="url(#fadeGradient1)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <line
        x1="34"
        y1="20"
        x2="39"
        y2="20"
        stroke="url(#fadeGradient2)"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <line
        x1="34"
        y1="26.5"
        x2="39"
        y2="26.5"
        stroke="url(#fadeGradient3)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* 环境光晕 - 多层叠加 */}
      <ellipse cx="20" cy="20" rx="22" ry="12" fill="url(#ambientGlow1)" opacity="0.12" />

      <ellipse cx="20" cy="20" rx="16" ry="8" fill="url(#ambientGlow2)" opacity="0.08" />

      {/* 顶部高光 - 精致的反光效果 */}
      <path
        d="M 3 13.5 Q 9 10.5, 14 13.5 Q 19 16.5, 24 13.5 Q 29 10.5, 34 13.5"
        stroke="url(#highlightGradient1)"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
        transform="translate(0, -0.3)"
      />

      <path
        d="M 3 20 Q 9 17, 14 20 Q 19 23, 24 20 Q 29 17, 34 20"
        stroke="url(#highlightGradient2)"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
        transform="translate(0, -0.3)"
      />

      <path
        d="M 3 26.5 Q 9 23.5, 14 26.5 Q 19 29.5, 24 26.5 Q 29 23.5, 34 26.5"
        stroke="url(#highlightGradient3)"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
        transform="translate(0, -0.3)"
      />

      {/* 底部阴影 - 增加立体感 */}
      <path
        d="M 3 26.5 Q 9 23.5, 14 26.5 Q 19 29.5, 24 26.5 Q 29 23.5, 34 26.5"
        stroke="url(#shadowGradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.15"
        transform="translate(0, 0.5)"
      />

      {/* 渐变定义 */}
      <defs>
        {/* 波浪线渐变 - 精细的明暗过渡 */}
        <linearGradient id="wave1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.32" />
          <stop offset="30%" stopColor="currentColor" stopOpacity="0.45" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.68" />
        </linearGradient>

        <linearGradient id="wave2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.52" />
          <stop offset="30%" stopColor="currentColor" stopOpacity="0.68" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.78" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.88" />
        </linearGradient>

        <linearGradient id="wave3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.72" />
          <stop offset="30%" stopColor="currentColor" stopOpacity="0.88" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.96" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>

        {/* 延伸线淡出渐变 - 更平滑 */}
        <linearGradient id="fadeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.68" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="fadeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.88" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="fadeGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.45" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* 环境光晕 - 双层叠加 */}
        <radialGradient id="ambientGlow1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="ambientGlow2">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>

        {/* 高光渐变 - 每条线独立 */}
        <linearGradient id="highlightGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="40%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="highlightGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.95" />
          <stop offset="45%" stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="highlightGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="50%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* 阴影渐变 */}
        <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="black" stopOpacity="0" />
          <stop offset="40%" stopColor="black" stopOpacity="0.25" />
          <stop offset="100%" stopColor="black" stopOpacity="0.45" />
        </linearGradient>
      </defs>
    </svg>
  );
}
