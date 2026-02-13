import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

type Tier = "core" | "plus" | "pro";
type Interval = "monthly" | "yearly";

const PRICING = {
  core: { monthly: 19, yearly: 149 },
  plus: { monthly: 29, yearly: 199 },
  pro: { monthly: 49, yearly: 399 },
};

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { tier, interval } = (await req.json()) as {
      tier: Tier;
      interval: Interval;
    };

    if (!PRICING[tier] || !PRICING[tier][interval]) {
      return NextResponse.json({ error: "Invalid tier or interval" }, { status: 400 });
    }

    const _amount = PRICING[tier][interval]; // Will be used for creem.io integration
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001";

    // 临时方案：直接创建订阅（开发模式）
    // TODO: 集成真实支付网关
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 计算订阅结束时间
    const now = new Date();
    const endDate = new Date(now);
    if (interval === "monthly") {
      endDate.setMonth(endDate.getMonth() + 1);
    } else {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    // 创建或更新订阅
    const subscriptionId = `dev_${user.id}_${Date.now()}`;
    const subscription = await prisma.subscription.upsert({
      where: {
        paypalSubscriptionId: subscriptionId,
      },
      create: {
        userId: user.id,
        paypalSubscriptionId: subscriptionId,
        paypalPlanId: `${tier}_${interval}`,
        tier,
        interval,
        status: "active",
        currentPeriodStart: now,
        currentPeriodEnd: endDate,
      },
      update: {
        tier,
        interval,
        status: "active",
        currentPeriodStart: now,
        currentPeriodEnd: endDate,
      },
    });

    return NextResponse.json({
      success: true,
      message: "开发模式：订阅已激活",
      subscription,
      paymentUrl: `${appUrl}/payment/success?tier=${tier}&interval=${interval}`,
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
