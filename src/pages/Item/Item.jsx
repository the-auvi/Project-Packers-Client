import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import moneyBack from '../../assets/icons/money-back.svg';
import Headings from '../../components/Headings/Headings';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import ProductsCard from '../../components/ProductsCard/ProductsCard';

const Item = () => {
	const { id } = useParams();

	const products = useLocation()?.state?.item;
	const baseURL = useLocation()?.state?.baseURL;
	// console.log(products);

	const {
		category,
		description,
		images,
		link,
		origin,
		price,
		productName,
		quantity,
		status,
		tags,
	} = products;

	const [fullImage, setFullImage] = useState(images[0]);

	const [RelatedProducts, setRelatedProducts] = useState();

	const [axiosSecure] = useAxiosSecure([]);

	useEffect(() => {
		axiosSecure.get('products').then((res) => {
			// console.log(res.data.docs.slice(0,8))

			setRelatedProducts(res.data.docs.slice(0, 8));
		});
	}, []);

	return (
		<>
			<div className='wrapper mt-12'>
				{/* upper content */}
				<div className='flex flex-col md:flex-row gap-[30px]'>
					<div className='w-full md:w-4/6 '>
						{/* for image */}
						<div className='grid grid-cols-12 gap-0 md:gap-[30px]'>
							{/* all images */}
							<div className='col-span-3  flex flex-col gap-5 items-center justify-center'>
								{images.map((image, index) => {
									return (
										<button
											key={index}
											onClick={() => setFullImage(image)}
											className={`active:scale-90 transition-all duration-200 border rounded-xl focus:border-[#6BCCCB] outline-none`}
										>
											<img
												src={` ${baseURL + image}`}
												className='w-[73px] h-[73px] md:w-[177px] md:h-[177px] border rounded-xl '
											/>
										</button>
									);
								})}
							</div>
							{/* preview image */}
							<div className='col-span-9  border rounded-xl flex items-center justify-center'>
								<img
									src={baseURL + fullImage}
									className=' md:w-[480px] md:h-[480px] rounded-xl'
								/>
							</div>
						</div>
					</div>

					{/* product info */}
					<div className='w-full md:w-1/3 border rounded-lg h-fit px-5 pb-[55px] text-slate-600 text-lg font-medium'>
						{/* product price */}
						<div className='flex items-center justify-between py-4 border-b'>
							<p className=' '>Product Price</p>
							<p className='text-[#0D3D4B] text-2xl font-bold'>$400</p>
						</div>

						{/* Product from */}
						<div className='py-4'>
							<p>Product from</p>
							<p className='text-black '>United state of America</p>
						</div>

						{/* Where to buy */}
						<div className='pb-4'>
							<p>Where to buy</p>
							<a
								href='https://www.apple.com/'
								target='_blank'
								className='text-[#3E949A]'
							>
								apple.com
							</a>
						</div>

						{/* approx delivery */}
						<div className='flex justify-between items-center pb-4'>
							<p>Approx Delivery</p>
							<p className='text-black'>1-2 weeks</p>
						</div>

						{/* button */}
						<Button
							buttonType='secondaryButton'
							name='Request this item'
							className={`p-[12px_10px] w-full mt-5 mb-12`}
						/>

						{/* guarantee */}
						<div className='py-4'>
							<p className='flex items-center gap-1 text-[#0D3D4B] font-semibold'>
								<img src={moneyBack} alt='' />
								100% Money Back Guarantee
							</p>
							<p className='text-base'>
								Project Packers protects your payment until you confirm you
								received your order.
							</p>
						</div>
					</div>
				</div>

				{/* description */}
				<div className='mt-12 w-full md:w-4/6  `'>
					<p className='text-[28px] font-semibold text-[#0D3D4B] mb-4'>
						iPad Air 64Gb Wi-Fi Space Gray
					</p>
					<p className='text-base font-normal text-slate-600'>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
						ullamco est sit aliqua dolor do amet sint. Velit officia consequat
						duis enim velit mollit. Exercitation
						<br />
						<br />
						veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
						ullamco est sit aliqua dolor do amet sint. Velit officia consequat
						duis enim velit mollit. Exercitation veniam consequat sunt nostrud
						amet.Exercitation veniam consequat sunt nostrud amet.
					</p>
				</div>
				{/* lower content */}
				<div className='my-12 md:my-[148px]'>
					<Headings
						title='Related Items'
						subTitle='Get inspired by what people in your city are buying from abroad with the biggest savings'
					/>
					<div className='flex items-center overflow-x-scroll gap-[1px] border-y bg-gray-400 '>
						{RelatedProducts?.map((product, index) => (
							<ProductsCard
								key={product.id}
								baseURL={baseURL}
								img={product.images[0]}
								title={product.productName}
								price={product.price}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Item;
