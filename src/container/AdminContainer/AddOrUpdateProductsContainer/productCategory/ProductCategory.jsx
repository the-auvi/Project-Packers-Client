import React from 'react';

const ProductCategory = () => {
	return (
		<div className='w-full p-3 rounded-lg border'>
			{/* product category */}
			<div className='mb-2'>
				<label
					htmlFor='productName'
					className='text-sm font-normal text-slate-600'
				>
					Product Category
				</label>
				<input
					type='text'
					className='w-full py-2 px-3 border rounded outline-none'
					id='productName'
				/>
			</div>

			{/* subCategory */}
			<div className='mb-2'>
				<label
					htmlFor='productName'
					className='text-sm font-normal text-slate-600'
				>
					Sub Category
				</label>
				<input
					type='text'
					className='w-full py-2 px-3 border rounded outline-none'
					id='productName'
				/>
			</div>

			{/* tags */}
			<div className='mb-2'>
				<label
					htmlFor='productName'
					className='text-sm font-normal text-slate-600'
				>
					Tags
				</label>
				<input
					type='text'
					className='w-full py-2 px-3 border rounded outline-none'
					id='productName'
				/>
			</div>
		</div>
	);
};

export default ProductCategory;
