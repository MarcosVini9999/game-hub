import React from "react";
import { Button } from "@/components";
import { GameContext } from "@/contexts/gameContext";

export const SiteHeader: React.FC = () => {
  const { setGame } = React.useContext(GameContext);
  const Games = ["Jogo da Velha", "Campo Minado", "Pedra, Papel ou Tesoura"];

  return (
    <header className="relative w-full p-2 md:flex md:flex-row">
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <h1 className="text-xl font-black">GAME HUB🎮</h1>
      </div>
      <nav className="w-full flex flex-row justify-center gap-1 md:w-2/3">
        {Games.map((game) => (
          <Button
            className="bg-slate-300 font-thin"
            key={game}
            onClick={() => {
              setGame(game);
            }}
          >
            {game}
          </Button>
        ))}
      </nav>
    </header>
  );
};
