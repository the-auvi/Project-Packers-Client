import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSIdebar from '../container/AdminSidebar/AdminSIdebar';
import Navbar from '../container/Navbar/Navbar';

const Admin = () => {
	return (
		<div className='wrapper'>
			<Navbar />
			<div className='flex'>
				<AdminSIdebar />
				<Outlet />
			</div>
		</div>
	);
};

export default Admin;
