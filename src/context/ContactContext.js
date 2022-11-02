import { createContext, useEffect, useState } from "react";

export const ContactContext = createContext();
export function ContactContextProvider(props) {
  const [copySuccess, setCopySuccess] = useState();

  useEffect(() => {
    navigator.clipboard.writeText(copySuccess);
  }, [copySuccess]);

  return (
    <ContactContext.Provider value={{ copySuccess, setCopySuccess }}>
      {props.children}
    </ContactContext.Provider>
  );
}
