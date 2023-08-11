import React from 'react';
import PreviousButtonHeading from '../../../components/PreviousButtonHeading/PreviousButtonHeading';
import ProductDescription from '../../../container/AdminContainer/AddOrUpdateProductsContainer/productDescription/ProductDescription';

const AddOrUpdateProducts = () => {
	return (
		<div>
			<div className='p-[20px_0]  border-b w-full flex justify-between items-center'>
				<PreviousButtonHeading
					name='Add new product'
					buttonName='Back to item request'
				/>
			</div>
			<div className='flex items-start gap-5 mt-5'>
				{/* right side */}
				<div className='flex-1'>
					{/* description */}
					<h2 className='text-[#0D3D4B] text-base font-semibold mb-3'>
						Description
					</h2>

					<ProductDescription />
				</div>

				{/* left side */}
				<div className='flex-1'>
					<h2 className='text-[#0D3D4B] text-base font-semibold'>
						Product Image
					</h2>
				</div>
			</div>
		</div>
	);
};

export default AddOrUpdateProducts;
