import React, { useEffect, useState } from 'react';
import ReloadImg from '../../assets/cd-reload.svg';
import camera from '../../assets/cd-camera.png';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';
import internet from '../../assets/icons/cd-internet.svg';

const CreateReqModal = ({ setShowModal, setShowModal2 }) => {
	const [reqURL, setReqURL] = useState('');
	const [quantity, setQuantity] = useState(0);
	const [productImage, setProductImage] = useState(false);
	const [loggedIn, setLoggedIn] = useState(true);
	const [selectedImage, setSelectedImage] = useState();
	const [previewImage, setPreviewImage] = useState([]);

	useEffect(() => {
		if (!selectedImage) {
			setPreviewImage([]);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedImage);
		setPreviewImage((prev) => [...prev, objectUrl]);

		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedImage]);

	const handleQuantity = (type) => {
		if (type === 'minus' && quantity > 0) {
			setQuantity(quantity - 1);
		}
		if (type === 'plus') {
			setQuantity(quantity + 1);
		}
	};

	const handleChangeRequestURL = (e) => {
		setReqURL(e.target.value);
	};

	const handleFile = (e) => {
		setSelectedImage(e.target.files[0]);
		e.target.value = '';
	};

	/**
	 *
	 * @description - for handling modals
	 */
	const handleSubmit = (e) => {
		e.preventDefault();
		setShowModal(false);
		if (loggedIn) {
			setShowModal2(true);
		}
	};

	return (
		<>
			<div className=' md:w-[596px] md:h-[658px] md:p-[30px] '>
				{/* button */}
				<div className='flex items-center gap-4 justify-start text-base font-semibold'>
					<h1 className='font-semibold text-xl'>Request Item</h1>
					<button
						className={`border text-base px-5 py-[5px] rounded-50 ${
							!productImage && 'bg-[#CFF6EF] '
						}`}
						onClick={() => setProductImage(false)}
					>
						Link
					</button>
					<button
						className={`border text-base px-5 py-[5px] rounded-50 ${
							productImage && 'bg-[#CFF6EF] '
						} `}
						onClick={() => setProductImage(true)}
					>
						Images
					</button>
				</div>
				<hr className='my-2' />

				<form className='space-y-[10px]' onSubmit={handleSubmit}>
					{/* Product Images */}
					<div
						className={`flex ${
							productImage ? 'opacity-100' : 'opacity-0  h-0  '
						} transition-all duration-1000 ease-in-out`}
					>
						<div className='flex max-w-[300]  overflow-x-scroll'>
							{previewImage.map((image, index) => (
								<div
									key={index}
									className={`w-[134px] h-[133px] border rounded-lg flex items-center justify-center relative p-3	`}
								>
									<img
										src={image}
										alt=''
										className='max-w-[123px] min-w-[123px] '
									/>
									<button
										className='p-1 bg-[#CFF6EF] rounded-50 absolute right-2 top-2'
										onClick={(e) => {
											e.preventDefault();
											setPreviewImage(
												previewImage.filter((image, i) => i !== index),
											);
										}}
									>
										<MdOutlineClose />{' '}
									</button>
								</div>
							))}
						</div>

						<div>
							<label
								htmlFor='file'
								className={`cursor-pointer w-[134px] h-[133px] border rounded-lg flex flex-col items-center justify-center`}
							>
								<img src={camera} alt='' />
								<span>Upload Iamage</span>
							</label>
							<input
								type='file'
								name='file'
								id='file'
								onChange={handleFile}
								className={`hidden`}
							/>
						</div>
					</div>

					{/* details */}
					<div
						className={`z-30  ${
							!productImage
								? 'opacity-100  translate-y-0'
								: 'opacity-0  h-0 translate-y-96 '
						} transition-all duration-1000 ease-in-out`}
					>
						{/* Product link */}
						<div className='space-y-[10px] py-2'>
							<label htmlFor='productLink'>Product Link </label>
							<div className='flex items-center gap-1'>
								<div className='w-full flex py-3 px-5 gap-1 rounded-50 items-center text-ellipsis truncate border bg-white'>
									<img src={internet} alt='' />
									<input
										type='search'
										defaultValue={reqURL}
										id='productLink'
										name='productLink'
										onChange={handleChangeRequestURL}
										className='relative m-0 block flex-auto bg-transparent bg-clip-padding text-base font-normal   outline-none placeholder:text-[#000]'
										placeholder='Paste the URL of the product'
									/>
								</div>

								<button>
									<img
										src={ReloadImg}
										alt=''
										className='bg-gray-100 p-3 rounded-full'
									/>
								</button>
							</div>
						</div>

						{/* product name */}
						<div className='space-y-[10px]'>
							<label htmlFor='productName'>Product Name </label>
							<div className='flex items-center gap-1'>
								<div className='w-full flex py-3 px-5 rounded-50 gap-1 items-center text-ellipsis truncate border bg-white'>
									<input
										type='text'
										id='productName'
										name='productName'
										className='relative m-0 block flex-auto bg-transparent bg-clip-padding  text-base font-normal outline-none placeholder:text-[#000]'
										placeholder='Paste the URL of the product'
									/>
								</div>
							</div>
						</div>
					</div>

					{/* quantity */}
					<div className='space-y-[10px]'>
						<label htmlFor='quantity'>Quantity </label>

						<div className='flex items-center gap-5'>
							<div className='flex items-center justify-center gap-2 border py-3 px-5 rounded-50 bg-white w-[182px]'>
								<button
									className='text-base'
									onClick={(e) => {
										e.preventDefault();
										handleQuantity('minus');
									}}
								>
									<AiOutlineMinus />
								</button>
								<input
									type='number'
									readOnly
									value={quantity}
									id='productQuantity'
									name='productQuantity'
									onChange={handleChangeRequestURL}
									className='bg-transparent  text-center text-black text-sm outline-none  font-normal w-24'
								/>
								<button
									className='text-base'
									onClick={(e) => {
										e.preventDefault();
										handleQuantity('plus');
									}}
								>
									<AiOutlinePlus />
								</button>
							</div>

							<p className='font-medium text-base text-gray-400'>
								By{' '}
								<a href='amazon.com' className='underline text-[#6EAFB3]'>
									amazon.com
								</a>
							</p>
						</div>
					</div>

					{/* add a note */}
					<div className='flex flex-col gap-[10px]'>
						<label htmlFor='addNote'>
							Add a note <span>(optional)</span>
						</label>
						<textarea
							name='addNote'
							id='addNote'
							cols='30'
							rows='5'
							className='border outline-none py-3 px-5 rounded-lg'
							placeholder='Specify size, color, model or any instructions here...'
						></textarea>
					</div>

					{/* send requste button */}
					{loggedIn ? (
						<Button
							buttonType='secondaryButton'
							name='Create Request'
							className=' w-full px-xl py-[17px]'
						>
							<input type='submit' />
						</Button>
					) : (
						<Link to='/authentication/login'>
							<Button
								buttonType='secondaryButton'
								name='Login and Request your Item'
								className='w-full py-[17px] px-5'
							/>
						</Link>
					)}
				</form>
			</div>
		</>
	);
};

export default CreateReqModal;
