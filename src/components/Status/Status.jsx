import React from "react";



/**
 * 
 * @param {string} title - receive status = "Close", "Refund Processing", "Paid", "Abandoned", "Pending", "Processing", "Completed", "Estimate Sent" 
 * @returns 
 */
const Status = ({ title }) => {
  console.log(title === "Close" && "Refund Processing");

  return (
    <>
      <div
        className={`flex items-center justify-center gap-1 rounded-[10px] text-sm font-normal py-[2px] ps-[6px] pe-2 w-fit ${
          title === "Close" && "Refund Processing"
            ? "bg-red-200 "
            : title === "Paid" && "Abandoned"
            ? " bg-slate-200"
            : title === "Pending" && "Processing"
            ? " bg-[#F7DA7C]"
            : title === "Completed"
            ? "bg-green-300"
            : "bg-[#A2EEE7]"
        }`}
      >
        <div
          className={` w-2 h-2 rounded-full ${
            title === "Close" && "Refund Processing"
              ? "bg-red-700"
              : title === "Paid" && "Abandoned"
              ? " bg-slate-700"
              : title === "Pending" && "Processing"
              ? " bg-[#8C651A]"
              : title === "Completed"
              ? " bg-green-700"
              : "bg-[#092F3F]"
          }`}
        ></div>
        {title}
      </div>
    </>
  );
};

export default Status;
