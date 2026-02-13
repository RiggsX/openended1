const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkUser() {
  const user = await prisma.user.findUnique({
    where: { email: 'Riggs787@outlook.com' },
  });

  if (!user) {
    console.log('❌ 账户不存在，需要先注册');
    console.log('\n请访问 http://localhost:3000/auth/signin');
    console.log('点击 "Create Account" 注册账号');
    console.log('邮箱：Riggs787@outlook.com');
    console.log('密码：自己设置一个');
    console.log('\n注册后会自动获得管理员权限！');
  } else {
    console.log('✅ 账户已存在');
    console.log('\n账户信息：');
    console.log(`  邮箱: ${user.email}`);
    console.log(`  姓名: ${user.name || '未设置'}`);
    console.log(`  角色: ${user.role}`);
    console.log(`  层级: ${user.tier}`);
    console.log(`  创建时间: ${user.createdAt}`);
    
    if (user.role === 'admin') {
      console.log('\n🎉 你已经是管理员了！');
      console.log('登录后可以：');
      console.log('  ✅ 访问所有 90 个工作流');
      console.log('  ✅ 查看所有付费内容');
      console.log('  ✅ 控制台显示"管理员"标识');
    } else {
      console.log('\n⚠️  权限异常，正在修复...');
      await prisma.user.update({
        where: { email: 'Riggs787@outlook.com' },
        data: { role: 'admin', tier: 'pro' },
      });
      console.log('✅ 已修复为管理员权限');
    }
  }
  
  await prisma.$disconnect();
}

checkUser();
