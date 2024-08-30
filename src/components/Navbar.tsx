export default function Navbar() {
  const options = [
    "HOME",
    "ABOUT US",
    "PRICING",
    "BECOME AN INSTRUCTOR",
    "TESTIMONIALS",
    "CONTACT US",
  ];

  return (
    <div className="w-full flex justify-center bg-primary_yellow">
      <div className="w-[80%] h-[60px] flex items-center gap-16 mx-[32px]">
        {options.map((option) => (
          <p className="font-robot text-[20px] font-black text-black hover:cursor-pointer">
            {option}
          </p>
        ))}
        <p className="flex w-[280px] h-full justify-center items-center text-[20px] font-black font-robot text-white bg-primary_red">
          SCHEDULE LESSONS
        </p>
      </div>
    </div>
  );
}
