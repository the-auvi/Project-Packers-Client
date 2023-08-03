import React from 'react';
import { NavLink } from 'react-router-dom';

import './AdminSidebar.css';

const AdminSIdebar = () => {
	return (
		<div className='adminSidebar w-[232px] mt-[30px] text-base text-[#0D3D4B] font-medium '>
			<div className=' flex flex-col  '>
				<NavLink
					activeclassname='active-link'
					end={true}
					to={`/admin`}
					className='p-[8px_12px]'
				>
					<div className='left-side'>
						<span className='yellow-bg'> </span>
						<span className='white-bg'> </span>
					</div>
					<div className='nav-content'>Dashboard</div>
				</NavLink>
				<ul className='flex flex-col'>
					Order
					<NavLink
						end={true}
						to={`/admin/itemRequest`}
						className='p-[8px_12px]'
					>
						<div className='left-side'>
							<span className='yellow-bg'> </span>
							<span className='white-bg'> </span>
						</div>
						<div className='nav-content'>Item request</div>
					</NavLink>
					<NavLink
						activeClassName='active-link'
						end={true}
						to={`/admin/allOrders`}
						className='p-[8px_12px]'
					>
						<div className='left-side'>
							<span className='yellow-bg'> </span>
							<span className='white-bg'> </span>
						</div>
						<div className='nav-content'>All Orders</div>
					</NavLink>
				</ul>
				<ul className='flex flex-col'>
					Products
					<NavLink
						end={true}
						to={`/admin/allProducts`}
						className='p-[8px_12px]'
					>
						<div className='left-side'>
							<span className='yellow-bg'> </span>
							<span className='white-bg'> </span>
						</div>
						<div className='nav-content'>All Products</div>
					</NavLink>
					<NavLink
						activeClassName='active-link'
						end={true}
						to={`/admin/discount`}
						className='p-[8px_12px]'
					>
						<div className='left-side'>
							<span className='yellow-bg'> </span>
							<span className='white-bg'> </span>
						</div>
						<div className='nav-content'>Add Product</div>
					</NavLink>
				</ul>
				<NavLink
					activeClassName='active-link'
					end={true}
					to={`/admin/categories`}
					className='p-[8px_12px]'
				>
					<div className='left-side'>
						<span className='yellow-bg'> </span>
						<span className='white-bg'> </span>
					</div>
					<div className='nav-content'>Customers</div>
				</NavLink>
				<NavLink
					activeClassName='active-link'
					end={true}
					to={`/admin/support`}
					className='p-[8px_12px]'
				>
					<div className='left-side'>
						<span className='yellow-bg'> </span>
						<span className='white-bg'> </span>
					</div>
					<div className='nav-content'>Support</div>
				</NavLink>
				<NavLink
					activeClassName='active-link'
					end={true}
					to={`/admin/staff`}
					className='p-[8px_12px]'
				>
					<div className='left-side'>
						<span className='yellow-bg'> </span>
						<span className='white-bg'> </span>
					</div>
					<div className='nav-content'>Staff</div>
				</NavLink>
			</div>
		</div>
	);
};

export default AdminSIdebar;
