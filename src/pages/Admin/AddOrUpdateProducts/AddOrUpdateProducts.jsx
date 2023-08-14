import React from 'react';
import { useForm } from 'react-hook-form';
import PreviousButtonHeading from '../../../components/PreviousButtonHeading/PreviousButtonHeading';
import ProductCategory from '../../../container/AdminContainer/AddOrUpdateProductsContainer/productCategory/ProductCategory';
import ProductDescription from '../../../container/AdminContainer/AddOrUpdateProductsContainer/productDescription/ProductDescription';
import ProductImages from '../../../container/AdminContainer/AddOrUpdateProductsContainer/ProductImage/ProductImages';
import ProductPricing from '../../../container/AdminContainer/AddOrUpdateProductsContainer/ProductPricing/ProductPricing';
import internet from '../../../assets/icons/cd-internet.svg';
const AddOrUpdateProducts = () => {
	const { handleSubmit, register } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div>
			<div className='p-[20px_0]  border-b w-full flex justify-between items-center'>
				<PreviousButtonHeading
					name='Add new product'
					buttonName='Back to item request'
				/>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex items-start gap-5 mt-5'
			>
				{/* right side */}
				<div className='flex-1'>
					{/* description */}
					<>
						<h2 className='text-[#0D3D4B] text-base font-semibold mb-3'>
							Description
						</h2>

						<ProductDescription register={register} />
					</>

					{/* category */}
					<>
						<h2 className='text-[#0D3D4B] text-base font-semibold my-3'>
							Category
						</h2>
						<ProductCategory />
					</>
				</div>

				{/* left side */}
				<div className='flex-1'>
					{/* Product Image  */}
					<>
						<h2 className='text-[#0D3D4B] text-base font-semibold mb-3'>
							Product Image
						</h2>
						<ProductImages register={register} />
					</>

					{/* product price */}
					<>
						<h2 className='text-[#0D3D4B] text-base font-semibold mb-3'>
							Pricing
						</h2>
						<ProductPricing />
					</>

					{/* product link */}

					<>
						<h2 className='text-[#0D3D4B] text-base font-semibold my-3'>
							Product link (Only admin can show this link)
						</h2>

						<div className='w-full p-3 rounded-lg border '>
							<label
								htmlFor='productName'
								className='text-sm font-normal text-slate-600'
							>
								Product Category
							</label>
							<div className='space-y-[10px] py-2'>
								<div className='flex items-center gap-1'>
									<div className='w-full flex py-3 px-5 gap-1 rounded-sm items-center text-ellipsis truncate border bg-white'>
										<img src={internet} alt='' />
										<input
											type='search'
											// defaultValue={reqURL}
											id='productLink'
											name='productLink'
											// onChange={handleChangeRequestURL}
											className='relative m-0 block flex-auto bg-transparent bg-clip-padding text-base font-normal   outline-none placeholder:text-[#000]'
											placeholder='Paste the URL of the product'
										/>
									</div>
								</div>
							</div>
						</div>
					</>
					{/* buttons */}
					<div className='flex gap-2 items-center justify-between mt-3'>
						<button className='p-[8px_16px] border rounded '>Discard</button>

						<div className='flex gap-3'>
							<button className='p-[8px_16px] border rounded '>Draft</button>
							<button className='p-[8px_16px] border rounded bg-[#F2C852]'>
								Publish
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddOrUpdateProducts;
