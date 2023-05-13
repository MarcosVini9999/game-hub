import React from "react";
import { SiteLayout } from "@/components";
import { GameContext } from "@/contexts/gameContext";

export const App = () => {
  const { game } = React.useContext(GameContext);

  return (
    <React.Fragment>
      <SiteLayout>
        <div className="mt-auto mb-auto">
          <h1>{game}</h1>
        </div>
      </SiteLayout>
    </React.Fragment>
  );
};
