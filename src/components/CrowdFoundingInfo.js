import React, { useContext, useState } from "react";
import ConceptCard from "./ConceptCard";
import PopUp from "./PopUp";
import { ModalContext } from "../context/ModalContext";
import { AppContext } from "../context/AppContext";

const data = {
  financiation: {
    title: "Financiación",
    body: "Como en cualquier otro proyecto, es esencial asegurar un capital con el cual poder tanto formar un equipo técnico capacitado para desarrollar, mantener y asegurar el proyecto como para hacer llegar la tecnología a quienes no tienen los recursos suficientes para tenerla",
  },
  diffusion: {
    title: "Difusión",
    body: "La difusión es el aspecto más importante de este proceso, ya que buscamos obtener resultados verdaderamente representativos, es decir, plasmar en un documento digital un acuerdo entre más de la mitad de los ciudadanos chilenos, lo cual sólo se conseguirá contando con la participación de a lo menos esta cantidad de personas.",
  },
  webHosting: {
    title: "Web Hosting",
    body: "Otro aspecto fundamental en lo que al proyecto respecta, es en el servicio de Hosting que utilizaremos, ya que queremos garantizar la calidad de la experiencia de los usuarios de nuestro sitio, permitiendo muchas visitas en simultáneo y protegiéndolo de posibles ataques.",
  },
  rrhh: {
    title: "Recursos Humanos",
    body: "Queremos asegurar la calidad de este servicio, es por esto que debemos contar con personal verdaderamente capacitado, con el fin de desarrollar una página funcional, intuitiva, eficiente y segura, para lo cual se buscará establecer equipos de desarrollo, de diseño y de seguridad informática",
  },
  colaboration: {
    title: "Colaboración",
    body: "Otro de los aspectos mas importantes de nuestro proyecto es la cooperación de la gente a la hora de formar parte del proceso, queremos fomentar que haya gran diversidad de ideas que poder elegir.",
  },
  respect: {
    title: "Respeto",
    body: "Ultimo, pero no menos importante, es el respeto que nos tengamos durante todo el proceso, a veces puede ser frustrante debatir y argumentar, pero aun así debemos conservar la mente fría y no dejarnos llevar por las emociones.",
  },
};

function CrowdFoundingInfo(props) {
  const value = useContext(ModalContext);
  const [currentData, setCurrentData] = useState(data.financiation);

  const effect = (data) => {
    setCurrentData(data);
    value.setModalOpen(true);
  };

  const { refs } = useContext(AppContext);
  const { requirements } = refs;

  return (
    <div
      ref={requirements}
      className="relative flex flex-col h-fit md:h-screen w-full bg-gradient-to-r overflow-hidden rounded-t-lg pb-5 from-orange-800 via-red-800 to-red-900"
    >
      <PopUp>
        <div className="flex flex-col relative p-10 z-10 w-fit mx-5 md:mx-0 md:w-[50vw] h-fit md:h-[60vh] bg-slate-100 items-center place-content-center rounded-lg">
          <h1 className="text-5xl text-red-700 font-bold my-5 text-center">
            {currentData.title}
          </h1>
          <h2 className="text-xl text-red-700 font-semibold text-center">
            {currentData.body}
          </h2>
        </div>
      </PopUp>

      <h1 className="relative text-4xl md:text-2xl lg:text-4xl text-center w-full font-bold text-white mt-14 md:mt-5 lg:mt-14">
        Requerimientos
      </h1>
      <section className="relative flex flex-col items-center place-content-center h-full w-full ">
        <div className="relative grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 scale-75 md:scale-[45%] lg:scale-50">
          <ConceptCard
            onClick={() => effect(data.financiation)}
            src="https://cdn.pixabay.com/photo/2016/06/13/15/07/presentation-1454403_960_720.png"
            alt="financiation"
            title="Financiación"
          />
          <ConceptCard
            onClick={() => effect(data.rrhh)}
            src="https://cdn.pixabay.com/photo/2022/06/05/21/14/resume-7244898_960_720.png"
            alt="HHRR"
            title="Recursos Humanos"
          />
          <ConceptCard
            onClick={() => effect(data.webHosting)}
            src="https://cdn.pixabay.com/photo/2020/08/20/07/59/folder-5502836_960_720.png"
            alt="web_hosting"
            title="Web Hosting"
          />
          <ConceptCard
            onClick={() => effect(data.diffusion)}
            src="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_960_720.png"
            alt="diffusion"
            title="Difusión"
          />
          <ConceptCard
            onClick={() => effect(data.colaboration)}
            src="https://cdn.pixabay.com/photo/2022/06/13/07/23/teamwork-7259416_640.png"
            alt="colaboration"
            title="Colaboración"
          />
          <ConceptCard
            onClick={() => effect(data.respect)}
            src="https://cdn.pixabay.com/photo/2016/10/25/00/43/unity-1767680_960_720.jpg"
            alt="respect"
            title="Respeto"
          />
        </div>
      </section>
    </div>
  );
}

export default CrowdFoundingInfo;
