import { useContext, useEffect } from "react";
import ViewPager from "./ViewPager";
import ViewPagerIndicators from "./ViewPagerIndicators";
import ViewPagerSlide from "./ViewPagerSlide";
import { ViewPagerContext } from "../context/ViewPagerContext";
function ViewPagerView({ slides, quotes }) {
  const responsiveText = (body) => {
    const paragraphs = body.reduce((pars) => pars + 1, 0);

    if (paragraphs === 1) {
      return quotes.length ? (
        <h2 className="text-2xl md:text-lg break-words whitespace-pre-line text-justify">
          &rdquo;{body[0]}&rdquo;
        </h2>
      ) : (
        <h2 className="text-2xl md:text-lg break-words whitespace-pre-line text-justify">
          {body[0]}
        </h2>
      );
    } else if (paragraphs > 1) {
      return body.map((par, index) => {
        return quotes.includes(index) ? (
          <h2 className="text-xl md:text-lg break-words whitespace-pre-line text-justify">
            &rdquo;{par}&rdquo;
          </h2>
        ) : (
          <h2 className="text-xl md:text-lg break-words whitespace-pre-line text-justify">
            {par}
          </h2>
        );
      });
    }
  };

  const { setSize } = useContext(ViewPagerContext);

  useEffect(() => {
    setSize(slides.length);
  }, [slides, setSize]);

  const background = () => {
    return (
      <img
        src="https://www.importancia.org/wp-content/uploads/historico-del/DEMOCRACIA-ATENIENSE.jpg"
        alt="atenas"
        className="w-full h-full shrink-0 aspect-w-video object-cover static z-0"
      />
    );
  };

  return (
    <ViewPager background={background}>
      {slides.map((slide) => {
        return (
          <ViewPagerSlide>
            <section className="absolute flex flex-col place-content-center items-center h-full w-full font-semibold text-red-600 px-10 py-5 z-30">
              <h1 className="text-3xl text-center font-bold mb-5 md:mb-3 antialiased">
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
