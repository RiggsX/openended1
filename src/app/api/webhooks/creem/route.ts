import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Verify webhook signature (Creem.io specific)
    // TODO: Add signature verification when Creem.io provides webhook secret

    const { event, data } = body;

    if (event === "payment.completed") {
      const { metadata } = data;
      const { userId, tier, interval } = metadata;

      // Calculate expiry date
      const now = new Date();
      const expiryDate = new Date(now);
      if (interval === "monthly") {
        expiryDate.setMonth(expiryDate.getMonth() + 1);
      } else {
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      }

      // Find user
      const user = await prisma.user.findUnique({
        where: { email: userId },
      });

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      // Create or update subscription
      await prisma.subscription.upsert({
        where: { userId: user.id },
        create: {
          userId: user.id,
          paypalSubscriptionId: data.id || `creem_${Date.now()}`,
          paypalPlanId: `${tier}_${interval}`,
          tier,
          interval,
          status: "active",
          currentPeriodStart: now,
          currentPeriodEnd: expiryDate,
        },
        update: {
          tier,
          interval,
          status: "active",
          currentPeriodStart: now,
          currentPeriodEnd: expiryDate,
        },
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
