import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: 添加管理员权限检查
    // const user = await prisma.user.findUnique({
    //   where: { email: session.user.email },
    // });
    // if (!user?.isAdmin) {
    //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    // }

    const body = await req.json();
    const { title, description, tier, category, content, tags } = body;

    const workflow = await prisma.workflow.create({
      data: {
        title,
        description,
        tier,
        category,
        content,
        tags: tags || [],
        published: true,
      },
    });

    return NextResponse.json({ success: true, workflow });
  } catch (error) {
    console.error("Error creating workflow:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const tier = searchParams.get("tier");
    const category = searchParams.get("category");

    const workflows = await prisma.workflow.findMany({
      where: {
        published: true,
        ...(tier && { tier }),
        ...(category && { category }),
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ workflows });
  } catch (error) {
    console.error("Error fetching workflows:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
