import React, { useContext } from "react";
import { ViewPagerContext } from "../context/ViewPagerContext";

function ViewPagerIndicators() {
  const { size, scrollLeft, viewPagerRef } = useContext(ViewPagerContext);

  const onClick = () => {};

  const getBar = () => {
    return Array.from(Array(size).keys()).map((index) => {
      return index ===
        Math.round(
          scrollLeft / viewPagerRef.current.getBoundingClientRect().width
        ) ? (
        <section className="rounded-lg h-2 w-5 bg-gradient-to-r from-white via-slate-50 to-slate-100" />
      ) : (
        <section className="rounded-lg h-1 w-5 bg-gradient-to-r from-slate-200 to-slate-300" />
      );
    });
  };

  return (
    <div class="absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-10 gap-3 items-center transition-all">
      {getBar()}
    </div>
  );
}

export default ViewPagerIndicators;
