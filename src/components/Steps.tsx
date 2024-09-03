export default function Steps() {
  return (
    <section className="relative">
      <div className="flex justify-center">
        <img
          src="./GetStarted/Title.png"
          alt="Get Started Title"
          className="z-10 absolute mt-10 w-[85%]"
        />
      </div>

      <div className="relative w-full h-full">
        <img
          src="./GetStarted/Road1.png"
          alt="Get Started Title"
          className="w-full h-full"
        />
        <img
          src="./GetStarted/Signs1.png"
          alt="Signs"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </section>
  );
}
