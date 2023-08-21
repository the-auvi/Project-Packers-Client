import React, { useState } from 'react';
import headerImg from '../../../assets/header.png';
import { BsCheck2Circle } from 'react-icons/bs';
import Slider from '../../../components/Slider/Slider';
import Modal from '../../../components/Modal/Modal';
import CreateReqModal from '../../Modal/CreateReqModal';
import Button from '../../../components/Button/Button';
import ReqSuccessful from '../../Modal/ReqSuccessful';
import { useLocation, useSearchParams } from 'react-router-dom';

const Header = () => {
	const [reqURL, setReqURL] = useState('');
	const [showModal, setShowModal] = useState(false);

	const reqModal = useLocation()?.state;
	const [showModal2, setShowModal2] = useState(reqModal);

	// console.log('reqModal', showModal2);

	const handleChangeRequestURL = (e) => {
		setReqURL(e.target.value);
	};

	return (
		<header className='bg-[#0D3D4B]   text-white mb-80 '>
			<div className='wrapper md:h-[759px] relative  flex justify-between items-center flex-col lg:flex-row pt-8'>
				<div className='space-y-4'>
					{/* title */}
					<div className='text-[32px] md:text-[52px] font-bold'>
						Shop product from USA <br /> and save up to 40%
					</div>

					{/* sub title */}
					<div className='text-xl font-medium'>
						Thousands of deals on gadgets,shoes, <br /> watches- everything from
						US
					</div>

					{/* search */}
					<div className='flex flex-col gap-2 md:gap-0 md:flex-row'>
						<div className='mr-3 w-auto md:w-2/3 flex px-[5px] sm:px-[20px] py-[5px] sm:py-[15px] items-center text-ellipsis truncate border rounded-50 bg-white'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
									className='h-5 w-5 text-[#F2C852]'
								>
									<path
										fillRule='evenodd'
										d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
										clipRule='evenodd'
									/>
								</svg>
							</span>

							<input
								type='search'
								onChange={handleChangeRequestURL}
								className='relative m-0 block flex-auto bg-transparent bg-clip-padding ps-3 py-[0.25rem] text-base font-normal leading-[1.6] text-[#124E58] outline-none placeholder:text-[#d0d3d3]'
								placeholder='Paste the URL of the product'
							/>
						</div>

						{/* modal opening button */}
						<Button
							buttonType='secondaryButton'
							name='Create Request'
							onClick={() => {
								setShowModal(true);
							}}
							className='py-[10px] sm:py-[17px]'
						/>
					</div>
					{/* modal */}
					<Modal showModal={showModal} setShowModal={setShowModal}>
						<CreateReqModal
							reqURL={reqURL}
							setReqURL={setReqURL}
							setShowModal={setShowModal}
							setShowModal2={setShowModal2}
						/>
					</Modal>
					{/* features in header */}
					<div className=' hidden md:flex gap-4 w-96'>
						<div className='flex items-start my-10  '>
							<BsCheck2Circle className='text-yellow-300 text-2xl' />
							Recive your product in 1-2 weeks
						</div>
						<div className='flex items-start  my-10'>
							<BsCheck2Circle className='text-yellow-300 text-2xl' />
							Deliverd by verifie trusted travelers
						</div>
					</div>
				</div>

				{/* header image */}
				<img
					src={headerImg}
					className='mb-20 md:max-w-[668px] max-w-[308px]'
				/>

				{/* slider for youtube video */}
				<div className='wrapper absolute left-0 right-0 md:-bottom-[23.5rem] -bottom-[25rem]  overflow-x-scroll'>
					<Slider />
				</div>
			</div>

			{/*  */}
			{/* confirmation modal after create request */}
			<Modal
				requestModal={true}
				showModal={showModal2}
				setShowModal={setShowModal2}
			>
				<ReqSuccessful />
			</Modal>
		</header>
	);
};

export default Header;
