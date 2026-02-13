export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 外圆 - 完整 */}
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2.5" fill="none" />

      {/* 内部箭头 - 向右延伸，象征 OPEN-ENDED */}
      <path
        d="M 12 20 L 24 20 M 20 16 L 24 20 L 20 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 右侧延伸线 - 突破边界 */}
      <line
        x1="28"
        y1="20"
        x2="36"
        y2="20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
