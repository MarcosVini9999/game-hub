import React from "react";
import { Button } from "@/components";

export const Jokenpo = () => {
  const [gameData, setGameData] = React.useState({
    playerMove: "",
    robotMove: "",
  });
  const possibleMoves = ["pedra", "papel", "tesoura"];

  const handleOnPlay = (playerMove: string) => {
    const robotMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    const newGameData = {
      playerMove,
      robotMove,
    };

    setGameData(newGameData);
  };

  return (
    <React.Fragment>
      <div>
        <h1>Tabuleiro</h1>
        <h1>robô:{gameData.robotMove}</h1>
        <h1>player:{gameData.playerMove}</h1>
      </div>
      <div>
        {possibleMoves.map((move, index) => (
          <Button
            key={index}
            className="text-3xl w-24 h-24"
            onClick={() => {
              handleOnPlay(move);
            }}
          >
            {move === "pedra" ? "✊" : move === "papel" ? "🖐" : "✌"}
          </Button>
        ))}
      </div>
    </React.Fragment>
  );
};
