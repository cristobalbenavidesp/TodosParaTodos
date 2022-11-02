import React, { useContext } from "react";
import Carousel from "./Carousel";
import CarouselItemTemplate from "./CarouselItemTemplate";
import FrontPageCard from "./FrontPageCard";
import NavBar from "./NavBar";
import { AppContext } from "../context/AppContext";

function FrontPage(props) {
  const slides = {
    1: {
      title: "Infórmate aqui sobre los beneficios que conlleva este proyecto",
      body: [],
    },
    2: {
      title: "Queremos un proceso constituyente libre de corrupción",
      body: [
        "Debemos asegurar un proceso constitucional totalmente transparente en cuanto a la redacción del documento,  gastos y presupuestos del proyecto junto al avance del mismo. \nPara el desarrollo de este proceso la información recopilada y generada será de carácter público, así como quienes son participes de su redacción junto al proceso de votación.",
      ],
    },
    3: {
      title: " Logremos nuestros objetivos de forma pacífica y estructurada",
      body: [
        "A día de hoy muchos compatriotas han presenciado grandes injusticias que han ocurrido en nuestro país y han callado debido a la ínfima posibilidad de que su voz sea escuchada. De los ciudadanos que han alzado la voz, muchos han sido ignorados y empujados a una lucha que dejó secuelas en los cuerpos de algunos, y llagas en los corazones de todos.",
        "Sin embargo, hoy en día tenemos la tecnología y la posibilidad de alzar la voz de una forma pacífica, pero rotunda, tenemos la oportunidad de decir clara y concisamente lo que quiere el pueblo, solo hace falta organización",
      ],
    },
    4: {
      title: "Creemos un Chile más moderno",
      body: [
        "Debido a la imposibilidad de que todos los electores de un país se puedan reunir en tiempo y lugar, la aplicación de la democracia directa en todas las etapas de toma de decisiones no ha tenido aplicación práctica.",
        "Facebook posee 176.2 millones de seguidores en su pagina dentro de la misma plataforma.",
        "Puede que en un pasado fuera imposible congregar a millones de personas en un mismo espacio, pero desde que llegó el internet a nuestras vidas tenemos la solucion al alcance de nuestras manos.",
        "Implementar esta representaría un impulso tecnológico en nuestro pais debido al enfoque en la misma tecnología",
      ],
    },
    5: {
      title: "Consideramos un espectro mas amplio de opiniones",
      body: [
        "Esto significaría un beneficio de vital importancia para el proceso, pues una gran diversidad de opiniones refleja un resultado sustancialmente mas completo y representativo",
      ],
    },
    6: {
      title: "Creamos un sistema mas seguro y mantenible",
      body: [
        " Es relevante asegurar una máxima integridad y seguridad de los datos requeridos, para lo que se contará con equipos de seguridad informática. A su vez también queremos asegurar que el sistema sea mantenible, pudiendo adquirir mejoras fácilmente a lo largo del tiempo.",
      ],
    },
    7: {
      title: "Un mecanismo de discusión más flexible y familiar.",
      body: [
        "Te ofrecemos un mecanismo asíncrono, lo cual pone fin a la dificultad de mantener a mucha gente reunida en simultáneo, permitiendo acceder al sitio en cualquier horario. Para muchos, los meedios digitales de comunicación ya son familiares, esto es por la eficiencia y comodidad que nos brindan a la hora de comunicarnos, es por esto que deberíamos llevar este confort a nuestras decisiones políticas.",
      ],
    },
    8: {
      title: "Un mecanismo más económico y eficaz.",
      body: [
        "Consideramos este mecanismo sustancialmente mas efectivo que el actual. ya que permite dar mayor profundidad a cada punto a tratado considerando las retroalimentaciones de la gente. Por otra parte es también muchísimo mas económico mantener una plataforma web que pagar grandes cifras en papeleo y sueldos de un pequeño grupo de gente.",
      ],
    },
  };

  const { refs } = useContext(AppContext);
  const { home } = refs;

  return (
    <div ref={home} className="sm:relative h-fit lg:h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row md:relative h-fit md:h-screen w-screen bg-estallido">
        <FrontPageCard />
        <div className="hidden md:flex h-full w-full place-content-center items-center">
          <Carousel>
            <CarouselItemTemplate data={slides[1]}>
              <img
                src="https://movin.laoms.org/wp-content/uploads/sites/8/2020/11/descarga-9.jpg"
                alt="estallido_social"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video scale-105"
              />
              <img
                src="https://assets.eldesconcierto.cl/2022/07/Apruebo-Rechazo.jpg"
                alt="apruebo_rechazo"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video scale-105"
              />
            </CarouselItemTemplate>

            <CarouselItemTemplate data={slides[2]}>
              <img
                src="https://images.pexels.com/photos/5920931/pexels-photo-5920931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="estallido_social"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video scale-105"
              />
              <img
                src="https://images.pexels.com/photos/14030195/pexels-photo-14030195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="estallido_social"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video scale-105"
              />
            </CarouselItemTemplate>
            <CarouselItemTemplate data={slides[3]}>
              <img
                src="https://cdn.pixabay.com/photo/2017/03/18/19/59/peace-2154826_960_720.png"
                alt="peace"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video"
              />
              <img
                src="https://cdn.pixabay.com/photo/2014/04/03/10/45/flowchart-311347_960_720.png"
                alt="peace"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video"
              />
            </CarouselItemTemplate>
            <CarouselItemTemplate data={slides[4]} quotes={[0, 1]}>
              <img
                src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="modern-city"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video scale-y-105"
              />
            </CarouselItemTemplate>
            <CarouselItemTemplate data={slides[5]}>
              <img
                src="https://cdn.pixabay.com/photo/2014/04/03/11/51/circle-312343_960_720.png"
                alt="diversity"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video scale-y-105"
              />
            </CarouselItemTemplate>
            <CarouselItemTemplate data={slides[6]}>
              <img
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="security"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video scale-y-105"
              />
            </CarouselItemTemplate>
            <CarouselItemTemplate data={slides[7]}>
              <img
                src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="smartphone"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video scale-y-105"
              />
            </CarouselItemTemplate>
            <CarouselItemTemplate data={slides[8]}>
              <img
                src="https://st.depositphotos.com/1014014/3910/i/600/depositphotos_39105975-stock-photo-cut-dollar-prices-concept-illustration.jpg"
                alt="cheap"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video scale-y-105"
              />
              <img
                src="https://st.depositphotos.com/1168775/2556/i/600/depositphotos_25561855-stock-photo-efficiency-level-conceptual-meter.jpg"
                alt="efficient"
                className="rounded-md h-full object-cover shrink-0 aspect-w-video scale-y-105"
              />
            </CarouselItemTemplate>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
