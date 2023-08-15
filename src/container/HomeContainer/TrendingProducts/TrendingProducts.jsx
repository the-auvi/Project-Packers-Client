import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Headings from '../../../components/Headings/Headings';
import ProductsCard from '../../../components/ProductsCard/ProductsCard';
import Button from '../../../components/Button/Button';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const TrendingProducts = () => {
	const [tProducts, setTProducts] = useState();

	const [axiosSecure] = useAxiosSecure([]);

	const baseURL = axiosSecure.getUri();

	useEffect(() => {
		axiosSecure.get('products').then((res) => {
			// console.log(res.data.docs.slice(0,8))

			console.log(res.data.docs);

			setTProducts(res.data.docs.slice(0, 8));
		});
	}, []);

	// console.log()
	// console.log('trendinf', tProducts);
	return (
		<div>
			<div className='wrapper'>
				<Headings
					title='Trending products on  Project Packers'
					subTitle='Get inspired by what people in your city are buying from abroad with the biggest savings'
				/>

				<div className='grid py-[1px] justify-items-center px-0 grid-cols-2 md:grid-cols-4  bg-gray-500 gap-[1px]'>
					{tProducts &&
						tProducts.map((product, index) => {
							const { id, images, price, description } = product;

							console.log('id', id, images, price);

							return (
								<Link
									to={`/home/items/${product.id}`}
									state={{ item: product, baseURL: baseURL }}
									className=''
									key={id}
								>
									<ProductsCard
										baseURL={baseURL}
										img={images[0]}
										title={description}
										price={price}
									/>
								</Link>
							);
						})}
				</div>

				<div className='flex items-center justify-center my-5'>
					<Link to='/home/shop'>
						{' '}
						<Button
							buttonType='secondaryButton'
							name='View more items'
							className='py-[14px] px-[20px]'
							icon={<BsArrowRight />}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TrendingProducts;
