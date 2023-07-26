import React from "react";


/**
 * 
 * @param {string} buttonType - receive buttonType. It can be outlineButton, secondaryButton or empty(by defaut it's a primaryButton) 
 * @param {string} name - receive button name
 * @param {string} className - receive className for adding extra style
 * @param {function} eventHandlers - receive one or more eventHandlers for any action that will be done by this button.
 * @returns 
 */

const Button = ({ buttonType, name, className, icon, ...eventHandlers }) => {
  console.log(icon)

  return (
    <>
      <button
        {...eventHandlers}
        className={`flex items-center justify-center gap-2  py-2 px-5  rounded-50 text-sm font-bold 
        ${buttonType === "outlineButton"? "border border-secondary text-primary bg-none": buttonType === "secondaryButton" ? "bg-secondary text-primary": "bg-primary text-white"}
        ${className}
        `}
      >
        {name}  <span> {icon && icon }</span>
     
      </button>
    </>
  );
};

export default Button;
