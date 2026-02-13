import { redirect } from "next/navigation";
import { getUserSubscription } from "@/lib/subscription";
import { getWorkflowById } from "@/lib/workflow-filter";
import WorkflowDetailClient from "./WorkflowDetailClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkflowDetailPage({ params }: PageProps) {
  const { id } = await params;

  // 获取用户订阅信息
  const subscription = await getUserSubscription();

  // 未登录用户重定向到登录页
  if (!subscription) {
    redirect("/auth/signin");
  }

  // 服务端验证权限并获取工作流
  const workflow = getWorkflowById(id, subscription.tier, subscription.isAdmin);

  // 工作流不存在或无权限访问
  if (!workflow) {
    redirect("/dashboard/workflows");
  }

  // 传递数据到客户端组件
  return <WorkflowDetailClient workflow={workflow} isAdmin={subscription.isAdmin} />;
}
