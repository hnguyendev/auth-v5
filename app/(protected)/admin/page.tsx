"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/user-current-role";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
  const role = useCurrentRole();

  const onApiRouteClick = () => {
    fetch("/api/admin").then((res) => {
      if (res.ok) {
        toast.success("Success xdd");
      } else {
        toast.error("BRUH");
      }
    });
  };
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.success) {
        toast.success(data.success);
      }

      if (data.error) {
        toast.error(data.error);
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin 🔑</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="Allowed to see this content" />
        </RoleGate>
        <div
          onClick={onApiRouteClick}
          className="flex items-center justify-between rounded-lg border p-3 shadow-md"
        >
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button>Click to test</Button>
        </div>
        <div
          onClick={onServerActionClick}
          className="flex items-center justify-between rounded-lg border p-3 shadow-md"
        >
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
