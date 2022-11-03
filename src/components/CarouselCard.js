import React from "react";

function CarouselCard(props) {
  return (
    <div className="flex flex-col gap-y-2 2xl:gap-y-5 bg-white rounded-l-lg h-fit md:h-full py-5 col-span-2 overflow-y-scroll z-20">
      <h1 className="text-lg 2xl:text-4xl pl-9 xl:pt-1 2xl:pt-5 px-5 font-extrabold text-start">
        {props.title}
      </h1>
      <div className="break-words whitespace-pre-line text-justify px-8 tracking-tighter align-top">
        {props.children}
      </div>
    </div>
  );
}

export default CarouselCard;
