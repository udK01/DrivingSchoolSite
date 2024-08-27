export default function Navbar() {
  const options = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "SHOP",
    "INVENTORY",
    "CONTACT",
  ];

  const midIndex = Math.ceil(options.length / 2);

  const firstHalf = options.slice(0, midIndex);
  const secondHalf = options.slice(midIndex);

  return (
    <div className="flex fixed w-full z-20 justify-center items-center font-robot text-[20px] text-white font-light h-[150px] px-20">
      <div className="w-full h-full flex justify-evenly items-center">
        {firstHalf.map((option, index) => (
          <div
            key={index}
            className="h-full flex items-center hover:text-red-500 hover:font-semibold transition-all duration-300 hover:cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>

      <img
        src="./logo.png"
        className="size-[200px] object-contain"
        alt="Peugeot Logo"
      />

      <div className="w-full h-full flex justify-evenly items-center">
        {secondHalf.map((option, index) => (
          <div
            key={index}
            className="h-full flex items-center hover:text-red-500 hover:font-semibold transition-all duration-300 hover:cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
