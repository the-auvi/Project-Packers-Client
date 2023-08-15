import React from 'react';
import { useForm } from 'react-hook-form';
import CheckOutInput from '../../components/CheckOutInput/CheckOutInput';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';

const Checkout = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log('click');
		console.log(data);
		reset();
	};

	return (
		<div className='md:h-screen mt-12'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='wrapper flex flex-col md:flex-row  gap-[30px] justify-between'
			>
				<div className='w-full md:w-[691px]'>
					{/* <h3>Contact Information</h3> */}
					<h3 className='mb-6 text-lg font-medium text-[#0D3D4B]'>
						Contact Information
					</h3>
					<div className='space-y-4'>
						{/* Email address */}
						<InputField
							placeholder='Enter your email address'
							name='email'
							type='email'
							errors={errors}
							register={register}
							required={true}
							label='Email Address'
							neededFor='homepage'
						/>
						{/* Phone number */}
						<InputField
							placeholder='Enter your phone Number'
							name='phoneNumber'
							label='Phone Number'
							register={register}
							required={true}
							errors={errors}
							neededFor='homepage'
						/>
						{/* Alternative phone number (Optional) */}
						<InputField
							placeholder='Enter your phone Number'
							name='alternativephone'
							label='Alternative phone number (Optional)'
							register={register}
							required={true}
							errors={errors}
							neededFor='homepage'
						/>
					</div>

					{/* Shipping Address */}
					<h3 className='mb-6 text-lg font-medium text-[#0D3D4B]'>
						Shipping address
					</h3>
					<div className='space-y-4'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							{/* First Name */}
							<InputField
								placeholder='Enter your first name'
								name='firstName'
								type='text'
								errors={errors}
								register={register}
								required={true}
								label='First Name'
								neededFor='homepage'
							/>
							{/* Last Name */}
							<InputField
								placeholder='Enter your last name'
								name='lastName'
								type='text'
								errors={errors}
								register={register}
								required={true}
								label='Last Name'
								neededFor='homepage'
							/>
						</div>
						{/* address */}
						<InputField
							placeholder='Enter your address'
							name='address'
							type='text'
							errors={errors}
							register={register}
							required={true}
							label='Address'
							neededFor='homepage'
						/>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
							{/* city */}
							<InputField
								placeholder='city'
								name='city'
								type='text'
								errors={errors}
								register={register}
								required={true}
								label='City'
								neededFor='homepage'
							/>
							{/* area */}
							<InputField
								placeholder='area'
								name='area'
								type='text'
								errors={errors}
								register={register}
								required={true}
								label='Area'
								neededFor='homepage'
							/>
							{/* Zip Code */}
							<InputField
								placeholder='zip code'
								name='zipCode'
								type='text'
								errors={errors}
								register={register}
								required={true}
								label='Zip Code'
								neededFor='homepage'
							/>
						</div>
						{/* Delivery Instruction */}
						<div className='flex flex-col'>
							<label htmlFor='deliveryInstruction'>
								Delivery Instruction (Optional)
							</label>
							<textarea
								name='deliveryInstruction'
								{...register('deliveryInstruction')}
								id='deliveryInstruction'
								cols='30'
								rows='5'
								className={`rounded-[4px] p-[14px_20px] border border-[#000316]/5 outline-none text-[#124E58]`}
							></textarea>
						</div>
					</div>
				</div>
				{/* right side */}
				<div className='w-full md:w-[492px] p-5 border rounded-[8px] h-full '>
					<h3 className='text-xl font-medium text-[#0D3D4B] py-4 border-b'>
						Your Order
					</h3>
					{/* Products details */}
					<div>
						<div className='flex items-center justify-between border-b pt-4 pb-2 text-base font-semibold '>
							<p className='text-start'>Product</p>
							<p className='text-end'>Subtotal</p>
						</div>
						{/* TODO: use map for show all products that come from previous page */}

						{/* product-1 */}
						<div className='flex items-center justify-between border-b py-4 text-base text-slate-600 font-medium'>
							<p className='text-start'>External SSD USB 3.1 750 GB × 1</p>
							<p className='text-end'>৳ 22,590.00tk </p>
						</div>
						{/* product-2 */}
						<div className='flex items-center justify-between border-b py-4 text-base text-slate-600 font-medium'>
							<p className='text-start'>External SSD USB 3.1 750 GB × 1</p>
							<p className='text-end'>৳ 22,590.00tk </p>
						</div>
						{/* Subtotal */}
						<div className='flex items-center justify-between border-b py-4 text-base text-slate-600 font-medium'>
							<p className='text-start'>Subtotal</p>
							<p className='text-end text-black'>৳ 22,590.00tk </p>
						</div>
					</div>
					<h4 className='flex items-center justify-between pt-4 text-base text-slate-600 font-medium'>
						Shipping
					</h4>
					{/* Radio Buttons */}
					<div className=' border-b py-4 text-base text-slate-600 font-medium'>
						{/* Radio Buttons for inside dhaka */}
						<div className='flex gap-2'>
							<input
								type='radio'
								id='insideDhaka'
								value={true}
								{...register('insideDhaka')}
							/>
							<label
								htmlFor='insideDhaka'
								className='flex justify-between items-center w-full '
							>
								<span>Inside Dhaka</span>
								<span>99tk</span>
							</label>
						</div>

						{/* Radio Buttons for outside dhaka */}
						<div className='flex gap-2'>
							<input
								type='radio'
								id='outsideDhaka'
								value={false}
								{...register('insideDhaka')}
							/>
							<label
								htmlFor='outsideDhaka'
								className='flex justify-between items-center w-full '
							>
								<span>Outside Dhaka</span>
								<span>99tk</span>
							</label>
						</div>
					</div>
					{/* Estimated Total */}
					<div className='flex items-center justify-between py-4 text-base text-black font-medium'>
						<p className='text-start'>Estimated total</p>
						<p className='text-end text-xl font-bold'>৳ 22,590.00tk </p>
					</div>
					<Button
						buttonType='secondaryButton'
						name='Continue to payment'
						className='w-full py-3 mt-8 px-[10px] '
					>
						<input type='submit' />
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Checkout;
