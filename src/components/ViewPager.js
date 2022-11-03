import React from "react";

function ViewPager(props) {
  return (
    <ul className="absolute flex w-full h-screen overflow-x-scroll snap-x snap-mandatory scroll-smooth">
      {props.children}
    </ul>
  );
}

export default ViewPager;
