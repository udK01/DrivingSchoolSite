import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const mainContainer = "flex flex-col";
  const subContainer = "flex font-robot gap-[10px]";
  const mainStyle = "font-extrabold text-[26px] font-robot";
  const subStyle = "text-[20px] font-semibold text-[#CCCCCC]";

  return (
    <div className="w-full bg-[#2D2D2D] flex justify-center">
      <div className="w-[85%] h-[124px]  flex items-center">
        <img src="./logo.png" alt="Iwan Williams Logo" />
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
      </div>
    </div>
  );
}
