import React, { useState } from "react";
import { BsQuestion } from "react-icons/bs";



/**
 * 
 * @param {string} question - recive question
 * @param {string} answer - recive answer
 * @returns 
 */

const FAQs = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`cursor-pointer p-2 ${
        isActive ? "  h-full " : " h-full"
      } transition-all duration-500`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center gap-6 font-semibold text-[#124E58] text-lg">
        <button
          className={` border border-black rounded-50 p-[6px] ${
            isActive ? "bg-[#CFF6EF]" : "bg-[#F2C852]"
          } transition-colors duration-500 ` }
          
        >
          <BsQuestion className="text-lg"/>
        </button>
        {question}
      </div>
      <div
        className={`ps-14 text-base text-slate-600 font-normal ${
          isActive ? "  translate-y-0 opacity-100 h-full" : " h-0 opacity-0 -translate-y-full"
        } transition-all duration-500`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQs;
