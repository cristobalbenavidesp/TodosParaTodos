import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function NavBar() {
  const { scrollToSection, refs } = useContext(AppContext);
  const { home, info, diagrams, requirements, contact } = refs;

  return (
    <div className=" text-white bg-transparent text-xl 2xl:text-2xl hidden lg:flex absolute z-20 gap-5 2xl:gap-10 font-semibold justify-end w-full pt-10 pr-10 lg:pr-20 2xl:pr-36">
      <h1
        onClick={() => {
          scrollToSection(home);
        }}
        className="hover:decoration-slice cursor-pointer hover:underline hover:scale-105"
      >
        Inicio
      </h1>
      <h1
        onClick={() => {
          scrollToSection(info);
        }}
        className="hover:decoration-slice cursor-pointer hover:underline hover:scale-105"
      >
        El plan
      </h1>
      <h1
        onClick={() => {
          scrollToSection(diagrams);
        }}
        className="hover:decoration-slice cursor-pointer hover:underline hover:scale-105"
      >
        Procesos
      </h1>
      <h1
        onClick={() => {
          scrollToSection(requirements);
        }}
        className="hover:decoration-slice cursor-pointer hover:underline hover:scale-105"
      >
        Requerimientos
      </h1>
      <h1
        onClick={() => {
          scrollToSection(contact);
        }}
        className="hover:decoration-slice cursor-pointer hover:underline hover:scale-105"
      >
        Contacto
      </h1>
    </div>
  );
}

export default NavBar;
