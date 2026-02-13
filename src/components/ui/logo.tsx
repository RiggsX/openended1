export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 主圆环 - 未闭合 */}
      <path
        d="M 20 4 A 16 16 0 1 1 20 36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* 顶部开口标记 */}
      <circle cx="20" cy="4" r="1.5" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
