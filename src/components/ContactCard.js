import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

function ContactCard(props) {
  const { setCopySuccess } = useContext(ContactContext);
  return (
    <section
      onClick={() => {
        setCopySuccess(props.contact);
      }}
      className="px-2 max-w-xs xl:max-w-sm py-5 rounded-lg bg-slate-50 border-red-900 border-2 shadow-lg shadow-red-800/40 cursor-pointer hover:bg-slate-100 active:scale-95"
    >
      <section className="flex items-center place-content-center">
        {props.icon()}
        <h2 className="text-center lg:text-lg text-xl xl:text-2xl font-semibold ">
          {props.contact}
        </h2>
      </section>
      <h2 className="text-center text-lg mt-3 italic">{props.desc}</h2>
    </section>
  );
}

export default ContactCard;
