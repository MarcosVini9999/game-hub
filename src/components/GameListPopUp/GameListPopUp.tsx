import React from "react";
import { GameContext } from "@/contexts/gameContext";
import { PopUp } from "@/components";

interface GameListPopUpProps {
  open: boolean;
  onOpen: () => void;
}

export const GameListPopUp: React.FC<GameListPopUpProps> = ({ open, onOpen }) => {
  const { setGame } = React.useContext(GameContext);
  const games = ["Jogo da Velha", "Campo Minado", "Pedra, Papel ou Tesoura"];

  return (
    <PopUp
      open={open}
      onOpen={onOpen}
      title={"Selecione o jogo"}
      body={
        <ul>
          {games.map((game, index) => (
            <li
              onClick={() => {
                setGame(game);
                onOpen();
              }}
              key={index}
              className="hover:underline hover:cursor-pointer"
            >
              {game}
            </li>
          ))}
        </ul>
      }
    />
  );
};
