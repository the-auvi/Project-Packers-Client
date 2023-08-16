import React, { useEffect, useState } from 'react';
import CartCard from '../../components/CartCard/CartCard';
import cart11 from '../../assets/cart1.png';

import './Cart.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { plane } from '../../contexts/terminal/Terminal';

/**
 *
 * @param {boolean} isNavbar - recieve why this component used for. if true then it used for navigation else for page
 * @returns
 */
const Cart = ({ isNavbar }) => {
	const [updatePrice, setUpdatePrice] = useState([]);

	let sellerTakes = 0;
	let tax = 0;
	let fee = 0
	const [cart, setCart] = useState()
	useEffect(() => {
		plane.request({ name: 'getCart' }).then(data => data.id && setCart(data))
	}, [])
	return (
		<div
			className={`wrapper flex flex-col xl:flex-row gap-[30px] ${isNavbar || 'mt-[96px] min-h-screen mb-20'}`}
		>
			<div className={isNavbar ? 'w-full' : 'w-full xl:w-[70%]'}>
				{/* table */}
				<table className={`w-full`}>
					{/* for page */}
					{!isNavbar && (
						// table head
						<thead className='hidden md:table-header-group border-b  '>
							<tr className='text-sm font-semibold text-[#124E58] '>
								<th className='text-start'>Product List</th>
								<th className='text-start'>Quantity</th>
								<th className='text-start'>Price</th>
							</tr>
						</thead>
					)}

					{/* table body */}
					<tbody>
						{cart?.products?.length > 0 && cart?.products?.map((product) => {
							sellerTakes += product?.product?.price
							tax += product?.product?.tax
							fee += product?.product?.fee
							return <CartCard
								key={product?.product?.id}
								setUpdatePrice={setUpdatePrice}
								updatePrice={updatePrice}
								isNavbar={isNavbar}
								ProductQuantity={product?.productQuantity}
								productImg={product?.product?.images[0]}
								price={product?.product?.price + product?.product?.tax + product?.product?.fee}
								productName={product?.product?.name}
							/>
						})}
						{cart?.requests?.length > 0 && cart?.requests?.map((product) => {
							sellerTakes += product?.request?.price
							tax += request?.request?.tax
							fee += request?.request?.fee
							return <CartCard
								key={request?.product?.id}
								setUpdatePrice={setUpdatePrice}
								updatePrice={updatePrice}
								isNavbar={isNavbar}
								ProductQuantity={request?.requestQuantity}
								productImg={request?.request?.images[0]}
								price={request?.request?.price + request?.request?.tax + request?.request?.fee}
								productName={request?.request?.name}
							/>
						})}
						{/* <CartCard
							setUpdatePrice={setUpdatePrice}
							updatePrice={updatePrice}
							isNavbar={isNavbar}
							ProductQuantity={1}
							productImg={cart11}
							price={2}
							productName='1 OUTERBOX COMPUTER SERIES Case for iPhone 12 & iPhone 12 pro'
						/>
						<CartCard
							setUpdatePrice={setUpdatePrice}
							updatePrice={updatePrice}
							isNavbar={isNavbar}
							ProductQuantity={1}
							productImg={cart11}
							price={3}
							productName='2 OUTERBOX COMPUTER SERIES Case for iPhone 12 & iPhone 12 pro'
						/>
						<CartCard
							setUpdatePrice={setUpdatePrice}
							updatePrice={updatePrice}
							isNavbar={isNavbar}
							ProductQuantity={1}
							productImg={cart11}
							price={4}
							productName='3 OUTERBOX COMPUTER SERIES Case for iPhone 12 & iPhone 12 pro'
						/> */}
					</tbody>
				</table>
				{isNavbar || (
					<div className='flex items-center justify-between mt-[26px] w-full lg:w-[70%]'>
						<div>
							<input
								type='text'
								className='w-[250px] rounded-50 outline-none border border-[#000316]/5 ps-5 py-[14px]'
								placeholder='Discount code'
							/>
							<button className='bg-[#CFF6EF] py-3 px-8 rounded-50'>
								Apply
							</button>
						</div>
						<button className='bg-slate-50 py-3 px-8 rounded-50'>
							Update Cart
						</button>
					</div>
				)}
			</div>
			{isNavbar || (
				<div className='xl:flex-1 p-[30px] border rounded-[8px] xl:h-[372px]'>
					<div className=''>
						{/* title */}
						<div className='border-b py-4 text-lg font-medium '>
							Price Details
						</div>
						<div className='border-b'>
							<div className='flex justify-between items-center py-4'>
								<span className='text-start'>Seller Takes</span>
								<span className='text-end'>৳ {sellerTakes} k</span>
							</div>
							<div className='flex justify-between items-center py-4'>
								<span className='text-start'>Seller Takes</span>
								<span className='text-end'>৳ {tax} k</span>
							</div>{' '}
							<div className='flex justify-between items-center py-4'>
								<span className='text-start'>Packers Fee</span>
								<span className='text-end'>৳ {fee} k</span>
							</div>
						</div>
					</div>
					<div className='flex justify-between items-center py-4'>
						<span className='text-start'>Total Price</span>
						<span className='text-end'>৳ {sellerTakes + tax + fee} k</span>
					</div>
					<Link to='/home/checkout'>
						<Button
							buttonType='secondaryButton'
							name='Checkout'
							className='py-12px px-10px w-full'
						></Button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
