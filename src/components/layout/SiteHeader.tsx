import React from "react";
import { AboutPopUp, GameListPopUp } from "@/components";
import { Button } from "@material-tailwind/react";

export const SiteHeader: React.FC = () => {
  const [openGameList, setOpenGameList] = React.useState(false);
  const [openAbout, setOpenAbout] = React.useState(false);

  const handleOpenGameList = () => setOpenGameList(!openGameList);
  const handleOpenAbout = () => setOpenAbout(!openAbout);

  return (
    <header className="relative w-full p-2 md:flex md:flex-row">
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <a className="text-xl font-black" href={window.location.pathname}>
          GAME HUB🎮
        </a>
      </div>
      <nav className="w-full flex flex-row justify-center gap-1 md:w-2/3">
        <Button onClick={handleOpenGameList}>Jogar</Button>
        <Button onClick={handleOpenAbout}>Sobre</Button>
      </nav>
      <GameListPopUp open={openGameList} onOpen={handleOpenGameList} />
      <AboutPopUp open={openAbout} onOpen={handleOpenAbout} />
    </header>
  );
};
