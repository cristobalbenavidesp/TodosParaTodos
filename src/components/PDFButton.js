function PDFButton() {
  return (
    <div className="flex place-content-between items-center w-[80vw] md:w-[25vw] xl:w-[15vw] h-fit md:mt-[20vh] rounded-lg bg-white p-5 hover:bg-slate-50 active:scale-90 shadow-xl transition-transform shadow-blue-600/60">
      <button className="text-xl lg:text-3xl text-red-800 align-top">
        Descargar PDF
      </button>
      <img
        className="shrink-0 w-[20%] object-cover ml-1"
        alt="pdf-logo"
        src="https://www.ggi-sa.com/assets/images/pdf-icon.png"
      />
    </div>
  );
}

export default PDFButton;
