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
      to: ["riggs787@outlook.com"],
      subject: "您的登录验证码 - OPENENDED",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="560" cellpadding="0" cellspacing="0" border="0" style="background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 48px 40px; text-align: center;">
                        <div style="font-size: 28px; font-weight: 200; letter-spacing: 2px; color: #ffffff; margin-bottom: 12px;">OPENENDED</div>
                        <div style="font-size: 13px; font-weight: 300; letter-spacing: 1px; color: rgba(255, 255, 255, 0.6); text-transform: uppercase;">Structured AI Workflows</div>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 48px 40px;">
                        <div style="font-size: 15px; color: #666; margin-bottom: 24px;">您好，</div>
                        <div style="font-size: 15px; color: #333; margin-bottom: 32px; line-height: 1.8;">
                          用户 <strong>${email}</strong> 正在登录 OPENENDED。<br>
                          请使用以下验证码完成登录验证。
                        </div>
                        
                        <!-- Code Section -->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 32px 0;">
                          <tr>
                            <td style="background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%); border: 1px solid #e8e8e8; border-radius: 12px; padding: 32px; text-align: center;">
                              <div style="font-size: 11px; font-weight: 500; letter-spacing: 1.5px; color: #999; text-transform: uppercase; margin-bottom: 16px;">验证码</div>
                              <div style="font-size: 32px; font-weight: 400; letter-spacing: 8px; color: #000; font-family: 'SF Mono', Monaco, 'Courier New', monospace; margin: 8px 0;">${code}</div>
                              <div style="font-size: 13px; color: #999; margin-top: 16px;">请在登录页面输入此验证码</div>
                            </td>
                          </tr>
                        </table>
                        
                        <div style="text-align: center; font-size: 13px; color: #666; margin: 24px 0; padding: 16px; background: rgba(0, 0, 0, 0.02); border-radius: 8px;">
                          ⏱ 验证码有效期为 <strong>10 分钟</strong>
                        </div>
                        
                        <!-- Welcome Button -->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 32px 0;">
                          <tr>
                            <td align="center">
                              <a href="http://localhost:3000/welcome" style="display: inline-block; background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: #ffffff; text-decoration: none; padding: 16px 48px; border-radius: 8px; font-size: 15px; font-weight: 500; letter-spacing: 0.5px; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2);">
                                欢迎来到 OPENENDED
                              </a>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Security Notice -->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 32px 0;">
                          <tr>
                            <td style="background: linear-gradient(135deg, #fffbf0 0%, #fff8e6 100%); border-left: 3px solid #ffa500; padding: 20px; border-radius: 8px;">
                              <div style="font-size: 13px; font-weight: 600; color: #cc8400; margin-bottom: 8px;">🔒 安全提示</div>
                              <div style="font-size: 13px; color: #996300; line-height: 1.6;">
                                如果这不是您本人的操作，请忽略此邮件。<br>
                                请勿将验证码分享给任何人，OPENENDED 不会主动索要您的验证码。
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 32px 40px; background: #fafafa; border-top: 1px solid #e8e8e8; text-align: center;">
                        <div style="font-size: 12px; color: #999; line-height: 1.8;">
                          此邮件由 OPENENDED 系统自动发送，请勿直接回复。<br>
                          如有疑问，请访问我们的网站或联系客服团队。
                        </div>
                        <div style="font-size: 11px; font-weight: 500; letter-spacing: 1px; color: #ccc; text-transform: uppercase; margin-top: 16px;">© 2026 OPENENDED</div>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
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
