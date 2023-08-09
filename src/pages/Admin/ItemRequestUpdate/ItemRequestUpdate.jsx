import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import PreviousButtonHeading from '../../../components/PreviousButtonHeading/PreviousButtonHeading';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Delete from '../../../assets/icons/Delete.svg';
import Internet from '../../../assets/icons/cd-internet.svg';
import ImageUpload from '../../../assets/icons/Image-upload.svg';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';

const ItemRequestUpdate = () => {
	const { id } = useParams();

	const [singleItem, setSingleItem] = useState();
	const [quantity, setQuantity] = useState(0);

	const [axiosSecure] = useAxiosSecure();

	useEffect(() => {
		axiosSecure.get(`/request/${id}/`).then((res) => {
			console.log(res.data);
		});
	}, []);

	// quantity changes
	const handleQuantity = (type) => {
		if (type === 'minus' && quantity > 0) {
			setQuantity(quantity - 1);
		}
		if (type === 'plus') {
			setQuantity(quantity + 1);
		}
	};

	return (
		<div>
			{/* Heading */}
			<div className='p-[20px_0]  border-b w-full flex justify-between items-center'>
				<PreviousButtonHeading id={id} buttonName='Back to item request' />
				<div className='flex gap-4'>
					<button className='flex items-center gap-2'>
						<img src={Delete} alt='' /> Delete
					</button>
					<Button
						buttonType='secondaryButton'
						name='Update'
						className='rounded-[5px]'
					/>
				</div>
			</div>

			<div className='flex gap-4 items-start mt-5'>
				{/* Item details */}
				<div className='w-4/6 flex flex-col gap-4'>
					{/* Item images and quantity */}
					<div className='border rounded-lg '>
						<div className='p-5'>
							<h2 className='pb-5 text-base font-semibold'>Request Items</h2>

							{/* search */}
							<div className='flex gap-[10px] py-5'>
								<div
									className={`w-auto md:w-full lg:w-full flex px-3 items-center text-ellipsis truncate rounded border bg-transparent border-slate-200  `}
								>
									{/* search Icon */}
									<img src={Internet} alt='' />

									{/* search input */}
									<input
										type='search'
										className='relative m-0 block flex-auto bg-transparent bg-clip-padding ps-3 py-[0.25rem] text-base font-normal leading-[1.6] text-slate-600 outline-none placeholder:text-slate-600'
										placeholder='Search'
									/>
								</div>
								<button className='py-2 px-4 border rounded'>Go</button>
							</div>

							{/* Quantity */}
							<div className='flex items-center gap-[22px]'>
								<label htmlFor='quantity' className='text-sm font-semibold '>
									Quantity
								</label>
								<div className='flex items-center justify-center gap-2 border py-3 px-5  bg-white w-[182px]'>
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
										id='quantity'
										name='quantity'
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
							</div>

							{/* products images */}
							<div className='pt-5'>
								<h2 className='pb-3 text-sm font-semibold'>Product images</h2>

								<div className='flex items-center gap-3'>
									<div
										className={`cursor-pointer w-[134px] h-[133px] border rounded-lg flex flex-col items-center justify-center`}
									>
										images
									</div>
									<div>
										<label
											htmlFor='file'
											className={`cursor-pointer w-[134px] h-[133px] border rounded-lg flex flex-col items-center justify-center`}
										>
											<img src={ImageUpload} alt='' />
											<span>Upload Iamage</span>
										</label>
										<input
											type='file'
											name='file'
											id='file'
											// onChange={handleFile}
											className={`hidden`}
										/>
									</div>
								</div>
							</div>
						</div>
						<hr />
						{/* note */}
						<div className='p-5'>
							<h2 className='t mb-3 flex w-full justify-between '>
								<p className='ext-sm font-semibold'>Note</p>
								<button className='text-[#3E949A]'>Edit</button>
							</h2>
							<div>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
								beatae voluptate officiis tempore voluptatibus iste nam culpa
								libero aspernatur esse.
							</div>
						</div>
					</div>
					{/* payment */}
					<div className=' border rounded-lg '>
						<div className='p-5 flex flex-col gap-4'>
							<h2 className='pb-5 text-base font-semibold'>Payment</h2>

							{/* seller takes */}
							<div className='flex items-center justify-between w-full'>
								<label
									htmlFor='sellerTakes'
									className='text-sm font-normal text-slate-600'
								>
									Seller Takes
								</label>
								<input
									type='number'
									id='sellerTakes'
									name='sellerTakes'
									className=' border outline-none text-end p-2'
								/>
							</div>

							{/* US sales tax  */}
							<div className='flex items-center justify-between w-full'>
								<label
									htmlFor='tax'
									className='text-sm font-normal text-slate-600'
								>
									US sales tax
								</label>
								<input
									type='number'
									id='tax'
									name='tax'
									className=' border outline-none text-end p-2'
								/>
							</div>

							{/* packers fee */}
							<div className='flex items-center justify-between w-full'>
								<label
									htmlFor='fee'
									className='text-sm font-normal text-slate-600'
								>
									Packers Fee
								</label>
								<input
									type='number'
									id='fee'
									name='fee'
									className=' border outline-none text-end p-2'
								/>
							</div>

							{/* total */}
							<div className='flex items-center justify-between w-full'>
								<h3 className='text-sm font-semibold'>Total</h3>
								<p>Total</p>
							</div>
						</div>
						<hr />
						<div className='flex justify-end gap-4 w-full p-5'>
							<button className='py-2 px-4 border rounded'>Cancel</button>
							<Button
								buttonType='secondaryButton'
								name='Send Invoice'
								className='rounded-[5px]'
							></Button>
						</div>
					</div>
				</div>
				<div className='w-1/3 border rounded-lg text-sm font-medium text-slate-600'>
					<div className='space-y-5 p-5'>
						<h2 className='text-base font-semibold text-[#0D3D4B]'>Customer</h2>
						<div>
							<p className=' text-[#3E949A] underline mb-2'>Pujon Das Auvi</p>
							<p className=''>No orders</p>
						</div>
					</div>

					<hr />
					<div className='space-y-2 p-5'>
						<h2 className='flex items-center justify-between w-full'>
							<p className='text-base font-semibold text-[#0D3D4B]'>
								Contact Information
							</p>
							<button className='text-[#3E949A]'>Edit</button>
						</h2>
						<p className='text-[#3E949A]'>pujon_das@coredevs.ltd</p>
						<p>No phone number</p>
					</div>
					<hr />

					<div className='space-y-2 p-5'>
						<h2 className='flex items-center justify-between w-full'>
							<p className='text-base font-semibold text-[#0D3D4B]'>
								Shipping Address
							</p>
							<button className='text-[#3E949A]'>Edit</button>
						</h2>

						<p>No Address</p>
					</div>
					<hr />
					<div className='space-y-2 p-5'>
						<h2 className='flex items-center justify-between w-full'>
							<p className='text-base font-semibold text-[#0D3D4B]'>
								Billing Address
							</p>
							<button className='text-[#3E949A]'>Label</button>
						</h2>

						<p>No Address</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemRequestUpdate;
