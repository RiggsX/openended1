import { workflowData } from "./workflow-data";
import type { UserTier } from "./subscription";

const TIER_HIERARCHY: Record<UserTier, number> = {
  free: 0,
  core: 1,
  plus: 2,
  pro: 3,
};

/**
 * 根据用户层级过滤工作流
 * 只返回用户有权限访问的工作流
 */
export function filterWorkflowsByTier(userTier: UserTier, isAdmin: boolean) {
  // 管理员可以访问所有工作流
  if (isAdmin) {
    return workflowData;
  }

  const userLevel = TIER_HIERARCHY[userTier];
  const filtered: typeof workflowData = {};

  for (const [key, workflow] of Object.entries(workflowData)) {
    const workflowLevel = TIER_HIERARCHY[workflow.tier.toLowerCase() as UserTier];

    // 只包含用户有权限的工作流
    if (userLevel >= workflowLevel) {
      filtered[key] = workflow;
    }
  }

  return filtered;
}

/**
 * 获取工作流预览（不包含 steps）
 * 用于列表页，减少数据传输
 */
export function getWorkflowPreviews(userTier: UserTier, isAdmin: boolean) {
  const accessibleWorkflows = filterWorkflowsByTier(userTier, isAdmin);
  const previews: Record<string, Omit<(typeof workflowData)[string], "steps">> = {};

  for (const [key, workflow] of Object.entries(accessibleWorkflows)) {
    const { steps: _steps, ...preview } = workflow;
    previews[key] = preview;
  }

  return previews;
}

/**
 * 获取单个工作流（包含完整 steps）
 * 服务端验证权限后使用
 */
export function getWorkflowById(id: string, userTier: UserTier, isAdmin: boolean) {
  const workflow = workflowData[id];

  if (!workflow) {
    return null;
  }

  // 管理员可以访问所有
  if (isAdmin) {
    return workflow;
  }

  // 检查权限
  const userLevel = TIER_HIERARCHY[userTier];
  const workflowLevel = TIER_HIERARCHY[workflow.tier.toLowerCase() as UserTier];

  if (userLevel >= workflowLevel) {
    return workflow;
  }

  return null;
}
