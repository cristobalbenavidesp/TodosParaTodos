import { createContext, useState } from "react";

export const ModalContext = createContext();
export function ModalContextProvider(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [position, setPosition] = useState(0);

  const toggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <ModalContext.Provider
      value={{ modalOpen, setModalOpen, toggle, position, setPosition }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
