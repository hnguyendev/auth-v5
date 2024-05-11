"use client";

import { useCurrentRole } from "@/hooks/user-current-role";
import { UserRole } from "@prisma/client";
import { FC } from "react";
import { FormError } from "../form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate: FC<RoleGateProps> = ({ children, allowedRole }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <FormError message="Do not have permission" />;
  }

  return <>{children}</>;
};
