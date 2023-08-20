import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import Status from '../../../components/Status/Status';
import eye from '../../../assets/icons/eye.svg';
import { Link } from 'react-router-dom';
const MyAccountOrders = () => {
	return (
		<div className='w-full overflow-x-scroll'>
			<table className='w-full '>
				<thead className='bg-slate-50 border-b'>
					<tr>
						<th className='text-start p-[10px_16px]'>Order ID</th>
						<th className='text-start p-[10px_16px]'>Date</th>
						<th className='text-start p-[10px_16px]'>Items</th>
						<th className='text-start p-[10px_16px]'>Total</th>
						<th className='text-start p-[10px_16px]'>Status</th>
						<th className='text-start p-[10px_16px]'>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr className='border-b'>
						<td className='p-[18px_16px]'>#2050</td>
						<td className='p-[18px_16px]'>Today at 6:55am</td>
						<td className='p-[18px_16px]'>1 item</td>
						<td className='p-[18px_16px]'>$ 396.84</td>
						<td className='p-[18px_16px]'>
							<Status title='abandoned' />
						</td>
						<td className='p-[18px_16px]'>
							<Link>
								<img src={eye} alt='' />
							</Link>
						</td>
					</tr>
					<tr className='border-b'>
						<td className='p-[18px_16px]'>#2050</td>
						<td className='p-[18px_16px]'>Today at 6:55am</td>
						<td className='p-[18px_16px]'>1 item</td>
						<td className='p-[18px_16px]'>$ 396.84</td>
						<td className='p-[18px_16px]'>
							<Status title='complete' />
						</td>
						<td className='p-[18px_16px]'>
							<Link>
								<img src={eye} alt='' />
							</Link>
						</td>
					</tr>
					<tr className='border-b'>
						<td className='p-[18px_16px]'>#2050</td>
						<td className='p-[18px_16px]'>Today at 6:55am</td>
						<td className='p-[18px_16px]'>1 item</td>
						<td className='p-[18px_16px]'>$ 396.84</td>
						<td className='p-[18px_16px]'>
							<Status title='refund processing' />
						</td>
						<td className='p-[18px_16px]'>
							<Link>
								<img src={eye} alt='' />
							</Link>
						</td>
					</tr>

					<tr className='border-b'>
						<td className='p-[18px_16px]'>#2050</td>
						<td className='p-[18px_16px]'>Today at 6:55am</td>
						<td className='p-[18px_16px]'>1 item</td>
						<td className='p-[18px_16px]'>$ 396.84</td>
						<td className='p-[18px_16px]'>
							<Status title='close' />
						</td>
						<td className='p-[18px_16px]'>
							<Link>
								<img src={eye} alt='' />
							</Link>
						</td>
					</tr>
					<tr className='border-b'>
						<td className='p-[18px_16px]'>#2050</td>
						<td className='p-[18px_16px]'>Today at 6:55am</td>
						<td className='p-[18px_16px]'>1 item</td>
						<td className='p-[18px_16px]'>$ 396.84</td>
						<td className='p-[18px_16px]'>
							<Status title='processing' />
						</td>
						<td className='p-[18px_16px]'>
							<Link>
								<img src={eye} alt='' />
							</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default MyAccountOrders;
