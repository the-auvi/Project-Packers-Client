import React from 'react';
import { useForm } from 'react-hook-form';
import { BsExclamation } from 'react-icons/bs';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import './InputField.css';

/**
 *
 * @param {string} value - receive value of input field
 * @param {string} type - receive type of input field
 * @param {string} placeholder - receive placeholder for input field
 * @param {string} label - receive label for input field
 * @param {string} name - receive name for input field
 * @param {string} className - receive class name for extra style for input field
 * @param {function} register - receive register function for save input value in useForm
 * @param {function} errors - receive error function for show error message
 * @param {boolean} required - receive required true or not
 * @param {Function} eventHandler - receive event handler
 * @returns
 */
const InputField = ({
	value,
	type,
	name,
	label,
	register,
	required,
	errors,
	className,
	placeholder,
	id,
	maxLength,
	tabIndex,
	...eventHandler
}) => {
	return (
		<>
			<div className='relative flex gap-2 flex-col '>
				{label && (
					<label htmlFor={name} className='text-lg font-semibold text-white '>
						{label}
					</label>
				)}
				{name === 'phoneNumber' ? (
					<>
						<PhoneInput
							placeholder={placeholder}
							// value={value}
							// onChange={setValue}
							defaultCountry='BD'
							international
							className={` w-full border-2 py-[17px] text-sm font-medium bg-white  text-[#124E58] px-[20px] caret-[#F2C852] border-[#F2C852] rounded-50 focus:shadow-[0px_0px_10px_0px_#F2C852] placeholder:text-[#124E58] ${className}
							${errors[name] && 'focus:border-red-600 focus:shadow-none'}
							`}
							// className={'input-phone-number'}
							{...register(name)}

							// {...register(name, { required })}
						/>
					</>
				) : (
					<input
						id={id && id}
						value={value}
						name={name}
						type={type}
						tabIndex={tabIndex && tabIndex}
						maxLength={maxLength && maxLength}
						{...register(name, { required })}
						{...eventHandler}
						placeholder={placeholder && placeholder}
						className={` w-full border-2 py-[17px] text-sm font-medium  text-[#124E58] px-[20px] caret-[#F2C852] border-[#F2C852] rounded-50 focus:shadow-[0px_0px_10px_0px_#F2C852] outline-none   placeholder:text-[#124E58] ${className}
				${errors[name] && 'focus:border-red-600 focus:shadow-none'}
				`}
					/>
				)}
				{errors[name] && (
					<div className='absolute right-0 -bottom-6'>
						<span className='bg-red-600 py-[2px] px-3 rounded-50  text-white flex items-center justify-end gap-1 text-xs font-medium'>
							<BsExclamation className='text-sm bg-white text-red-600 rounded-50' />{' '}
							Please enter your {label}
						</span>
					</div>
				)}
			</div>
		</>
	);
};

export default InputField;
