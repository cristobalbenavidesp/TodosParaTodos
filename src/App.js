import AboutUs from "./components/AboutUs";
import CrowdFoundingInfo from "./components/CrowdFoundingInfo";
import FrontPage from "./components/FrontPage";
import MockUps from "./components/MockUps";
import { ModalContextProvider } from "./context/ModalContext";
import { AppContextProvider } from "./context/AppContext";
import Hr from "./components/Hr";
import { AboutUsContextProvider } from "./context/AboutUsContext";
import ContactPage from "./components/ContactPage";
import { ContactContextProvider } from "./context/ContactContext";
import ViewPagerView from "./components/ViewPagerView";
import { ViewPagerContextProvider } from "./context/ViewPagerContext";

function App() {
  const slides = [
    {
      title: "Infórmate aqui sobre los beneficios que conlleva este proyecto",
      body: [],
      images: [
        "https://movin.laoms.org/wp-content/uploads/sites/8/2020/11/descarga-9.jpg",
        "https://assets.eldesconcierto.cl/2022/07/Apruebo-Rechazo.jpg",
      ],
    },
    {
      title: "Queremos un proceso constituyente libre de corrupción",
      body: [
        "Debemos asegurar un proceso constitucional totalmente transparente en cuanto a la redacción del documento,  gastos y presupuestos del proyecto junto al avance del mismo. \nPara el desarrollo de este proceso la información recopilada y generada será de carácter público, así como quienes son participes de su redacción junto al proceso de votación.",
      ],
      images: [
        "https://images.pexels.com/photos/5920931/pexels-photo-5920931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/14030195/pexels-photo-14030195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      title: " Logremos nuestros objetivos de forma pacífica y estructurada",
      body: [
        "A día de hoy muchos compatriotas han presenciado grandes injusticias que han ocurrido en nuestro país y han callado debido a la ínfima posibilidad de que su voz sea escuchada. De los ciudadanos que han alzado la voz, muchos han sido ignorados y empujados a una lucha que dejó secuelas en los cuerpos de algunos, y llagas en los corazones de todos.",
        "Sin embargo, hoy en día tenemos la tecnología y la posibilidad de alzar la voz de una forma pacífica, pero rotunda, tenemos la oportunidad de decir clara y concisamente lo que quiere el pueblo, solo hace falta organización",
      ],
      images: [
        "https://cdn.pixabay.com/photo/2017/03/18/19/59/peace-2154826_960_720.png",
        "https://cdn.pixabay.com/photo/2014/04/03/10/45/flowchart-311347_960_720.png",
      ],
    },
    {
      title: "Creemos un Chile más moderno",
      body: [
        "Debido a la imposibilidad de que todos los electores de un país se puedan reunir en tiempo y lugar, la aplicación de la democracia directa en todas las etapas de toma de decisiones no ha tenido aplicación práctica.",
        "Facebook posee 176.2 millones de seguidores en su pagina dentro de la misma plataforma.",
        "Puede que en un pasado fuera imposible congregar a millones de personas en un mismo espacio, pero desde que llegó el internet a nuestras vidas tenemos la solucion al alcance de nuestras manos.",
        "Implementar esta representaría un impulso tecnológico en nuestro pais debido al enfoque en la misma tecnología",
      ],
      images: [
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      title: "Consideramos un espectro mas amplio de opiniones",
      body: [
        "Esto significaría un beneficio de vital importancia para el proceso, pues una gran diversidad de opiniones refleja un resultado sustancialmente mas completo y representativo",
      ],
      images: [
        "https://cdn.pixabay.com/photo/2014/04/03/11/51/circle-312343_960_720.png",
      ],
    },
    {
      title: "Creamos un sistema mas seguro y mantenible",
      body: [
        " Es relevante asegurar una máxima integridad y seguridad de los datos requeridos, para lo que se contará con equipos de seguridad informática. A su vez también queremos asegurar que el sistema sea mantenible, pudiendo adquirir mejoras fácilmente a lo largo del tiempo.",
      ],
      images: [
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      title: "Un mecanismo de discusión más flexible y familiar.",
      body: [
        "Te ofrecemos un mecanismo asíncrono, lo cual pone fin a la dificultad de mantener a mucha gente reunida en simultáneo, permitiendo acceder al sitio en cualquier horario. Para muchos, los medios digitales de comunicación ya son familiares, esto es por la eficiencia y comodidad que nos brindan a la hora de comunicarnos, es por esto que deberíamos llevar este confort a nuestras decisiones políticas.",
      ],
      images: [
        "https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      title: "Un mecanismo más económico y eficaz.",
      body: [
        "Consideramos este mecanismo sustancialmente mas efectivo que el actual. ya que permite dar mayor profundidad a cada punto a tratado considerando las retroalimentaciones de la gente. Por otra parte es también muchísimo mas económico mantener una plataforma web que pagar grandes cifras en papeleo y sueldos de un pequeño grupo de gente.",
      ],
      images: [
        "https://st.depositphotos.com/1014014/3910/i/600/depositphotos_39105975-stock-photo-cut-dollar-prices-concept-illustration.jpg",
        "https://st.depositphotos.com/1168775/2556/i/600/depositphotos_25561855-stock-photo-efficiency-level-conceptual-meter.jpg",
      ],
    },
  ];

  return (
    <AppContextProvider>
      <ModalContextProvider>
        <div className="w-full h-fit flex flex-col place-content-center bg-red-900">
          <FrontPage />
          <section className="relative w-full h-screen flex lg:hidden ">
            <ViewPagerContextProvider>
              <ViewPagerView slides={slides} />
            </ViewPagerContextProvider>
          </section>
          <AboutUsContextProvider>
            <AboutUs />
          </AboutUsContextProvider>
          <section className="relative w-full h-screen">
            <MockUps />
          </section>
          <CrowdFoundingInfo />
          <ContactContextProvider>
            <ContactPage />
          </ContactContextProvider>
        </div>
      </ModalContextProvider>
    </AppContextProvider>
  );
}

export default App;
