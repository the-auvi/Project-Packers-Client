import React from 'react';
import Brands from '../../container/HomeContainer/Brands/Brands';
import Header from '../../container/HomeContainer/Header/Header';
import PackersWorks from '../../container/HomeContainer/PackersWorks/PackersWorks';
// import Header from '../../container/HomeContainer/Header/Header';
import TrendingProducts from '../../container/HomeContainer/TrendingProducts/TrendingProducts';
import FAQsPage from '../Blog/FAQsPage/FAQsPage';

const Home = () => {
	return (
		<div>
			<Header />

			<Brands />

			<TrendingProducts />

			<PackersWorks />

			<FAQsPage />
		</div>
	);
};

export default Home;
