import React, { useId } from "react";

function CarouselItem(props) {
  const key = useId();

  return (
    <li key={key} className="h-full w-full static object-cover">
      {props.children}
    </li>
  );
}

export default CarouselItem;
