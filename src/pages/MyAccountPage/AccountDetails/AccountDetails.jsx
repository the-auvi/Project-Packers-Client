import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button/Button';
import InputField from '../../../components/InputField/InputField';

const AccountDetails = () => {
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
		<div className='w-full md:w-[699px]  '>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				{/* name */}
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
				{/* Email */}
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
				<h3>Password Change</h3>
				{/* Current Password */}
				<InputField
					placeholder='**********'
					name='currentPassword'
					type='password'
					errors={errors}
					register={register}
					required={true}
					label='Current Password'
					neededFor='homepage'
				/>
				{/* New Password */}
				<InputField
					placeholder='**********'
					name='newPassword'
					type='password'
					errors={errors}
					register={register}
					required={true}
					label='New Password'
					neededFor='homepage'
				/>
				{/* Confirm new password */}
				<InputField
					placeholder='**********'
					name='confirmPassword'
					type='password'
					errors={errors}
					register={register}
					required={true}
					label='Confirm New Password'
					neededFor='homepage'
				/>
				<Button
					buttonType='secondaryButton'
					name='Save Change'
					className='p-[12px_32px]'
				/>
			</form>
		</div>
	);
};

export default AccountDetails;
