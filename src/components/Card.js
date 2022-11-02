import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col gap-y-2 w-full max-w-xl lg:max-w-2xl xl:gap-y-5 bg-white rounded-l-lg pb-20 pt-10 2xl:px-8 h-fit md:h-full">
      <h1 className="text-xl 2xl:text-4xl pl-9 xl:pt-5 px-5 font-extrabold leading-normal text-start">
        {props.title}
      </h1>
      <div className="break-words whitespace-pre-line text-justify px-8 tracking-tighter align-top">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
