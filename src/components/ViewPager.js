import React, { useContext } from "react";
import { ViewPagerContext } from "../context/ViewPagerContext";
import ViewPagerIndicators from "./ViewPagerIndicators";

function ViewPager({ children, background }) {
  const { viewPagerRef, onScroll } = useContext(ViewPagerContext);
  return (
    <div className="w-full h-full relative flex flex-col z-0">
      {background()}
      <ul
        ref={viewPagerRef}
        onScroll={onScroll}
        className="absolute flex w-full h-screen overflow-x-scroll snap-x snap-mandatory scroll-smooth"
      >
        {children}
      </ul>
      <ViewPagerIndicators />
    </div>
  );
}

export default ViewPager;
