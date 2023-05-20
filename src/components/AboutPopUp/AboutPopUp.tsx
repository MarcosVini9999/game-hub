import React from "react";
import { PopUp } from "@/components";

interface AboutPopUpProps {
  open: boolean;
  onOpen: () => void;
}

export const AboutPopUp: React.FC<AboutPopUpProps> = ({ open, onOpen }) => {
  return (
    <PopUp
      open={open}
      onOpen={onOpen}
      title={"Sobre este site"}
      body={
        <React.Fragment>
          <h1 className="text-xl font-black text-blue-700 mb-4">GAME HUB🎮</h1>
          <p className="mb-4">
            Site desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/marcosvinciusandradedesousa/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 underline"
            >
              Marcos Vinicius
            </a>{" "}
            para praticar lógica de programação com typescript utilizando as bibliotecas{" "}
            <span className="text-blue-500">React e Tailwind</span>.
          </p>
          <p>O gamehub conta com três jogos iniciais, o jokenpô, campo minado e jogo da velha</p>
        </React.Fragment>
      }
    />
  );
};
