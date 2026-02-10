import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface PayPalResource {
  id: string;
  plan_id: string;
  subscriber?: {
    payer_id?: string;
    email_address?: string;
  };
  start_time?: string;
  billing_info?: {
    next_billing_time?: string;
  };
}

interface PayPalEvent {
  event_type: string;
  resource: PayPalResource;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const event: PayPalEvent = JSON.parse(body);

    // TODO: Verify webhook signature with PayPal
    // const headersList = await headers();
    // const signature = headersList.get("paypal-transmission-sig");
    // Implement signature verification here

    const eventType = event.event_type;
    const resource = event.resource;

    switch (eventType) {
      case "BILLING.SUBSCRIPTION.ACTIVATED":
        await handleSubscriptionActivated(resource);
        break;
      case "BILLING.SUBSCRIPTION.CANCELLED":
        await handleSubscriptionCancelled(resource);
        break;
      case "BILLING.SUBSCRIPTION.SUSPENDED":
        await handleSubscriptionSuspended(resource);
        break;
      case "BILLING.SUBSCRIPTION.EXPIRED":
        await handleSubscriptionExpired(resource);
        break;
      case "BILLING.SUBSCRIPTION.UPDATED":
        await handleSubscriptionUpdated(resource);
        break;
      default:
        console.warn(`Unhandled event type: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("PayPal webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

async function handleSubscriptionActivated(resource: PayPalResource) {
  const subscriptionId = resource.id;
  const planId = resource.plan_id;
  const payerId = resource.subscriber?.payer_id;
  const startTime = new Date(resource.start_time || Date.now());
  const nextBillingTime = new Date(resource.billing_info?.next_billing_time || Date.now());

  // Extract tier and interval from plan_id or custom_id
  // You'll need to map plan IDs to tiers
  const tier = extractTierFromPlanId(planId);
  const interval = extractIntervalFromPlanId(planId);

  // Find user by email or custom_id
  const email = resource.subscriber?.email_address;
  if (!email) {
    console.error("No email found for subscription:", subscriptionId);
    return;
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    console.error("User not found for subscription:", subscriptionId);
    return;
  }

  await prisma.subscription.create({
    data: {
      userId: user.id,
      paypalSubscriptionId: subscriptionId,
      paypalPlanId: planId,
      paypalPayerId: payerId,
      tier,
      interval,
      status: "active",
      currentPeriodStart: startTime,
      currentPeriodEnd: nextBillingTime,
    },
  });
}

async function handleSubscriptionCancelled(resource: PayPalResource) {
  await prisma.subscription.update({
    where: { paypalSubscriptionId: resource.id },
    data: {
      status: "canceled",
      cancelAtPeriodEnd: true,
    },
  });
}

async function handleSubscriptionSuspended(resource: PayPalResource) {
  await prisma.subscription.update({
    where: { paypalSubscriptionId: resource.id },
    data: { status: "suspended" },
  });
}

async function handleSubscriptionExpired(resource: PayPalResource) {
  await prisma.subscription.update({
    where: { paypalSubscriptionId: resource.id },
    data: { status: "expired" },
  });
}

async function handleSubscriptionUpdated(resource: PayPalResource) {
  const nextBillingTime = resource.billing_info?.next_billing_time;
  
  await prisma.subscription.update({
    where: { paypalSubscriptionId: resource.id },
    data: {
      currentPeriodEnd: nextBillingTime ? new Date(nextBillingTime) : undefined,
    },
  });
}

function extractTierFromPlanId(planId: string): string {
  // Map your PayPal plan IDs to tiers
  // This is a placeholder - adjust based on your actual plan IDs
  if (planId.includes("core")) return "core";
  if (planId.includes("plus")) return "plus";
  if (planId.includes("pro")) return "pro";
  return "core";
}

function extractIntervalFromPlanId(planId: string): string {
  if (planId.includes("yearly") || planId.includes("annual")) return "yearly";
  return "monthly";
}
