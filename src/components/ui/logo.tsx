export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 主体 - 简洁的 O 字母，右侧开口 */}
      <path
        d="M 20 6 A 14 14 0 1 1 20 34"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* 内部横线 - 代表 "延伸" */}
      <line
        x1="20"
        y1="20"
        x2="34"
        y2="20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* 微妙的内阴影效果 */}
      <path
        d="M 20 6 A 14 14 0 1 1 20 34"
        stroke="url(#innerShadow)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.15"
      />

      {/* 渐变定义 */}
      <defs>
        {/* 内阴影渐变 */}
        <linearGradient id="innerShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="black" stopOpacity="0.3" />
          <stop offset="50%" stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
