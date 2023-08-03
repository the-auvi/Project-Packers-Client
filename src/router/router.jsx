import { createBrowserRouter } from 'react-router-dom';
// import App from "../App";
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Notification from '../pages/Notification/Notification';
import Cart from '../pages/Cart/Cart';
import Blogs from '../pages/Blogs/Blogs';
import Blog from '../pages/Blog/Blog';
import About from '../pages/About/About';
import AuthRoot from '../layout/AuthRoot';
import Login from '../pages/Authentication/Login/Login';
import SignUp from '../pages/Authentication/SignUp/SignUp';
import AccountIdentify from '../pages/Authentication/AcccountIdentify/AccountIdentify';
import Verification from '../pages/Authentication/Verification/Verification';
import NewPass from '../pages/Authentication/NewPass/NewPass';
import FAQsPage from '../pages/Blog/FAQsPage/FAQsPage';
import Checkout from '../pages/Checkout/Checkout';
import MyAccount from '../layout/MyAccount';
import MyAccountOrders from '../pages/MyAccountPage/MyAccountOrders/MyAccountOrders';
import AccountDetails from '../pages/MyAccountPage/AccountDetails/AccountDetails';
import Item from '../pages/Item/Item';
import ConfirmationTemplate from '../Template/ConfirmationTemplate';
import Admin from '../layout/Admin';
import DashBoard from '../pages/About/Admin/Dashboard/DashBoard';
import ItemRequest from '../pages/About/Admin/ItemRequest/ItemRequest';
import AllOrders from '../pages/About/Admin/AllOrders/AllOrders';
import AllProducts from '../pages/About/Admin/AllProducts/AllProducts';
import Discount from '../pages/About/Admin/Discount/Discount';
import Categories from '../pages/About/Admin/Categories/Categories';
import Customers from '../pages/About/Admin/Customers/Customers';
import Support from '../pages/About/Admin/Support/Support';
import Staff from '../pages/About/Admin/Staff/Staff';

export const router = createBrowserRouter([
	{
		path: '/home',
		element: <Root />,
		children: [
			{
				path: '/home',

				element: <Home />,
			},
			{
				path: 'blogs',
				element: <Blogs />,
			},
			{
				path: 'shop',
				element: <Shop />,
			},
			{
				path: 'notification',
				element: <Notification />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'blog/:id',
				element: <Blog />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'faqs',
				element: <FAQsPage />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
			},
			{
				path: 'myAccount',
				element: <MyAccount />,
				children: [
					{
						path: 'orders',
						element: <MyAccountOrders />,
					},
					{
						path: 'accountDetails',
						element: <AccountDetails />,
					},
				],
			},
			{
				path: 'items/:id',
				element: <Item />,
			},

			// TODO: remove this from here
			{
				path: 'template1',
				element: <ConfirmationTemplate />,
			},
		],
	},
	{
		path: '/authentication',
		element: <AuthRoot />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'signup',
				element: <SignUp />,
			},
			{
				path: 'identify',
				element: <AccountIdentify />,
			},
			{
				path: 'verification',
				element: <Verification />,
			},
			{
				path: 'set-password',
				element: <NewPass />,
			},
		],
	},
	{
		path: '/admin',
		element: <Admin />,
		children: [
			{
				path: '/admin',
				element: <DashBoard />,
			},
			{
				path: 'itemRequest',
				element: <ItemRequest />,
			},
			{
				path: 'allOrders',
				element: <AllOrders />,
			},
			{
				path: 'allProducts',
				element: <AllProducts />,
			},
			{
				path: 'discount',
				element: <Discount />,
			},
			{
				path: 'categories',
				element: <Categories />,
			},
			{
				path: 'customers',
				element: <Customers />,
			},
			{
				path: 'support',
				element: <Support />,
			},
			{
				path: 'staff',
				element: <Staff />,
			},
		],
	},
]);
