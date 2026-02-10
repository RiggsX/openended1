import { PayPalHttpClient, core } from "@paypal/paypal-server-sdk";

if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
  throw new Error("PayPal credentials are not set");
}

const environment =
  process.env.NODE_ENV === "production"
    ? new core.LiveEnvironment(
        process.env.PAYPAL_CLIENT_ID,
        process.env.PAYPAL_CLIENT_SECRET
      )
    : new core.SandboxEnvironment(
        process.env.PAYPAL_CLIENT_ID,
        process.env.PAYPAL_CLIENT_SECRET
      );

export const paypalClient = new PayPalHttpClient(environment);

// PayPal Plan IDs (create these in PayPal Dashboard)
export const PAYPAL_PLANS = {
  core_monthly: process.env.PAYPAL_PLAN_CORE_MONTHLY!,
  core_yearly: process.env.PAYPAL_PLAN_CORE_YEARLY!,
  plus_monthly: process.env.PAYPAL_PLAN_PLUS_MONTHLY!,
  plus_yearly: process.env.PAYPAL_PLAN_PLUS_YEARLY!,
  pro_monthly: process.env.PAYPAL_PLAN_PRO_MONTHLY!,
  pro_yearly: process.env.PAYPAL_PLAN_PRO_YEARLY!,
};

export type SubscriptionTier = "core" | "plus" | "pro";
export type BillingInterval = "monthly" | "yearly";

export function getPlanId(tier: SubscriptionTier, interval: BillingInterval): string {
  const key = `${tier}_${interval}` as keyof typeof PAYPAL_PLANS;
  return PAYPAL_PLANS[key];
}
