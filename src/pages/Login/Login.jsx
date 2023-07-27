import React from 'react';
// import InputField from '../../components/InputField/InputField';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';

// socialMedia
import facebook from '../../assets/SocialMedia/facebook.png';
import apple from '../../assets/SocialMedia/apple.png';
import google from '../../assets/SocialMedia/google.png';
import { Link } from 'react-router-dom';
import InputField from '../../components/InputField/InputField';

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const name = 'text';

	// console.log("in home", errors[name])

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<div className=' '>
			<div className='wrapper'>
				<div className='flex text-white items-center justify-center h-screen gap-[119px] '>
					<div className='flex-1'>
						<h1 className='text-[52px] font-semibold mb-[30px]'>
							Welcome Back
						</h1>

						{/* login form */}
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='flex flex-col gap-5'>
								<InputField
									placeholder='Enter your email address'
									name='email'
									type='email'
									errors={errors}
									register={register}
									required={true}
									label='Email address/Phone Number'
								/>
								<InputField
									placeholder='******'
									name='password'
									type='password'
									errors={errors}
									register={register}
									required={true}
									label='Password'
								/>

								<div className=' flex items-center justify-between'>
									<div>
										<input
											type='checkbox'
											name='remember'
											id='remember'
											{...register('remember', { required: true })}
											// className=''
										/>
										<label htmlFor='remember' className='ml-1'>
											Remember me
										</label>
									</div>
									<div className='text-[#F2C852] text-base font-normal'>
										Forgot your password
									</div>
								</div>
							</div>

							<div className='flex items-center gap-2 mt-12'>
								<Button buttonType='imageButton' image={google} className='' />
								<Button
									buttonType='imageButton'
									image={facebook}
									className=''
								/>
								<Button buttonType='imageButton' image={apple} className='' />

								<Button
									buttonType='secondaryButton'
									name='Login'
									className='w-full py-[17px] px-5 '
								>
									<input type='submit' />
								</Button>
							</div>
						</form>
					</div>
					<div className='h-[512px] border-s border-white/10'></div>
					<div className='flex-1'>
						<p className='text-2xl font-medium'>
							Log in to access your Project Packers Platform for order your
							products from any USA website.
						</p>
						<p className='text-base font-normal mt-5'>
							Don’t have an account yet?
							<Link className='text-[#F2C852]' to='/authentication/signup'>
								Sign up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
