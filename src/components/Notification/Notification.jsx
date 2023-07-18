import React from "react";

/**
 *
 * @param {string} icon - receive icon as notification type
 * @param {string} message - receive notification message
 * @param {object} time - receive notification sending time
 * @param {string} type - receive notification type like is this notification occurs for any user action or for any cart action
 * @returns
 */
const Notification = ({ icon, message, time, type, className }) => {
  const date = new Date();
//   console.log(date.getMinutes() - time);

//   console.log(typeof date);

  const NotificationTime = date.getMinutes() - time;

  return (
    <div className="flex items-start max-w-[764px] min-h-16 gap-1 border-t p-1">
      <div>
        <img
          src={icon}
          alt=""
          className={`${
            type.toLowerCase() !== "user" ? "bg-[#CFF6EF]" : "bg-[#FEF9DC]"
          } min-w-[24px] max-w-[24px] min-h-[24px] rounded-lg p-1`}
        />
      </div>
      <div className={`flex flex-col gap-2 text-base font-normal ${className}` }>
        <p className="">{message}</p>
        <p className="text-black/40">
          {NotificationTime}min ago
        </p>
      </div>
    </div>
  );
};

export default Notification;
