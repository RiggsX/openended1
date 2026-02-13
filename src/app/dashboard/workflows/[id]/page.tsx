import { redirect } from "next/navigation";
import { getUserSubscription, canAccessWorkflow } from "@/lib/subscription";
import { workflowData } from "@/lib/workflow-data";
import WorkflowDetailClient from "./WorkflowDetailClient";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function WorkflowDetailPage({ params }: PageProps) {
  const { id } = params;
  const workflow = workflowData[id];

  // 检查工作流是否存在
  if (!workflow) {
    redirect("/dashboard/workflows");
  }

  // 获取用户订阅信息
  const subscription = await getUserSubscription();

  // 未登录用户重定向到登录页
  if (!subscription) {
    redirect("/auth/signin");
  }

  // 检查用户是否有权限访问此工作流
  const hasAccess = await canAccessWorkflow(workflow.tier);

  // 传递数据到客户端组件
  return (
    <WorkflowDetailClient
      workflow={workflow}
      hasAccess={hasAccess}
      userTier={subscription.tier}
      isAdmin={subscription.isAdmin}
    />
  );
}
