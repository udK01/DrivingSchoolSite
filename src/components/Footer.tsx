import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  const mainContainer = "flex flex-col";
  const subContainer = "flex font-robot gap-[10px]";
  const mainStyle = "font-extrabold text-[26px] font-robot";
  const subStyle = "text-[20px] font-semibold text-[#CCCCCC]";

  const iconStyle =
    "size-[50px] hover:text-primary_red hover:cursor-pointer transition-all duration-300";

  const socialMedias = [
    {
      icon: <FaFacebook className={iconStyle} />,
      href: "https://www.facebook.com/iwanwilliamsdriving",
    },
    {
      icon: <FaSquareXTwitter className={iconStyle} />,
      href: "https://x.com/IwanWilliamsSOM",
    },
    {
      icon: <FaYoutube className={iconStyle} />,
      href: "https://www.youtube.com/@iwandrivingschool",
    },
    {
      icon: <AiFillTikTok className={iconStyle} />,
      href: "https://www.tiktok.com/@iwanwilliams6",
    },
  ];

  return (
    <div className="w-full bg-[#2D2D2D] flex justify-center">
      <div className="w-[85%] h-[124px]  flex items-center">
        <img src="./FullLogo.png" alt="Iwan Williams Logo" />
        <div className="w-[90%] h-full flex justify-around items-center text-white">
          {/* Location */}
          <div className={mainContainer}>
            <div className={subContainer}>
              <FaLocationDot className="size-[30px]" />
              <div className={mainStyle}>Location</div>
            </div>
            <div className={subStyle}>
              Swansea, Llanelli and Neath Port Talbot
            </div>
          </div>
          {/* Email */}
          <div className={mainContainer}>
            <div className={subContainer}>
              <IoIosMail className="size-[40px]" />
              <div className={mainStyle}>Email</div>
            </div>
            <div className={subStyle}>iwanwilli@hotmail.com</div>
          </div>
          {/* Phone */}
          <div className={mainContainer}>
            <div className={subContainer}>
              <FaPhoneAlt className="size-[30px]" />
              <div className={mainStyle}>Call Us</div>
            </div>
            <div className={subStyle}>01792 870718</div>
          </div>
        </div>
        <div className="flex text-white gap-[10px]">
          {socialMedias.map((social) => (
            <a href={social.href}>{social.icon}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
