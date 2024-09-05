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
        {options.map((option, index) => (
          <p
            key={index}
            className="h-full flex items-center font-robot text-[20px] font-black text-primary_gray hover:cursor-pointer hover:text-primary_red transition-all duration-300"
          >
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
