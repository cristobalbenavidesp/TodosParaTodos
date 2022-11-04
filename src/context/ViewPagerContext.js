import { createContext, useState, useRef } from "react";

export const ViewPagerContext = createContext();

export function ViewPagerContextProvider({ children }) {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [size, setSize] = useState(0);
  const viewPagerRef = useRef();

  const onScroll = () => {
    setScrollLeft(viewPagerRef.current.scrollLeft);
  };

  return (
    <ViewPagerContext.Provider
      value={{ viewPagerRef, scrollLeft, onScroll, size, setSize }}
    >
      {children}
    </ViewPagerContext.Provider>
  );
}
