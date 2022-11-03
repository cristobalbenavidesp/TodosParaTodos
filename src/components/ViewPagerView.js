import React from "react";
import ViewPager from "./ViewPager";
import ViewPagerSlide from "./ViewPagerSlide";

function ViewPagerView({ slides, quotes }) {
  const responsiveText = (body) => {
    const paragraphs = body.reduce((pars) => pars + 1, 0);

    if (paragraphs === 1) {
      return quotes.length ? (
        <h2 className="text-2xl md:text-lg break-words whitespace-pre-line text-center">
          &rdquo;{body[0]}&rdquo;
        </h2>
      ) : (
        <h2 className="text-2xl md:text-lg break-words whitespace-pre-line text-center">
          {body[0]}
        </h2>
      );
    } else if (paragraphs > 1) {
      return body.map((par, index) => {
        return quotes.includes(index) ? (
          <h2 className="text-xl md:text-lg break-words whitespace-pre-line text-center">
            &rdquo;{par}&rdquo;
          </h2>
        ) : (
          <h2 className="text-xl md:text-lg break-words whitespace-pre-line text-center">
            {par}
          </h2>
        );
      });
    }
  };

  return (
    <ViewPager>
      {slides.map((slide) => {
        return (
          <ViewPagerSlide>
            {/** 
            {slide.images.map((src) => {
              return (
                <img
                  src={src}
                  alt=""
                  className="static rounded-md h-full object-cover shrink-0 aspect-w-video scale-105"
                />
              );
            })}*/}

            <section className="flex flex-col place-content-center items-center h-full w-full absolute text-white px-5 py-5 bg-red-800">
              <h1 className="text-3xl text-center font-semibold mb-5 md:mb-3">
                {slide.title}
              </h1>
              {slide.body.length >= 1 ? responsiveText(slide.body) : null}
            </section>
          </ViewPagerSlide>
        );
      })}
    </ViewPager>
  );
}

ViewPagerView.defaultProps = {
  quotes: [],
};
export default ViewPagerView;
