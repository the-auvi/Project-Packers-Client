import React from 'react';

const ProductPricing = () => {
	return (
		<div className='w-full p-3 rounded-lg border flex gap-3'>
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
		</div>
	);
};

export default ProductPricing;
