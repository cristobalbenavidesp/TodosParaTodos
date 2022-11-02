import React from "react";

function Container(props) {
  return (
    <div className="grid grid-cols-2 place-content-center bg-gray-200 rounded-lg shadow-xl max-w-7xl w-full items-stretch shrink-0 m-10 snap-center">
      {props.children}
    </div>
  );
}

export default Container;
