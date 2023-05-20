import React from "react";

export const Minefield = () => {
  const [gameData, setGameData] = React.useState([
    [
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
    ],
    [
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
    ],
    [
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
    ],
    [
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
    ],
    [
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
    ],
    [
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
    ],
    [
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
    ],
    [
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
    ],
    [
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
      { value: 0, hidden: true },
    ],
  ]);
  const numBombs = 10;

  const getGameData = () => {
    const GameData: typeof gameData = [];

    for (let rowIndex in gameData) {
      const row = [...gameData[rowIndex]];
      GameData.push(row);
    }

    return GameData;
  };

  const getNumBombsAround = (row: number, col: number) => {
    let numBombs = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (
          i != -1 &&
          j != -1 &&
          !(j === col && i === row) &&
          i < gameData.length &&
          j < gameData[0].length
        ) {
          if (gameData[i][j].value === -1) numBombs++;
        }
      }
    }

    return numBombs;
  };

  const getBoardFilled = () => {
    const newGameData = getGameData();

    for (let i = 0; i < numBombs; i++) {
      const row = Math.floor(Math.random() * newGameData.length);
      const col = Math.floor(Math.random() * newGameData[0].length);
      newGameData[row][col].value = -1;
    }

    for (let row = 0; row < gameData.length; row++) {
      for (let col = 0; col < gameData[0].length; col++) {
        if (newGameData[row][col].value !== -1)
          newGameData[row][col].value = getNumBombsAround(row, col);
      }
    }

    return newGameData;
  };

  const handleOnClick = (row: number, col: number) => {
    const newGameData = getGameData();

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i != -1 && j != -1 && i < newGameData.length && j < newGameData[0].length)
          newGameData[i][j].hidden = false;
      }
    }

    setGameData(newGameData);
  };

  React.useEffect(() => {
    const newGameData = getBoardFilled();
    setGameData(newGameData);
  }, []);

  return (
    <React.Fragment>
      <div className="grid grid-cols-9 grid-rows-9 w-auto h-auto bg-blue-200 rounded-lg">
        {gameData.map((array, row) =>
          array.map((obj, col) => (
            <p
              onClick={() => {
                handleOnClick(row, col);
              }}
              key={`${obj}${col}`}
              className="flex items-center justify-center w-5 h-5 m-1 p-4 
              md:w-16 md:h-16 md:m-2 md:p-2 hover:cursor-pointer hover:bg-blue-300 leading-3 
              tracking-widest ring-1 ring-gray-700 select-none"
            >
              {obj.hidden ? "" : obj.value === -1 ? "💣" : obj.value}
            </p>
          ))
        )}
      </div>
    </React.Fragment>
  );
};
