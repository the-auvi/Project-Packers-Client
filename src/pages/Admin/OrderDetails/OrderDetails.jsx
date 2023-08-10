import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const OrderDetails = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleFileChange = (e) => {
		setSelectedImage(e.target.files[0]);
	};

	const handleUpload = async () => {
		if (selectedImage) {
			const formData = new FormData();

			formData.append('images', selectedImage);

			// 	fetch('http://localhost:4000/api/request/64d32151ff0abe43d9cbb5ab', {
			// 		method: 'PATCH',
			// 		credentials: 'include',
			// 		headers: {
			// 			Accept: 'application/json',
			// 			'Content-Type': 'application/json',
			// 			'Access-Control-Allow-Credentials': true,
			// 		},
			// 		body: JSON.stringify({
			// 			name: 'pujon',
			// 		}),
			// 	})
			// 		.then((res) => res.json())
			// 		.then((data) => console.log(data));
			// }

			formData.forEach((e) => console.log(e));

			try {
				const response = await axios.patch(
					'http://localhost:4000/api/request/64d32151ff0abe43d9cbb5ab',
					{
						name: 'pujonnnnnnn',
						formData,
					},

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
		}
	};

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log('click');
		console.log(data);
		reset();
	};

	return (
		<div>
			<input type='file' onChange={handleFileChange} />
			<button onClick={handleUpload}>Upload Image</button>

			<button type='submit' form='try-form' className='p-2 border bg-green-400'>
				form submit try
			</button>

			<form id='try-form' action='' onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='text'></label>
				<input type='text' name='text' id='text' {...register('text')} />
			</form>
		</div>
	);
};

export default OrderDetails;
