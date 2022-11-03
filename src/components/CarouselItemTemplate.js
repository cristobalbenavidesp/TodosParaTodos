import CarouselItem from "./CarouselItem";
import CarouselCard from "./CarouselCard";

function FrontPageInfo({ data, quotes, children }) {
  const responsiveText = (body) => {
    const paragraphs = body.reduce((pars) => pars + 1, 0);

    if (paragraphs === 1) {
      return quotes ? (
        <h2 className="text-xs lg:text-md 2xl:text-xl indent-5 break-words whitespace-pre-line overflow-y-clip">
          &rdquo;{body[0]}&rdquo;
        </h2>
      ) : (
        <h2 className="text-xs lg:text-md 2xl:text-xl indent-5 break-words whitespace-pre-line overflow-y-clip">
          {body[0]}
        </h2>
      );
    } else if (paragraphs > 1) {
      return body.map((par, index) => {
        return quotes.includes(index) ? (
          <h2 className="text-[10px] lg:text-xs 2xl:text-base break-words whitespace-pre-line indent-5">
            &rdquo;{par}&rdquo;
          </h2>
        ) : (
          <h2 className="text-[10px] lg:text-xs 2xl:text-base break-words whitespace-pre-line indent-5">
            {par}
          </h2>
        );
      });
    }
  };

  return (
    <CarouselItem>
      <div className="grid grid-cols-3 max-h-full h-full w-full bg-slate-200">
        <CarouselCard title={data.title}>
          {data.body.length >= 1 ? responsiveText(data.body) : null}
        </CarouselCard>

        <div className="grid w-full h-full bg-rose-200 overflow-hidden relative">
          {children}
        </div>
      </div>
    </CarouselItem>
  );
}

FrontPageInfo.defaultProps = {
  quotes: [],
};

export default FrontPageInfo;
