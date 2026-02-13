export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 外圆 - 渐变描边 */}
      <circle cx="20" cy="20" r="16" stroke="url(#strokeGradient)" strokeWidth="2.5" fill="none" />

      {/* 内圆 - 增加层次 */}
      <circle
        cx="20"
        cy="20"
        r="13"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.2"
      />

      {/* 内部箭头 - 渐变填充 */}
      <path
        d="M 12 20 L 24 20 M 20 16 L 24 20 L 20 24"
        stroke="url(#arrowGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 右侧延伸线 - 渐变淡出 */}
      <line
        x1="28"
        y1="20"
        x2="36"
        y2="20"
        stroke="url(#lineGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 微妙光晕 */}
      <circle cx="20" cy="20" r="16" fill="url(#glowGradient)" opacity="0.1" />

      {/* 渐变定义 */}
      <defs>
        {/* 描边渐变 */}
        <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>

        {/* 箭头渐变 */}
        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>

        {/* 延伸线渐变 - 淡出效果 */}
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* 光晕渐变 */}
        <radialGradient id="glowGradient">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
