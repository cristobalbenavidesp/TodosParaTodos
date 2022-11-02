import React, { useState, useEffect, Children } from "react";
import CarouselButton from "./CarouselButton";

function Carousel({ children }) {
  const [currentSlideId, setCurrentSlideId] = useState();
  const size = Children.count(children);

  useEffect(() => {
    setCurrentSlideId(1);
  }, []);

  const next = () => {
    if (currentSlideId === size) {
      setCurrentSlideId(1);
    } else {
      setCurrentSlideId(currentSlideId + 1);
    }
  };

  const prev = () => {
    if (currentSlideId === 1) {
      setCurrentSlideId(size);
    } else {
      setCurrentSlideId(currentSlideId - 1);
    }
  };

  return (
    <div className="bg-gradient-to-tl relative h-full w-full flex place-content-center items-center from-red-900 via-red-700 to-red-900 overflow-auto">
      <ul
        id="slider"
        className="aspect-w-video aspect-h-video w-[70%] h-[60%] rounded-lg overflow-hidden"
      >
        {Children.toArray(children).map((slide, index) => {
          if (currentSlideId === index + 1) {
            return slide;
          } else {
            return null;
          }
        })}
      </ul>
      <div className="absolute px-0 xl:px-3 flex h-full w-full top-0 left-0">
        <div className="my-auto w-full flex justify-between xl:px-5">
          <CarouselButton right={false} prev={prev} next={next} />
          <CarouselButton right={true} prev={prev} next={next} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
