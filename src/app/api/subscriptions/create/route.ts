import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { paypalClient, getPlanId, SubscriptionTier, BillingInterval } from "@/lib/paypal";
import { orders } from "@paypal/paypal-server-sdk";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { tier, interval } = await req.json();
    
    if (!tier || !interval) {
      return NextResponse.json({ error: "Missing tier or interval" }, { status: 400 });
    }

    const planId = getPlanId(tier as SubscriptionTier, interval as BillingInterval);

    // Create PayPal subscription
    const request = new orders.SubscriptionsCreateRequest();
    request.requestBody({
      plan_id: planId,
      application_context: {
        brand_name: "OPENENDED",
        shipping_preference: "NO_SHIPPING",
        user_action: "SUBSCRIBE_NOW",
        return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/product?canceled=true`,
      },
    });

    const response = await paypalClient.execute(request);
    
    // Find approval URL
    const approvalUrl = response.result.links?.find(
      (link: { rel: string; href?: string }) => link.rel === "approve"
    )?.href;

    return NextResponse.json({
      subscriptionId: response.result.id,
      approvalUrl,
    });
  } catch (error) {
    console.error("PayPal subscription creation error:", error);
    return NextResponse.json(
      { error: "Failed to create subscription" },
      { status: 500 }
    );
  }
}
