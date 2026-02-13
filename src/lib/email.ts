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
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .container {
                background: #ffffff;
                border-radius: 8px;
                padding: 40px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              }
              .logo {
                font-size: 24px;
                font-weight: 300;
                letter-spacing: -0.5px;
                margin-bottom: 30px;
                color: #000;
              }
              .code-box {
                background: #f5f5f5;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                padding: 20px;
                text-align: center;
                margin: 30px 0;
              }
              .code {
                font-size: 36px;
                font-weight: 600;
                letter-spacing: 8px;
                color: #000;
                font-family: 'Courier New', monospace;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                font-size: 14px;
                color: #666;
              }
              .warning {
                background: #fff3cd;
                border-left: 4px solid #ffc107;
                padding: 12px;
                margin: 20px 0;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
      <div class="logo">OPENENDED</div>
              
              <h2 style="margin-bottom: 20px; font-weight: 300;">您的登录验证码</h2>
              
              <p>您好，</p>
              <p>用户 <strong>${email}</strong> 正在登录 OPENENDED。请使用以下验证码完成登录：</p>
              
              <div class="code-box">
                <div class="code">${code}</div>
              </div>
              
              <p style="text-align: center; color: #666; font-size: 14px;">
                验证码有效期为 <strong>10 分钟</strong>
              </p>
              
              <div class="warning">
                <strong>⚠️ 安全提示：</strong> 如果这不是您本人的操作，请忽略此邮件。请勿将验证码分享给任何人。
              </div>
              
              <div class="footer">
                <p>此邮件由 OPENENDED 自动发送，请勿回复。</p>
                <p>如有疑问，请访问我们的网站或联系客服。</p>
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
