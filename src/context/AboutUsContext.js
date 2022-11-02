import React, { createContext, useState } from "react";

export const AboutUsContext = createContext();

export function AboutUsContextProvider({ children }) {
  const [pdfView, setPdfView] = useState();
  return (
    <AboutUsContext.Provider value={{ pdfView, setPdfView }}>
      {children}
    </AboutUsContext.Provider>
  );
}
