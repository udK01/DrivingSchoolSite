export default function Hero() {
  return (
    <section className="w-full h-screen relative flex justify-center bg-black">
      <div className="w-[80%] h-full z-20 font-robot text-white space-y-[70px] mt-40">
        <div className="flex font-semibold text-[100px]">
          <p className="text-primary_yellow">DRIVE A CAR</p>&nbsp;WITH US
        </div>
        <div className="w-[800px] font-black text-[20px]">
          Master the road with confidence at our driving school, where safety
          meets skill and every lesson drives you closer to a lifetime of safe,
          smart driving.
        </div>
        <button className="translate-y-[40px] py-[20px] px-20 bg-primary_yellow text-[64px] font-black">
          BOOK A LESSON
        </button>
      </div>

      <img
        src="./HeroImg.png"
        alt="Hero-Img"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />
    </section>
  );
}
