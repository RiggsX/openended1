import { redirect } from "next/navigation";
import { getUserSubscription } from "@/lib/subscription";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  // 获取用户订阅信息
  const subscription = await getUserSubscription();

  // 未登录用户重定向到登录页
  if (!subscription) {
    redirect("/auth/signin");
  }

  // 传递数据到客户端组件
  return (
    <DashboardClient
      user={subscription.user}
      tier={subscription.tier}
      isAdmin={subscription.isAdmin}
      hasActiveSubscription={subscription.hasActiveSubscription}
      subscription={subscription.subscription}
    />
  );
}
