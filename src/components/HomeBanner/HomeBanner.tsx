import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { GameListPopUp } from "../GameListPopUp/GameListPopUp";

export const HomeBanner = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenPopUp = () => setOpen(!open);

  return (
    <React.Fragment>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            Bem vindo ao Game Hub !!
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            Uma plataforma de jogos web para você jogar e se divertir sozinho ou com seu amigo.
          </Typography>
        </div>
        <div className="flex flex-row justify-center gap-2">
          <Button size="lg" color="white" onClick={handleOpenPopUp}>
            Jogar
          </Button>
          <Button
            size="lg"
            color="white"
            variant="text"
            onClick={() => {
              window.open("https://github.com/MarcosVini9999/game-hub", "_blank");
            }}
          >
            Repositório
          </Button>
        </div>
      </div>
      <GameListPopUp open={open} onOpen={handleOpenPopUp} />
    </React.Fragment>
  );
};
