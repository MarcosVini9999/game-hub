import React from "react";
import { SiteLayout } from "@/components";

export const App = () => {
  return (
    <React.Fragment>
      <SiteLayout>
        <h1 className="text-3xl font-bold underline">hello world</h1>
      </SiteLayout>
    </React.Fragment>
  );
};
