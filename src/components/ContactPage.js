import React, { useContext, useLayoutEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { SiGmail } from "react-icons/si";
import { ContactContext } from "../context/ContactContext";
import { AppContext } from "../context/AppContext";

const gmailIcon = () => {
  return <SiGmail className="scale-[120%] text-red-700 mr-2 md:mr-3" />;
};

function ContactPage(props) {
  const { copySuccess } = useContext(ContactContext);
  const [isToastShown, setIsToastShown] = useState(false);
  const { refs } = useContext(AppContext);
  const { contact } = refs;

  useLayoutEffect(() => {
    if (copySuccess ?? false) {
      setIsToastShown(true);
      setTimeout(() => {
        setIsToastShown(false);
      }, 2000);
    }
  }, [copySuccess]);
  return (
    <div
      ref={contact}
      className="relative grid place-content-center w-full h-fit bg-gradient-to-tr pb-40 from-white via-blue-200 to-red-300 transition-transform rounded-t-xl"
    >
      <h1 className="text-center text-5xl font-bold my-20 text-red-800">
        Contactanos!
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-content-center gap-10">
        <ContactCard
          icon={gmailIcon}
          contact={"todosparatodos@gmail.com"}
          desc={
            "Escribenos cualquier duda a nuestro correo y con gusto te la responderemos!"
          }
        />
        <ContactCard
          icon={gmailIcon}
          contact={"dasgdsas@gmail.com"}
          desc={
            "Escribenos cualquier duda a nuestro correo y con gusto te la responderemos!"
          }
        />
        <ContactCard
          icon={gmailIcon}
          contact={"tdghgf@gmail.com"}
          desc={
            "Escribenos cualquier duda a nuestro correo y con gusto te la responderemos!"
          }
        />
        <ContactCard
          icon={gmailIcon}
          contact={"tasfas@gmail.com"}
          desc={
            "Escribenos cualquier duda a nuestro correo y con gusto te la responderemos!"
          }
        />
      </section>

      {isToastShown && (
        <section className="absolute w-full flex place-content-center bottom-5">
          <h2 className="rounded-lg bg-white text-blue-400 w-fit px-10 py-5 text-xl text-center mt-20">
            Copiado al portapapeles!
          </h2>
        </section>
      )}
    </div>
  );
}

export default ContactPage;
