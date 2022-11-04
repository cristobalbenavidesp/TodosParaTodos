function ViewPagerSlide({ children }) {
  return (
    <li className="relative flex flex-col shrink-0 snap-center snap-always place-content-center w-full h-screen overflow-hidden">
      {children}
    </li>
  );
}

export default ViewPagerSlide;
