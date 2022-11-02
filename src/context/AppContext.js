import { createContext, useEffect, useState, useRef } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const home = useRef(null);
  const info = useRef(null);
  const diagrams = useRef(null);
  const requirements = useRef(null);
  const contact = useRef(null);
  const refs = { home, info, diagrams, requirements, contact };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <AppContext.Provider value={{ scrollToSection, refs }}>
      {props.children}
    </AppContext.Provider>
  );
}
