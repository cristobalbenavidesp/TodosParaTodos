import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col gap-y-2 h-fit lg:h-full w-full max-w-2xl lg:max-w-md xl:max-w-xl 2xl:max-w-[40%] xl:gap-y-5 bg-white md:rounded-lg lg:rounded-l-lg lg:rounded-r-none p-10 md:overflow-y-scroll">
      <h1 className="text-xl 2xl:text-4xl font-extrabold leading-normal text-start mb-3">
        {props.title}
      </h1>
      <div className="break-words whitespace-pre-line text-justify">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
