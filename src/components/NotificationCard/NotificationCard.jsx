import React from "react";
import { useLocation } from "react-router-dom";

/**
 *
 * @param {string} icon - receive icon as notification type
 * @param {string} message - receive notification message
 * @param {object} time - receive notification sending time
 * @param {string} type - receive notification type like is this notification occurs for any user action or for any cart action
 * @returns
 */
const NotificationCard = ({ icon, message, time, type, className, isNavbar }) => {


  
  const date = new Date();

  const NotificationTime = date.getMinutes() - time;

  return (
    <div   className="flex items-start max-w-[764px]  gap-1 border-t p-1">
      <div>
        <img
          src={icon}
          alt=""
          className={`${
            type.toLowerCase() !== "user" ? "bg-[#CFF6EF]" : "bg-[#FEF9DC]"
          } min-w-[24px] max-w-[24px] min-h-[24px] rounded-lg p-1`}
        />
      </div>
      <div className={`flex flex-col gap-2 text-base font-normal ${isNavbar && "text-sm"} ${className}` }>
        <p className="">{
          isNavbar ? message.slice(0,20)+"...":message
        }</p>
        <p className={`text-black/40 ${isNavbar && "text-xs"}`}>
          {NotificationTime}min ago
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
