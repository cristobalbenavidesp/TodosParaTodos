import React from "react";

function TextBlock(props) {
  return (
    <h3 className="w-full h-fit max-w-full break-words text-justify whitespace-pre-line sm:indent-4">
      {props.children}
    </h3>
  );
}

export default TextBlock;
