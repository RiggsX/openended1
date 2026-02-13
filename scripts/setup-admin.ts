import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function setupAdmin() {
  const adminEmail = "Riggs787@outlook.com";

  try {
    // 查找或创建管理员用户
    let user = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (!user) {
      // 创建新用户
      user = await prisma.user.create({
        data: {
          email: adminEmail,
          name: "Riggs",
          role: "admin",
          tier: "pro",
          emailVerified: new Date(),
        },
      });
      console.log("✅ 创建管理员账号:", adminEmail);
    } else {
      // 更新现有用户
      user = await prisma.user.update({
        where: { email: adminEmail },
        data: {
          role: "admin",
          tier: "pro",
        },
      });
      console.log("✅ 更新管理员权限:", adminEmail);
    }

    console.log("\n管理员信息:");
    console.log("- Email:", user.email);
    console.log("- Role:", user.role);
    console.log("- Tier:", user.tier);
    console.log("\n🎉 管理员设置完成！");
  } catch (error) {
    console.error("❌ 错误:", error);
  } finally {
    await prisma.$disconnect();
  }
}

setupAdmin();
