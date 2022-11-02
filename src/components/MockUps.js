import React, { useContext } from "react";
import Mockup from "./Mockup";
import { ReactComponent as BpmSeleccion } from "../assets/seleccion_propuesta.svg";
import { ReactComponent as BpmEliminacion } from "../assets/eliminacion_propuestas.svg";
import { ReactComponent as BpmRedaccion } from "../assets/fase_de_redaccion.svg";
import { ReactComponent as BpmRevision } from "../assets/revision_propuestas.svg";
import { AppContext } from "../context/AppContext";

function MockUps(props) {
  const { refs } = useContext(AppContext);
  const { diagrams } = refs;

  return (
    <div
      ref={diagrams}
      className="flex flex-col items-center place-content-center h-screen sm:h-screen px-4 sm:px-10 bg-gradient-to-b from-red-900 to-orange-800"
    >
      <h1 className="text-4xl font-bold p-4 xl:py-10 text-white">
        Procesos BPMN
      </h1>
      <section className="flex gap-0 md:gap-4 w-full h-[75%] rounded-lg snap-x overflow-x-scroll scroll-smooth snap-mandatory overflow-y-hidden items-center">
        <Mockup>
          <BpmSeleccion className="bg-white w-fit shadow-lg scale-50 xl:scale-75" />
        </Mockup>
        <Mockup>
          <BpmEliminacion className="bg-white w-fit shadow-lg scale-50 xl:scale-75" />
        </Mockup>
        <Mockup>
          <BpmRevision className="bg-white w-fit shadow-lg scale-50 xl:scale-75" />
        </Mockup>
        <Mockup>
          <BpmRedaccion className="bg-white w-fit shadow-lg scale-50 xl:scale-75" />
        </Mockup>
      </section>
    </div>
  );
}

export default MockUps;
