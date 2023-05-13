import React from "react";

interface GameContextInfo {
  game: string;
  setGame: (game: string) => void;
}

interface GameProviderProps {
  children: React.ReactElement;
}

export const GameContext = React.createContext({} as GameContextInfo);

export const GameProvider = ({ children }: GameProviderProps) => {
  const [game, setGame] = React.useState("game hub");

  return <GameContext.Provider value={{ game, setGame }}>{children}</GameContext.Provider>;
};
