import { redirect } from "next/navigation";
import { getUserSubscription } from "@/lib/subscription";
import { getWorkflowPreviews } from "@/lib/workflow-filter";
import WorkflowsListClient from "./WorkflowsListClient";

export default async function WorkflowsPage() {
  // 获取用户订阅信息
  const subscription = await getUserSubscription();

  // 未登录用户重定向到登录页
  if (!subscription) {
    redirect("/auth/signin");
  }

  // 服务端过滤：只发送用户有权限的工作流预览（不含 steps）
  const accessibleWorkflows = getWorkflowPreviews(subscription.tier, subscription.isAdmin);

  // 传递数据到客户端组件
  return (
    <WorkflowsListClient
      workflows={accessibleWorkflows}
      userTier={subscription.tier}
      isAdmin={subscription.isAdmin}
    />
  );
}
