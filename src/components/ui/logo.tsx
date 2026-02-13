export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 主体 - 三个递进的弧形，象征持续延伸 */}
      <path
        d="M 10 20 Q 15 10, 20 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.4"
      />

      <path
        d="M 10 20 Q 17.5 5, 25 5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />

      <path
        d="M 10 20 Q 20 2, 30 2"
        stroke="url(#arcGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 下半部分 - 镜像 */}
      <path
        d="M 10 20 Q 15 30, 20 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.4"
      />

      <path
        d="M 10 20 Q 17.5 35, 25 35"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />

      <path
        d="M 10 20 Q 20 38, 30 38"
        stroke="url(#arcGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 中心点 - 起点标记 */}
      <circle cx="10" cy="20" r="2" fill="currentColor" />

      {/* 延伸线 - 突破边界 */}
      <line
        x1="30"
        y1="2"
        x2="38"
        y2="2"
        stroke="url(#fadeGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <line
        x1="30"
        y1="38"
        x2="38"
        y2="38"
        stroke="url(#fadeGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* 微妙光效 */}
      <ellipse cx="20" cy="20" rx="15" ry="18" fill="url(#glowGradient)" opacity="0.06" />

      {/* 渐变定义 */}
      <defs>
        {/* 弧形渐变 */}
        <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.7" />
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
