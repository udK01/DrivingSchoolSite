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
    <div className="flex justify-center items-center font-robot text-white font-light h-[100px] px-20">
      <div className="w-full h-full flex justify-evenly items-center">
        {firstHalf.map((option, index) => (
          <div
            key={index}
            className="h-full flex items-center hover:border-b-2 hover:border-red-500 hover:cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>

      <img
        src="./peugeot.svg"
        className="size-[100px] object-contain mt-[60px]"
        alt="Peugeot Logo"
      />

      <div className="w-full h-full flex justify-evenly items-center">
        {secondHalf.map((option, index) => (
          <div
            key={index}
            className="h-full flex items-center hover:border-b-2 hover:border-red-500 hover:cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
