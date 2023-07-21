import React from 'react';
import "./InputField.css"


/**
 * 
 * @param {string} inputValue - receive value of input field
 * @param {string} inputType - receive type of input field
 * @param {string} placeholder - receive placeholder for input field
 * @param {string} inputLabel - receive label for input field
 * @param {string} id - receive id for input field
 * @param {string} name - receive name for input field
 * @param {string} className - receive class name for extra style for input field
 * @param {Function} eventHandler - receive event handler
 * @returns 
 */
const InputField = ({
	inputValue,
	inputType,
	placeHolder,
	inputLabel,
	id,
	name,
	className,
	...eventHandler
}) => {




	return (
		<div>
			<label htmlFor={name}>{inputLabel}</label>
			<div>
				<input
					value={inputValue}
					{...eventHandler}
                    required
                
					name={name}
					id={id}
					type={inputType}
					placeholder={placeHolder}
					className={` w-full border-2 py-[17px] text-sm font-medium  text-[#124E58] px-[20px] caret-[#F2C852] border-[#F2C852] rounded-50 focus:shadow-[0px_0px_10px_0px_#F2C852] outline-none focus:border-[#F2C852]  ${className}`}
				/>    
			</div>
            <div className='hidden required:block' >
                please enter your email address
            </div>
		</div>
	);
};

export default InputField;
