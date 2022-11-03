import PDF from "../assets/plan.pdf";

function PDFButton() {
  return (
    <div className="flex place-content-between items-center w-[80%] md:w-[25%] 2xl:w-[20vw] h-fit rounded-lg bg-white p-5 hover:bg-slate-50 active:scale-90 shadow-xl transition-transform active:shadow-blue-400/60">
      <a
        download
        href={PDF}
        className="text-xl lg:text-3xl text-red-800 align-top"
      >
        Descargar PDF
      </a>
      <img
        className="shrink-0 w-[20%] object-cover ml-1"
        alt="pdf-logo"
        src="https://www.ggi-sa.com/assets/images/pdf-icon.png"
      />
    </div>
  );
}

export default PDFButton;
