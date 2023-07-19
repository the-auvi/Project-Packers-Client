import React from "react";
import { HiLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

const DropDownNotification = ( {children, isOpen, setIsOpen, isNotification }) => {


  return (
    <div
      
      className={` bg-white p-5 pt-0 rounded-lg min-w-[280px] max-w-[381px] h-[372px] overflow-y-scroll shadow-2xl ${
        isOpen
          ? "top-16 right-0 opacity-100"
          : "opacity-0 -top-[999px] right-0 h-0"
      } transition-all ease-in-out duration-700 absolute `}
    >
      <div className="sticky top-0 pt-5 pb-3 bg-white flex items-center justify-between text-sm font-semibold text-[#124E58]">
        <p>Notification</p>
        <Link  to={isNotification ? "/home/notification": ""}  >
          <HiLogout />
        </Link>
      </div>
      <div className="text-sm" >
        {children}
      </div>
      
    </div>
  );
};

export default DropDownNotification;
