import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 生成 6 位验证码
function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // 生成验证码
    const code = generateCode();
    const expires = new Date(Date.now() + 10 * 60 * 1000); // 10分钟有效

    // 查找或创建用户
    let user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      // 自动创建新用户
      user = await prisma.user.create({
        data: {
          email: email.toLowerCase(),
          name: email.split("@")[0],
          tier: "free",
          role: "user",
        },
      });
    }

    // 保存验证码到数据库
    await prisma.verificationToken.upsert({
      where: {
        identifier_token: {
          identifier: email.toLowerCase(),
          token: code,
        },
      },
      create: {
        identifier: email.toLowerCase(),
        token: code,
        expires,
      },
      update: {
        expires,
      },
    });

    // TODO: 发送邮件（暂时在控制台打印）
    // eslint-disable-next-line no-console
    console.log(`\n=== 验证码 ===`);
    // eslint-disable-next-line no-console
    console.log(`邮箱: ${email}`);
    // eslint-disable-next-line no-console
    console.log(`验证码: ${code}`);
    // eslint-disable-next-line no-console
    console.log(`有效期: 10分钟`);
    // eslint-disable-next-line no-console
    console.log(`===============\n`);

    // 开发环境：返回验证码（生产环境删除这行）
    if (process.env.NODE_ENV === "development") {
      return NextResponse.json({
        success: true,
        message: "Verification code sent",
        devCode: code, // 仅开发环境
      });
    }

    return NextResponse.json({
      success: true,
      message: "Verification code sent to your email",
    });
  } catch (error) {
    console.error("Send code error:", error);
    return NextResponse.json({ error: "Failed to send code" }, { status: 500 });
  }
}
