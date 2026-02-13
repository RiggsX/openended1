const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function debug() {
  const user = await prisma.user.findUnique({
    where: { email: 'Riggs787@outlook.com' },
    include: {
      subscriptions: true,
    },
  });

  console.log('=== 数据库中的用户信息 ===');
  console.log(JSON.stringify(user, null, 2));
  
  await prisma.$disconnect();
}

debug();
