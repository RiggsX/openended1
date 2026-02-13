import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export type UserTier = "free" | "core" | "plus" | "pro";
export type WorkflowTier = "Core" | "Plus" | "Pro";

// 管理员邮箱列表（不区分大小写）
const ADMIN_EMAILS = ["riggs787@outlook.com"];

// 层级权限映射
const TIER_HIERARCHY: Record<UserTier, number> = {
  free: 0,
  core: 1,
  plus: 2,
  pro: 3,
};

/**
 * 获取当前用户的订阅信息
 */
export async function getUserSubscription() {
  const session = await auth();

  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      subscriptions: {
        where: {
          status: "active",
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      },
    },
  });

  if (!user) {
    return null;
  }

  // 管理员拥有所有权限（不区分大小写）
  if (ADMIN_EMAILS.includes(user.email?.toLowerCase() || "")) {
    return {
      user,
      tier: "pro" as UserTier,
      isAdmin: true,
      hasActiveSubscription: true,
      subscription: user.subscriptions[0] || null,
    };
  }

  // 检查是否有活跃订阅
  const activeSubscription = user.subscriptions[0];
  const tier = activeSubscription
    ? (activeSubscription.tier as UserTier)
    : (user.tier as UserTier) || "free";

  return {
    user,
    tier,
    isAdmin: false,
    hasActiveSubscription: !!activeSubscription,
    subscription: activeSubscription || null,
  };
}

/**
 * 检查用户是否可以访问特定层级的工作流
 */
export async function canAccessWorkflow(workflowTier: WorkflowTier): Promise<boolean> {
  const subscription = await getUserSubscription();

  if (!subscription) {
    return false; // 未登录用户无法访问
  }

  // 管理员可以访问所有内容
  if (subscription.isAdmin) {
    return true;
  }

  const userTierLevel = TIER_HIERARCHY[subscription.tier];
  const workflowTierLevel = TIER_HIERARCHY[workflowTier.toLowerCase() as UserTier];

  return userTierLevel >= workflowTierLevel;
}

/**
 * 检查用户是否是管理员
 */
export async function isAdmin(): Promise<boolean> {
  const session = await auth();
  if (!session?.user?.email) {
    return false;
  }
  return ADMIN_EMAILS.includes(session.user.email?.toLowerCase() || "");
}

/**
 * 获取用户可访问的工作流层级
 */
export function getAccessibleTiers(userTier: UserTier): WorkflowTier[] {
  const level = TIER_HIERARCHY[userTier];
  const tiers: WorkflowTier[] = [];

  if (level >= TIER_HIERARCHY.core) tiers.push("Core");
  if (level >= TIER_HIERARCHY.plus) tiers.push("Plus");
  if (level >= TIER_HIERARCHY.pro) tiers.push("Pro");

  return tiers;
}

/**
 * 更新用户订阅层级
 */
export async function updateUserTier(userId: string, tier: UserTier) {
  return await prisma.user.update({
    where: { id: userId },
    data: { tier },
  });
}
