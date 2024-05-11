import { DefaultJWT } from "next-auth/jwt";
import { type DefaultSession } from "next-auth";
import { UserRole } from "@prisma/client";

declare module "next-auth" {
  export interface Session {
    user: {
      role: "ADMIN" | "USER";
      isTwoFactorEnabled: boolean;
      isOAuth: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: "ADMIN" | "USER";
    isTwoFactorEnabled: boolean;
    isOAuth: boolean;
  }
}

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
};
