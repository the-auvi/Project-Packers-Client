import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../container/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import TitleBar from '../components/TitleBar/TitleBar';

const Root = () => {
	const { pathname } = useLocation();
	console.log(pathname);
	const title = pathname !== '/home' && pathname !== '/home/';
	console.log(title);

	return (
		<>
			<Navbar />

			{title && <TitleBar />}

			<Outlet />
			<Footer />
		</>
	);
};

export default Root;
