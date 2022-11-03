import React from "react";
import TextBlock from "./TextBlock";

function FrontPageCard() {
  return (
    <div className="h-fit lg:h-screen w-full lg:max-w-2xl pb-10 px-5 sm:px-14 pt-5 xl:pt-3 2xl:pt-10  bg-red-900 bg-opacity-80 text-white">
      <h1 className="text-9xl md:text-8xl 2xl:text-9xl text-center lg:text-left font-extrabold h-fit">
        T.P.T
      </h1>
      <hr className="mb-10 mt-1 relative" />
      <h2 className="font-semibold text-2xl my-5 text-center lg:text-left">
        ¿Quiénes somos?
      </h2>
      {/* prettier-ignore*/}
      <TextBlock>
          Todos Para Todos (T.P.T), es una organización sin fines de lucro que
                  propone un plan para crear un nuevo proceso constitucional, en el cual
                  cada persona puede formar parte de la escritura del documento. 
        </TextBlock>
      <TextBlock>El plan consta de dos fases:</TextBlock>
      <ul className="list-disc ml-10 ">
        <li className="list-item">Selección de propuestas constitucionales</li>
        <li className="list-item">Fase de redacción</li>
      </ul>

      <h2 className="font-semibold text-2xl my-5 text-center lg:text-left">
        Misión
      </h2>

      <TextBlock>
        Brindar herramientas que faciliten la creación de un nuevo proceso
        constituyente que tome en cuenta la opinión de todos los ciudadanos.
      </TextBlock>

      <h2 className="font-semibold text-2xl my-5 text-center lg:text-left">
        Visión
      </h2>

      <TextBlock>
        Hacer de Chile un país representativo y verdaderamente democrático.
      </TextBlock>

      <h2 className="font-semibold text-2xl my-5 text-center lg:text-left">
        Objetivo
      </h2>
      <TextBlock>
        Redactar un proyecto de nueva Constitución con participación directa de
        una mayoría absoluta (50 % +1) de la ciudadanía a través de nuestra
        plataforma web.
      </TextBlock>
    </div>
  );
}

export default FrontPageCard;
