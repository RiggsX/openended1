const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function setAdmin() {
  const adminEmail = 'Riggs787@outlook.com';
  
  try {
    // 查找用户
    const user = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (!user) {
      console.log(`❌ 用户 ${adminEmail} 不存在`);
      console.log('请先注册账号');
      return;
    }

    // 更新为管理员
    const updated = await prisma.user.update({
      where: { email: adminEmail },
      data: {
        role: 'admin',
        tier: 'pro',
      },
    });

    console.log('✅ 管理员权限设置成功！');
    console.log('用户信息：');
    console.log(`  邮箱: ${updated.email}`);
    console.log(`  角色: ${updated.role}`);
    console.log(`  层级: ${updated.tier}`);
    console.log(`  ID: ${updated.id}`);
  } catch (error) {
    console.error('❌ 设置失败:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

setAdmin();
