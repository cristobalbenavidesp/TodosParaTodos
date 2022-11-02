import React from "react";

function ConceptCard(props) {
  return (
    <div
      onClick={props.onClick}
      className="flex flex-col items-center place-content-center w-full h-fit hover:cursor-pointer hover:scale-95 transition-transform"
    >
      <img
        className="object-cover shadow-xl scale-75 bg-white aspect-w-video aspect-h-video shrink-0"
        src={props.src}
        alt={props.alt}
      />
      <h2 className="text-3xl text-white text-center mb-20 align-top">
        {props.title}
      </h2>
    </div>
  );
}

export default ConceptCard;
