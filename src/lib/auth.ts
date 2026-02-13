import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Don't use PrismaAdapter with Credentials - JWT only
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        code: { label: "Code", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.code) {
          return null;
        }

        const email = credentials.email as string;
        const code = credentials.code as string;

        // 验证验证码
        const verification = await prisma.verificationToken.findFirst({
          where: {
            identifier: email.toLowerCase(),
            token: code,
            expires: {
              gt: new Date(),
            },
          },
        });

        if (!verification) {
          return null;
        }

        // 验证成功，删除验证码
        await prisma.verificationToken.delete({
          where: {
            identifier_token: {
              identifier: email.toLowerCase(),
              token: code,
            },
          },
        });

        // 查找用户
        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
        });

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
        const subscription = await prisma.subscription.findFirst({
          where: {
            userId: token.id as string,
            status: "active",
          },
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (session.user as any).subscription = subscription;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
});
