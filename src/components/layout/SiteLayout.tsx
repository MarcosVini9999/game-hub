import React from "react";
import { SiteFooter, SiteHeader } from "@/components";

interface SiteLayoutProps {
  children?: React.ReactNode;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <main className="relative min-h-screen flex flex-col">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
};
