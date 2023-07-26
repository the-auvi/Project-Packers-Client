import React from 'react';
import Brands from '../../container/HomeContainer/Brands/Brands';
import Header from '../../container/HomeContainer/Header/Header';
import HomeFAQs from '../../container/HomeContainer/HomeFAQs/HomeFAQs';
import PackersWorks from '../../container/HomeContainer/PackersWorks/PackersWorks';
// import Header from '../../container/HomeContainer/Header/Header';
import TrendingProducts from '../../container/HomeContainer/TrendingProducts/TrendingProducts';

const Home = () => {
	
	return (
		<div>
			<Header />
 
			<Brands />

			<TrendingProducts/>

			<PackersWorks/>

			<HomeFAQs/>
 


			
		</div>
	);
};

export default Home;
