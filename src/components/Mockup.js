import React from "react";

function Mockup(props) {
  return (
    <div className="flex flex-shrink-0 scale-50 lg:scale-100 rounded-lg snap-center snap-always w-fit h-fit max-h-fit px-0">
      {props.children}
    </div>
  );
}

export default Mockup;
