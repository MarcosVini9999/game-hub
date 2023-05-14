import React from "react";
import { Hash, Minefield, RockPaperScissors, SiteLayout } from "@/components";
import { GameContext } from "@/contexts/gameContext";

export const App = () => {
  const { game } = React.useContext(GameContext);

  return (
    <React.Fragment>
      <SiteLayout>
        <div className="m-auto">
          {game === "Jogo da Velha" ? <Hash /> : null}
          {game === "Campo Minado" ? <Minefield /> : null}
          {game === "Pedra, Papel ou Tesoura" ? <RockPaperScissors /> : null}
        </div>
      </SiteLayout>
    </React.Fragment>
  );
};
