import React from "react";

export const Hash = () => {
  const [gameData, setGameData] = React.useState({
    board: ["", "", "", "", "", "", "", "", ""],
    turn: true,
  });

  const handleTurn = (boardIndex: number) => {
    if (gameData.board[boardIndex] != "") return;

    setGameData((prev) => {
      const board = [...prev.board];
      const turn = !prev.turn;

      board[boardIndex] = !turn ? "X" : "O";

      return { board, turn };
    });
  };

  return (
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
  );
};
