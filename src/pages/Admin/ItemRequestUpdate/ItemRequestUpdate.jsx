import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import PreviousButtonHeading from '../../../components/PreviousButtonHeading/PreviousButtonHeading';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Delete from '../../../assets/icons/Delete.svg';
import { useForm } from 'react-hook-form';
import ItemDetailsUpdate from '../../../container/AdminContainer/ItemReqContainer/ItemDetailsUpdate/ItemDetailsUpdate';
import ItemPaymentUpdate from '../../../container/AdminContainer/ItemReqContainer/ItemPaymentUpdate/ItemPaymentUpdate';
import CustomerDetailsUpdate from '../../../container/AdminContainer/ItemReqContainer/CustomerDetailsUpdate/CustomerDetailsUpdate';
import axios from 'axios';

const ItemRequestUpdate = () => {
	const { id } = useParams();

	const [singleItem, setSingleItem] = useState();
	const [isEdit, setIsEdit] = useState(null);

	const [axiosSecure] = useAxiosSecure();

	useEffect(() => {
		axiosSecure.get(`/request/${id}/`).then((res) => {
			// console.log(res.data);
		});
	}, []);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const formData = new FormData();

	const onSubmit = async (data) => {
		console.log('click');
		console.log(data.images);

		formData.append('images', JSON.stringify(data.images));

		try {
			const response = await axios.patch(
				'http://localhost:4000/api/request/64d32151ff0abe43d9cbb5ab',
				formData,

				{
					withCredentials: true,
					headers: {
						Accept: 'application/json',
						'Content-Type': 'multipart/form-data',
						'Access-Control-Allow-Credentials': true,
					},
				},
			);

			console.log('Image uploaded:', response.data);
		} catch (error) {
			console.error('Error uploading image:', error);
		}

		reset();
	};

	return (
		<div>
			{/* Heading */}
			<div className='p-[20px_0]  border-b w-full flex justify-between items-center'>
				<PreviousButtonHeading id={id} buttonName='Back to item request' />
				<div className='flex gap-4'>
					<button
						form='reqUpdate'
						type='submit'
						className='flex items-center gap-2'
					>
						<img src={Delete} alt='' /> Delete
					</button>
					<Button
						buttonType='secondaryButton'
						name='Update'
						className='rounded-[5px]'
					/>
				</div>
			</div>

			<div className='flex gap-4 items-start mt-5'>
				{/* Item details */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					id='reqUpdate'
					className='w-4/6 flex flex-col gap-4'
				>
					{/* Item images and quantity */}
					<ItemDetailsUpdate
						isEdit={isEdit}
						setIsEdit={setIsEdit}
						register={register}
					/>
					{/* payment */}
					<ItemPaymentUpdate register={register} />
				</form>

				<div className='w-1/3'>
					<CustomerDetailsUpdate
						isEdit={isEdit}
						setIsEdit={setIsEdit}
						register={register}
					/>
				</div>
			</div>
		</div>
	);
};

export default ItemRequestUpdate;
