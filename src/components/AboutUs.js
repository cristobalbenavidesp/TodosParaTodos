import React, { useContext, useState } from "react";
import data from "../assets/plan.pdf";
import Card from "./Card";
import PDFButton from "./PDFButton";
import { AboutUsContext } from "../context/AboutUsContext";
import { AppContext } from "../context/AppContext";

function AboutUs(props) {
  const { refs } = useContext(AppContext);
  const { info } = refs;

  return (
    <>
      <div
        ref={info}
        className="flex flex-col lg:flex-row place-content-center items-center w-screen h-fit sm:h-screen py-15 lg:py-20 xl:py-10 2xl:py-20 bg-red-900"
      >
        <Card title="El plan">
          <h2 className="max-w-xl text-lg leading-normal indent-4">
            El día 23 de noviembre de 2020 se publicó una de las decisiones más
            importantes de la historia de nuestro país. Durante el plebiscito
            nacional de 2020, la ciudadanía llegó a un acuerdo, con un 78,28% de
            aprobación, ganó el cambio, Chile necesitaba una nueva constitución.
          </h2>
          <h2 className="max-w-xl text-lg first:leading-normal indent-4">
            El día 4 de septiembre de 2022 se realizó el plebiscito
            constitucional, en el cual arrasó la postura del rechazo, ¿Cómo es
            esto posible?, ¿Chile cambió de opinión y ahora se niega a un
            cambio?, ¿Por qué esta contradicción? La respuesta es clara, Chile
            quiere una nueva constitución pero que esta sea verdaderamente
            representativa, lo cual no se logra con una convención
            constitucional, sino con un sistema en el cual se tenga en cuenta la
            opinión de todos los ciudadanos.
          </h2>
          <h2 className="max-w-xl text-lg leading-normal indent-4">
            El presente proyecto plantea una posible solución a esta
            problemática con un plan detallado paso a paso para crear una
            constitución entre todos los chilenos con la ayuda de los medios
            digitales como son aplicaciones móviles, páginas web, redes
            sociales, entre otros; proponiendo una plataforma digital que será
            el lugar en que se realizarán todos los procesos mencionados en este
            documento, contemplando encuestas, revisiones, modificaciones y
            actualizaciones.
          </h2>
        </Card>
        <object
          className="invisible max-w-[40%] lg:visible rounded-r-lg"
          type="application/pdf"
          width="100%"
          height="100%"
          data={data}
        >
          <section className="w-full h-full flex flex-col place-items-center rounded-r-lg bg-democracia">
            <section className="flex place-content-centerw-full h-full">
              <PDFButton />
            </section>
            <section className="text-cente">
              <a href="https://www.freepik.com/free-vector/youth-empowerment-abstract-concept-vector-illustration-children-young-people-take-charge-take-action-improve-life-quality-democracy-building-youth-activism-involvement-abstract-metaphor_11668194.htm#query=democracy&position=7&from_view=keyword">
                Image by vectorjuice
              </a>{" "}
              on Freepik
            </section>
          </section>
        </object>
      </div>
      <section className="md:collapse flex place-content-center h-fit">
        <PDFButton />
      </section>
    </>
  );
}

export default AboutUs;
