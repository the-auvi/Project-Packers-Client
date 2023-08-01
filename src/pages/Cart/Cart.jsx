import React, { useState } from 'react';
import CartCard from '../../components/CartCard/CartCard';
import cart11 from '../../assets/cart1.png';

import './Cart.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

/**
 *
 * @param {boolean} isNavbar - recieve why this component used for. if true then it used for navigation else for page
 * @returns
 */
const Cart = ({ isNavbar }) => {
	const [updatePrice, setUpdatePrice] = useState([]);

	const totalPackagePrice = updatePrice.reduce(
		(total, item) => total + item.productPrice,
		0,
	);

	const sellerTakes = 22993;
	const USsalesTax = 234;
	const totalPrice = sellerTakes + USsalesTax + totalPackagePrice;

	return (
		<div
			className={`wrapper flex gap-[30px] ${isNavbar || 'mt-[96px] h-screen'}`}
		>
			<div className=' '>
				{/* table */}
				<table className={`${isNavbar || 'w-[803px] '}`}>
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
						<CartCard
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
						/>
					</tbody>
				</table>
				{isNavbar || (
					<div className='flex items-center justify-between mt-[26px]'>
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
				<div className='flex-1 p-[30px] border rounded-[8px] h-[372px] w-[387px]'>
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
								<span className='text-end'>৳ {USsalesTax} k</span>
							</div>{' '}
							<div className='flex justify-between items-center py-4'>
								<span className='text-start'>Packers Fee</span>
								<span className='text-end'>৳ {totalPackagePrice} k</span>
							</div>
						</div>
					</div>
					<div className='flex justify-between items-center py-4'>
						<span className='text-start'>Total Price</span>
						<span className='text-end'>৳ {totalPrice} k</span>
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
