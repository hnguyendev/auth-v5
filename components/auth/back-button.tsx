"use client";
import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton: FC<BackButtonProps> = ({ label, href }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
