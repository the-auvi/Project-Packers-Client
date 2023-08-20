import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import TableFunctions1 from '../../../components/TableFunctions1/TableFunctions1';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const buttons = [
	{
		name: 'All',
		value: 'all',
	},
	{
		name: 'New',
		value: 'new',
	},
	{
		name: 'Returning',
		value: 'returning',
	},
	{
		name: 'Abandoned Checkouts',
		value: 'abandonedCheckouts',
	},
];

const Customers = () => {
	const [selectedButton, setSelectedButton] = useState('all');
	const [searchId, setSearchId] = useState(null);
	const [products, setProducts] = useState();
	const [page, setPage] = useState(1);

	const navigate = useNavigate();

	const [axiosSecure] = useAxiosSecure();
	const baseURL = axiosSecure.getUri();

	const handleChangeSearch = (e) => {
		setSearchId(e.target.value);
	};

	const handleClick = (e) => {
		console.log(e.target.value);
		setSelectedButton(e.target.value);
	};

	let url;

	if (selectedButton === 'all' && !searchId) {
		url = `products?`;
	} else if (selectedButton !== 'all' && !searchId) {
		url = `products?status=${selectedButton}`;
	} else if (selectedButton !== 'all' && searchId) {
		url = `products?status=${selectedButton}&id=${searchId}`;
	} else if (selectedButton === 'all' && searchId) {
		url = `products?id=${searchId}`;
	}

	useEffect(() => {
		axiosSecure.get(`${url}&page=${page}`).then((res) => {
			setProducts(res.data.docs);
		});
	}, [url]);

	return (
		<div>
			{/* title */}
			<div className='flex items-center justify-between border-b'>
				<h2 className='p-[20px_0]   w-full text-[#0D3D4B] text-xl font-semibold'>
					Customers
				</h2>

				<>
					<button className='p-[8px_16px]'> Export</button>

					<Link to='/admin/newCustomer'>
						<Button
							buttonType='secondaryButton'
							name='Add Customers'
							className='rounded-[5px] w-[150px] '
						/>
					</Link>
				</>
			</div>

			{/* table function */}
			<TableFunctions1
				buttons={buttons}
				onClick={handleClick}
				onChange={handleChangeSearch}
				selectedButton={selectedButton}
			/>

			{/* Table */}
			<div>
				<table className='w-full'>
					<thead>
						<tr className=' border-y bg-slate-50 text-slate-600'>
							<th className='text-start p-[10px_16px]'>
								<input type='checkbox' name='' id='' />
							</th>
							<th className='text-start p-[10px_16px]'>Customers name</th>
							<th className='text-start p-[10px_16px]'>Phone number</th>
							<th className='text-start p-[10px_16px]'>Location</th>
							<th className='text-start p-[10px_16px]'>Orders</th>
							<th className='text-start p-[10px_16px]'>Amount Spent</th>
						</tr>
					</thead>
					<tbody>
						{products &&
							products.map((product) => (
								<tr
									key={product.id}
									className='border-b py-[180px] hover:bg-[#FEF9DC]'
								>
									<td className='p-[18px_16px] flex gap-2 '>
										<input type='checkbox' name='' id='' />
										<img
											src={`${baseURL + product.images[0]}`}
											alt=''
											className='w-12 h-12 rounded'
										/>
										{/* <img
											src={`http://localhost:4000/api/images/0a8637dfbdc44744e72e7f9de3087bed.jpg`}
											alt=''
										/> */}
									</td>
									<td
										onClick={(e) => {
											e.preventDefault();
											navigate(`/admin/customerUpdate/${product.id}`, {
												state: { product: product },
											});
										}}
										className='p-[18px_16px] cursor-pointer'
									>
										{product.name}
									</td>
									<td className='p-[18px_16px]'>{product.quantity}</td>
									<td className='p-[18px_16px]'>{product.price}</td>
									<td className='p-[18px_16px]'>{product.category.name}</td>
									<td className='p-[18px_16px]'>{product.origin}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Customers;
