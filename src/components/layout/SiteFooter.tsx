import React from "react";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="mx-auto">
      <div className="flex flex-row justify-center">
        <a
          href="https://github.com/MarcosVini9999"
          target="_blank"
          className="m-2 p-2 rounded-sm hover:ring-1 hover:ring-gray-300"
        >
          <img src="/img/logo-github.svg" alt="github_logo" className="h-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcosvinciusandradedesousa/"
          target="_blank"
          className="m-2 p-2 rounded-sm hover:ring-1 hover:ring-gray-300"
        >
          <img src="/img/logo-linkedin.svg" alt="github_logo" className="h-10" />
        </a>
      </div>
      <div className="flex items-center flex-col justify-center font-mono">
        <p className="opacity-60">Developed by</p>
        <p className="opacity-60 ">Marcos Vinicius</p>
      </div>
    </footer>
  );
};
