import React from "react";


/**
 * 
 * @param {string} buttonType - receive buttonType. It can be outlineButton, secondaryButton or empty(by defaut it's a primaryButton) 
 * @param {string} name - recive button name
 * @param {string} className - receive className for adding extra style
 * @param {funtion} eventHandlers - recieve one or more eventHandlers for any action that will be done by this button.
 * @returns 
 */

const Button = ({ buttonType, name, className, ...eventHandlers }) => {

  return (
    <>
      <button
        {...eventHandlers}
        className={`flex items-center justify-center border py-2 px-5  rounded-50 text-sm font-bold 
        ${buttonType === "outlineButton"? "border-secondary text-primary bg-none": buttonType === "secondaryButton" ? "bg-secondary text-primary": "bg-primary text-white"}
        ${className?className:""}
        `}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
