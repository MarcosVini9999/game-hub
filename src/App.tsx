import React from "react";
import { Hash, Minefield, Jokenpo, SiteLayout, HomeBanner } from "@/components";
import { GameContext } from "@/contexts/gameContext";

export const App = () => {
  const { game } = React.useContext(GameContext);

  return (
    <React.Fragment>
      <SiteLayout>
        <React.Fragment>
          {Boolean(game) === false ? <HomeBanner /> : null}
          <React.Fragment>
            {game === "Jogo da Velha" ? <Hash /> : null}
            {game === "Campo Minado" ? <Minefield /> : null}
            {game === "Pedra, Papel ou Tesoura" ? <Jokenpo /> : null}
          </React.Fragment>
        </React.Fragment>
      </SiteLayout>
    </React.Fragment>
  );
};
