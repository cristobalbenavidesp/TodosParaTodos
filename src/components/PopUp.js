import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

function PopUp({ children }) {
  const { modalOpen, toggle } = useContext(ModalContext);

  return (
    modalOpen && (
      <div
        onClick={toggle}
        className="flex items-center place-content-center h-full w-full absolute z-10 bg-red-900 bg-opacity-90"
      >
        {children}
      </div>
    )
  );
}

export default PopUp;
