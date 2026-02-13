import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendVerificationCodeParams {
  email: string;
  code: string;
}

export async function sendVerificationCode({ email, code }: SendVerificationCodeParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: "OPENENDED <onboarding@resend.dev>",
      to: ["riggs787@outlook.com"], // Resend 测试模式只能发到注册邮箱
      subject: "您的登录验证码 - OPENENDED",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
                line-height: 1.6;
                color: #1a1a1a;
                background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
                padding: 40px 20px;
              }
              .container {
                max-width: 560px;
                margin: 0 auto;
                background: #ffffff;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
              }
              .header {
                background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
                padding: 48px 40px;
                text-align: center;
              }
              .logo-container {
                margin-bottom: 12px;
              }
              .logo-table {
                margin: 0 auto;
              }
              .logo-svg {
                width: 40px;
                height: 40px;
                display: block;
              }
              .logo-text {
                font-size: 28px;
                font-weight: 200;
                letter-spacing: 2px;
                color: #ffffff;
                padding-left: 16px;
                vertical-align: middle;
              }
              .tagline {
                font-size: 13px;
                font-weight: 300;
                letter-spacing: 1px;
                color: rgba(255, 255, 255, 0.6);
                text-transform: uppercase;
              }
              .content {
                padding: 48px 40px;
              }
              .greeting {
                font-size: 15px;
                font-weight: 400;
                color: #666;
                margin-bottom: 24px;
              }
              .message {
                font-size: 15px;
                color: #333;
                margin-bottom: 32px;
                line-height: 1.8;
              }
              .code-section {
                background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
                border: 1px solid #e8e8e8;
                border-radius: 12px;
                padding: 32px;
                text-align: center;
                margin: 32px 0;
                position: relative;
                overflow: hidden;
              }
              .code-section::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent);
              }
              .code-label {
                font-size: 11px;
                font-weight: 500;
                letter-spacing: 1.5px;
                color: #999;
                text-transform: uppercase;
                margin-bottom: 16px;
              }
              .code {
                font-size: 42px;
                font-weight: 300;
                letter-spacing: 12px;
                color: #000;
                font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
                margin: 8px 0;
              }
              .code-hint {
                font-size: 13px;
                color: #999;
                margin-top: 16px;
                font-weight: 300;
              }
              .expiry {
                text-align: center;
                font-size: 13px;
                color: #666;
                margin: 24px 0;
                padding: 16px;
                background: rgba(0, 0, 0, 0.02);
                border-radius: 8px;
              }
              .security-notice {
                background: linear-gradient(135deg, #fffbf0 0%, #fff8e6 100%);
                border-left: 3px solid #ffa500;
                padding: 20px;
                border-radius: 8px;
                margin: 32px 0;
              }
              .security-notice-title {
                font-size: 13px;
                font-weight: 600;
                color: #cc8400;
                margin-bottom: 8px;
                display: flex;
                align-items: center;
              }
              .security-notice-text {
                font-size: 13px;
                color: #996300;
                line-height: 1.6;
              }
              .footer {
                padding: 32px 40px;
                background: #fafafa;
                border-top: 1px solid #e8e8e8;
                text-align: center;
              }
              .footer-text {
                font-size: 12px;
                color: #999;
                line-height: 1.8;
              }
              .footer-brand {
                font-size: 11px;
                font-weight: 500;
                letter-spacing: 1px;
                color: #ccc;
                text-transform: uppercase;
                margin-top: 16px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo-container">
                  <table class="logo-table" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <svg class="logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M 3 13.5 Q 9 10.5, 14 13.5 Q 19 16.5, 24 13.5 Q 29 10.5, 34 13.5"
                            stroke="rgba(255,255,255,0.68)"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                          />
                          <path
                            d="M 3 20 Q 9 17, 14 20 Q 19 23, 24 20 Q 29 17, 34 20"
                            stroke="rgba(255,255,255,0.88)"
                            stroke-width="2.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                          />
                          <path
                            d="M 3 26.5 Q 9 23.5, 14 26.5 Q 19 29.5, 24 26.5 Q 29 23.5, 34 26.5"
                            stroke="rgba(255,255,255,1)"
                            stroke-width="2.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                          />
                          <line x1="34" y1="13.5" x2="39" y2="13.5" stroke="rgba(255,255,255,0.4)" stroke-width="1.8" stroke-linecap="round"/>
                          <line x1="34" y1="20" x2="39" y2="20" stroke="rgba(255,255,255,0.6)" stroke-width="2.3" stroke-linecap="round"/>
                          <line x1="34" y1="26.5" x2="39" y2="26.5" stroke="rgba(255,255,255,0.8)" stroke-width="2.8" stroke-linecap="round"/>
                        </svg>
                      </td>
                      <td class="logo-text">OPENENDED</td>
                    </tr>
                  </table>
                </div>
                <div class="tagline">Structured AI Workflows</div>
              </div>
              
              <div class="content">
                <div class="greeting">您好，</div>
                
                <div class="message">
                  用户 <strong>${email}</strong> 正在登录 OPENENDED。<br>
                  请使用以下验证码完成登录验证。
                </div>
                
                <div class="code-section">
                  <div class="code-label">验证码</div>
                  <div class="code">${code}</div>
                  <div class="code-hint">请在登录页面输入此验证码</div>
                </div>
                
                <div class="expiry">
                  ⏱ 验证码有效期为 <strong>10 分钟</strong>
                </div>
                
                <div class="security-notice">
                  <div class="security-notice-title">
                    🔒 安全提示
                  </div>
                  <div class="security-notice-text">
                    如果这不是您本人的操作，请忽略此邮件。<br>
                    请勿将验证码分享给任何人，OPENENDED 不会主动索要您的验证码。
                  </div>
                </div>
              </div>
              
              <div class="footer">
                <div class="footer-text">
                  此邮件由 OPENENDED 系统自动发送，请勿直接回复。<br>
                  如有疑问，请访问我们的网站或联系客服团队。
                </div>
                <div class="footer-brand">© 2026 OPENENDED</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Send email error:", error);
    return { success: false, error };
  }
}
