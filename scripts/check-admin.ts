import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function checkAdmin() {
  const user = await prisma.user.findUnique({
    where: { email: "Riggs787@outlook.com" },
    include: {
      subscriptions: true,
    },
  });

  console.log("管理员信息：");
  console.log(JSON.stringify(user, null, 2));

  await prisma.$disconnect();
}

checkAdmin();
