import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user/UserContext';

const ProtectedRouter = ({ children }) => {
	const { data: user } = useContext(UserContext);

	const navigate = useNavigate();
	const location = useLocation().pathname;
	console.log(!user.isLoading);

	console.log(location);
	if (user.isLoading) {
		return (
			<div className='text-9xl text-blue-700 font-extrabold'>it's coming</div>
		);
	}

	console.log(!user.user.id);

	if (!user.user.id) {
		console.log('logout');
		//  navigate('/authentication/login');
		return (
			<Navigate to='/authentication/login' state={{ location }}></Navigate>
		);
	}

	return <div>{children}</div>;
};

export default ProtectedRouter;
