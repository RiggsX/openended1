export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 无限符号变体 - 右侧开口 */}
      <path
        d="M 8 20 C 8 14, 12 10, 16 10 C 20 10, 22 14, 24 20 C 26 26, 28 30, 32 30 C 34 30, 36 28, 37 26"
        stroke="url(#mainGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* 下半部分 */}
      <path
        d="M 8 20 C 8 26, 12 30, 16 30 C 20 30, 22 26, 24 20 C 26 14, 28 10, 32 10 C 34 10, 36 12, 37 14"
        stroke="url(#mainGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* 延伸线 - 突破边界 */}
      <line
        x1="37"
        y1="20"
        x2="39"
        y2="20"
        stroke="url(#fadeGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* 微妙光晕 */}
      <ellipse cx="20" cy="20" rx="18" ry="12" fill="url(#glowGradient)" opacity="0.08" />

      {/* 渐变定义 */}
      <defs>
        {/* 主渐变 */}
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
        </linearGradient>

        {/* 淡出渐变 */}
        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* 光晕渐变 */}
        <radialGradient id="glowGradient">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
