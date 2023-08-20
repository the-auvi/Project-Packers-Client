import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';

// import Internet from "../../../../../"

// TODO: Make search component and quantity

const OrderProductsUpdate = ({ isEdit, setIsEdit, register }) => {
	const [searchURL, setSearchURL] = useState(null);
	const [quantity, setQuantity] = useState(0);

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
			<div className='border rounded-lg '>
				<div className='p-5'>
					<div className='flex justify-between w-full'>
						<h2 className='pb-5 text-base font-semibold'>Request Items</h2>
						<p className='text-[#3E949A]'>Add custom item</p>
					</div>

					{/* search */}
					<div className='flex gap-[10px] py-5'>
						<div
							className={`w-auto md:w-full lg:w-full flex px-3 items-center text-ellipsis truncate rounded border bg-transparent border-slate-200  `}
						>
							{/* search Icon */}
							<AiOutlineSearch />
							{/* search input */}
							<input
								type='url'
								className='relative m-0 block flex-auto bg-transparent bg-clip-padding ps-3 py-[0.25rem] text-base font-normal leading-[1.6] text-slate-600 outline-none placeholder:text-slate-600'
								placeholder='Search'
								{...register('search', {
									onChange: (e) => {
										setSearchURL(e.target.value);
									},
								})}
							/>
						</div>
						<Link to={searchURL} className='py-2 px-4 border rounded'>
							Browser
						</Link>
					</div>
				</div>
				{/* Products table */}
				<div>
					<table className='w-full'>
						<thead className='w-full'>
							<tr className='border-b  '>
								<th className='text-start px-5 py-2'>Product</th>
								<th className='text-start'>Quantity</th>
								<th className='text-start'>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr className='border-b'>
								{/* product name */}
								<td className='flex gap-5 items-center p-5'>
									<img src='' alt='image' className='w-10 h-10 border' />
									<div>
										<p>AeroPress Go Brewer</p>
										<p>11tk</p>
									</div>
								</td>

								{/* quantity */}
								<td>
									<div className='flex items-center justify-center gap-1 border py-3 px-5  bg-white w-[122px]'>
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
											{...register('quantity', { value: quantity })}
											id='quantity'
											name='quantity'
											className='bg-transparent  text-center text-black text-sm outline-none  font-normal w-16'
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
								</td>

								{/* total */}
								<td className='flex items-center gap-1'>
									<span>10tk</span>
									<button>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
										>
											<path
												d='M19 5L5 19'
												stroke='#94A3B8'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
											<path
												d='M5 5L19 19'
												stroke='#94A3B8'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</button>
								</td>
							</tr>

							<tr className='border-b'>
								{/* product name */}
								<td className='flex gap-5 items-center p-5'>
									<img src='' alt='image' className='w-10 h-10 border' />
									<div>
										<p>AeroPress Go Brewer</p>
										<p>11tk</p>
									</div>
								</td>

								{/* quantity */}
								<td>
									<div className='flex items-center justify-center gap-1 border py-3 px-5  bg-white w-[122px]'>
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
											{...register('quantity', { value: quantity })}
											id='quantity'
											name='quantity'
											className='bg-transparent  text-center text-black text-sm outline-none  font-normal w-16'
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
								</td>

								{/* total */}
								<td className='flex items-center gap-1'>
									<span>10tk</span>
									<button>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
										>
											<path
												d='M19 5L5 19'
												stroke='#94A3B8'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
											<path
												d='M5 5L19 19'
												stroke='#94A3B8'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default OrderProductsUpdate;
