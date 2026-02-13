export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* O 字母 - 代表 OPEN */}
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="3" fill="none" />

      {/* 右侧开口 - 象征无限延伸 */}
      <rect x="30" y="17" width="6" height="6" fill="black" />
    </svg>
  );
}
