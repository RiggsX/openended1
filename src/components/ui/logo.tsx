export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 主圆环 - 未闭合，象征 "OPEN-ENDED" */}
      <path
        d="M 20 2 A 18 18 0 1 1 20 38"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* 内圆环 - 更细腻的层次 */}
      <path
        d="M 20 8 A 12 12 0 1 1 20 32"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* 核心圆环 - 最内层 */}
      <circle
        cx="20"
        cy="20"
        r="6"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.7"
        fill="none"
      />

      {/* 中心发光点 */}
      <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.9">
        <animate attributeName="r" values="1.5;2;1.5" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* 顶部开口标记 - 强调 "OPEN" */}
      <g opacity="0.8">
        <line
          x1="20"
          y1="2"
          x2="20"
          y2="6"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="20" cy="2" r="0.5" fill="currentColor" />
      </g>

      {/* 微妙的光晕效果 */}
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="none"
        stroke="url(#glowGradient)"
        strokeWidth="2"
        opacity="0.05"
      />

      {/* 渐变定义 */}
      <defs>
        <radialGradient id="glowGradient">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
