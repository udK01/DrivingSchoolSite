import { Link } from "react-router-dom";

export default function Navbar() {
  const options = [
    { text: "HOME", link: "/home" },
    { text: "ABOUT US", link: "/about-us" },
    { text: "PRICING", link: "/pricing" },
    { text: "BECOME AN INSTRUCTOR", link: "/become-an-instructor" },
    { text: "TESTIMONIALS", link: "/testimonials" },
    { text: "CONTACT US", link: "/contact-us" },
  ];

  return (
    <div className="w-full flex justify-center bg-primary_yellow sticky top-0 z-50">
      <div className="w-[80%] h-[60px] flex items-center gap-16 mx-[32px]">
        {options.map((option, index) => (
          <Link
            key={index}
            to={option.link}
            className="h-full flex items-center font-robot text-[20px] font-black text-primary_gray hover:cursor-pointer hover:text-primary_red transition-all duration-300"
          >
            {option.text}
          </Link>
        ))}
        <div className="flex w-[280px] h-full justify-center items-center text-[20px] font-black font-robot text-white bg-primary_red">
          SCHEDULE LESSONS
        </div>
      </div>
    </div>
  );
}
