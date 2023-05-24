import React from "react";
import { PopUp } from "../PopUp/PopUp";
import { Button } from "@material-tailwind/react";

export const Hash = () => {
  const [gameData, setGameData] = React.useState({
    board: ["", "", "", "", "", "", "", "", ""],
    turn: true,
  });
  const [winner, setWinner] = React.useState("");
  const [openPopUp, setOpenPopUp] = React.useState(false);
  const possibleWinners = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let combination of possibleWinners) {
      if (
        gameData.board[combination[0]] === "X" &&
        gameData.board[combination[1]] === "X" &&
        gameData.board[combination[2]] === "X"
      ) {
        const winner = "❌";
        setOpenPopUp(true);
        setWinner(winner);
      }
      if (
        gameData.board[combination[0]] === "O" &&
        gameData.board[combination[1]] === "O" &&
        gameData.board[combination[2]] === "O"
      ) {
        const winner = "⭕";
        setOpenPopUp(true);
        setWinner(winner);
      }
    }
  };

  React.useEffect(() => {
    checkWinner();
  }, [gameData]);

  const handleTurn = (boardIndex: number) => {
    if (gameData.board[boardIndex] != "") return;

    setGameData((prev) => {
      const board = [...prev.board];
      const turn = !prev.turn;

      board[boardIndex] = !turn ? "X" : "O";

      return { ...prev, board, turn };
    });
  };

  const restartFunction = () => {
    setGameData({
      board: ["", "", "", "", "", "", "", "", ""],
      turn: true,
    });
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 grid-rows-3 w-72 h-72 bg-blue-200 rounded-lg">
        {gameData.board.map((value, index) => (
          <p
            key={index}
            className="flex items-center justify-center m-2 hover:cursor-pointer hover:bg-blue-300 font-bold text-2xl"
            onClick={() => {
              handleTurn(index);
            }}
          >
            {value === "X" ? "❌" : value === "O" ? "⭕" : ""}
          </p>
        ))}
      </div>
      <PopUp
        open={openPopUp}
        onOpen={() => setOpenPopUp(!openPopUp)}
        title={"FIM"}
        body={<h1>VENCEDOR: {winner}</h1>}
        extraButtonFunction={restartFunction}
        extraButtonLabel="Reiniair"
      />
      <Button variant="text" color="blue" onClick={restartFunction} className="mr-1 m-5">
        Reiniair
      </Button>
    </div>
  );
};
