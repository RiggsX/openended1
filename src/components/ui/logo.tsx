export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 外圈 - 完整圆环 */}
      <circle
        cx="20"
        cy="20"
        r="15"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.9"
      />

      {/* 内圈 - 增加层次 */}
      <circle
        cx="20"
        cy="20"
        r="11"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* 中心图形 - 向右的箭头/延伸 */}
      <path
        d="M 14 20 L 26 20 M 22 16 L 26 20 L 22 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 右侧突破线 - 延伸到边界外 */}
      <line
        x1="26"
        y1="20"
        x2="35"
        y2="20"
        stroke="url(#extendGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 装饰点 - 增加细节 */}
      <circle cx="35" cy="20" r="1.5" fill="currentColor" opacity="0.6" />

      {/* 微妙光晕 - Apple 式质感 */}
      <circle cx="20" cy="20" r="15" fill="url(#glowGradient)" opacity="0.08" />

      {/* 内阴影效果 */}
      <circle
        cx="20"
        cy="20"
        r="15"
        stroke="url(#innerShadow)"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
      />

      {/* 渐变定义 */}
      <defs>
        {/* 延伸线渐变 */}
        <linearGradient id="extendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>

        {/* 光晕渐变 */}
        <radialGradient id="glowGradient">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>

        {/* 内阴影渐变 */}
        <linearGradient id="innerShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="black" stopOpacity="0.2" />
          <stop offset="50%" stopColor="transparent" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}
