import React from "react";
import { Hash, Minefield, Jokenpo, SiteLayout, HomeBanner } from "@/components";
import { GameContext } from "@/contexts/gameContext";
import { Button, Typography } from "@material-tailwind/react";

export const App = () => {
  const { game } = React.useContext(GameContext);

  return (
    <React.Fragment>
      <SiteLayout>
        <div className="m-auto">
          {Boolean(game) === false ? <HomeBanner /> : null}
          <div className="flex items-center justify-center">
            {game === "Jogo da Velha" ? <Hash /> : null}
            {game === "Campo Minado" ? <Minefield /> : null}
            {game === "Pedra, Papel ou Tesoura" ? <Jokenpo /> : null}
          </div>
        </div>
      </SiteLayout>
    </React.Fragment>
  );
};
