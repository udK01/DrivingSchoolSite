export default function Steps() {
  return (
    <section className="relative">
      <img
        src="./FullRoad.png"
        alt="Background.png"
        className="w-full h-full"
      />
      {/* Provisional License */}
      <a
        href="https://www.gov.uk/apply-first-provisional-driving-licence"
        className="w-[12%] h-[2%] absolute top-[29.5%] left-[15.5%] hover:cursor-pointer"
      />
      {/* Study For Theory */}
      <a
        href="https://www.freeonlinetheorytests.co.uk/"
        className="w-[6.5%] h-[1.8%] absolute top-[48.5%] left-[20.5%] hover:cursor-pointer"
      />
      {/* Book Theory */}
      <a
        href="https://www.gov.uk/book-theory-test"
        className="w-[6.5%] h-[1.8%] absolute top-[48.5%] left-[28.8%] hover:cursor-pointer"
      />
      {/* Schedule Lessons */}
      <a
        href=""
        className="w-[14%] h-[2%] absolute top-[72.5%] left-[69%] hover:cursor-pointer"
      />
      {/* Book Practical */}
      <a
        href="https://www.gov.uk/book-theory-test"
        className="w-[16%] h-[1.8%] absolute top-[94.8%] left-[30%] hover:cursor-pointer"
      />
    </section>
  );
}
