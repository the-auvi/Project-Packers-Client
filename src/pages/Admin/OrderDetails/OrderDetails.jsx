import axios from 'axios';
import React, { useState } from 'react';

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

	return (
		<div>
			<input type='file' onChange={handleFileChange} />
			<button onClick={handleUpload}>Upload Image</button>
		</div>
	);
};

export default OrderDetails;
