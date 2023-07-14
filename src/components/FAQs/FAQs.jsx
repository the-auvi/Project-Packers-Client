import React, { useState } from "react";

const FAQs = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div>
        {" "}
        <button
          className={`text-4xl border border-black p-4 rounded-full ${
            isActive ? "bg-sky-500" : "bg-yellow-400"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          ?
        </button>{" "}
        {question}
      </div>
      <div className={`${isActive ? "  opacity-100 " : " h-0 opacity-0"} transition-all duration-1000`}>
        {answer}
      </div>
    </div>
  );
};

export default FAQs;
