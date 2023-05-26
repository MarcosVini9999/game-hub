import React from "react";
import { SiteFooter, SiteHeader } from "@/components";

interface SiteLayoutProps {
  children?: React.ReactNode;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col relative min-h-screen bg-blue-50">
      <React.Fragment>
        <SiteHeader />
        {children}
        <SiteFooter />
      </React.Fragment>
    </div>
  );
};
