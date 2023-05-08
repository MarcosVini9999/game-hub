import React from "react";
import { SiteFooter, SiteHeader } from "@/components";

interface SiteLayoutProps {
  children?: React.ReactNode;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <SiteHeader />
      {children}
      <SiteFooter />
    </React.Fragment>
  );
};
