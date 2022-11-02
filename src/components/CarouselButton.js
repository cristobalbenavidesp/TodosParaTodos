import React from "react";

function CarouselButton(props) {
  return (
    <button
      className="flex justify-center items-center select-none bg-red-800 opacity-70 text-white font-bold p-2 rounded-full shadow-lg h-20 w-20 scale-75 active:bg-red-900"
      onClick={props.right ? props.next : props.prev}
    >
      {props.right ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="4"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="4"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      )}
    </button>
  );
}

export default CarouselButton;
