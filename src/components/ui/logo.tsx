export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 外圈 - 极细线条 */}
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />

      {/* 内圈 - 渐变效果 */}
      <circle cx="20" cy="20" r="12" stroke="url(#logoGradient)" strokeWidth="0.5" opacity="0.4" />

      {/* 中心点 - 发光效果 */}
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.9">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* 四个方向的极简线条 */}
      <g opacity="0.25">
        <line
          x1="20"
          y1="2"
          x2="20"
          y2="10"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="30"
          x2="20"
          y2="38"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="20"
          x2="10"
          y2="20"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="20"
          x2="38"
          y2="20"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </g>

      {/* 渐变定义 */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
