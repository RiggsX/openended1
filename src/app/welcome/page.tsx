export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-8">
      <div className="text-center">
        {/* 动态 Logo */}
        <div className="mb-12 flex justify-center">
          <svg
            className="w-32 h-32"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 主体 - 三条精致的波浪线 - 使用 transform 而不是 path 变形 */}
            <g>
              <path
                d="M 3 13.5 Q 9 10.5, 14 13.5 Q 19 16.5, 24 13.5 Q 29 10.5, 34 13.5"
                stroke="url(#wave1Gradient)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 0,-0.8; 0,0.8; 0,-0.8; 0,0"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>

              <path
                d="M 3 20 Q 9 17, 14 20 Q 19 23, 24 20 Q 29 17, 34 20"
                stroke="url(#wave2Gradient)"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 0,0.6; 0,-0.6; 0,0.6; 0,0"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>

              <path
                d="M 3 26.5 Q 9 23.5, 14 26.5 Q 19 29.5, 24 26.5 Q 29 23.5, 34 26.5"
                stroke="url(#wave3Gradient)"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 0,0.8; 0,-0.8; 0,0.8; 0,0"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* 延伸线 - 简单的透明度动画 */}
            <line
              x1="34"
              y1="13.5"
              x2="39"
              y2="13.5"
              stroke="url(#fadeGradient1)"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.6;0.3"
                dur="6s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="34"
              y1="20"
              x2="39"
              y2="20"
              stroke="url(#fadeGradient2)"
              strokeWidth="2.3"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="0.5;0.8;0.5"
                dur="6s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="34"
              y1="26.5"
              x2="39"
              y2="26.5"
              stroke="url(#fadeGradient3)"
              strokeWidth="2.8"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur="6s"
                repeatCount="indefinite"
              />
            </line>

            {/* 环境光晕 - 柔和脉动 */}
            <ellipse cx="20" cy="20" rx="20" ry="10" fill="url(#ambientGlow1)">
              <animate
                attributeName="opacity"
                values="0.06;0.12;0.06"
                dur="6s"
                repeatCount="indefinite"
              />
            </ellipse>

            {/* 渐变定义 */}
            <defs>
              <linearGradient id="wave1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0.35" />
                <stop offset="50%" stopColor="white" stopOpacity="0.5" />
                <stop offset="100%" stopColor="white" stopOpacity="0.68" />
              </linearGradient>

              <linearGradient id="wave2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0.55" />
                <stop offset="50%" stopColor="white" stopOpacity="0.75" />
                <stop offset="100%" stopColor="white" stopOpacity="0.88" />
              </linearGradient>

              <linearGradient id="wave3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0.75" />
                <stop offset="50%" stopColor="white" stopOpacity="0.95" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="fadeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0.68" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="fadeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0.88" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="fadeGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <radialGradient id="ambientGlow1">
                <stop offset="0%" stopColor="white" stopOpacity="0.45" />
                <stop offset="50%" stopColor="white" stopOpacity="0.18" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* 品牌名称 */}
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-extralight text-white mb-8 tracking-tight">
          OPENENDED
        </h1>

        {/* 感谢语 */}
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-2xl font-light text-white/80">感谢您选择 OPENENDED</p>
          <p className="text-lg font-light text-white/60 leading-relaxed">
            我们致力于为您提供最优质的 AI 工作流系统
            <br />让 AI 成为您工作中真正有用的工具
          </p>
          <p className="text-base font-light text-white/40 mt-12">Structured AI Workflows</p>
        </div>
      </div>
    </div>
  );
}
