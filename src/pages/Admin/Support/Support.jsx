import React from 'react';
import { plane } from '../../../contexts/terminal/Terminal';

const Support = () => {
	const formData = new FormData();
	const onSubmit = async (e) => {
		e.preventDefault()
		console.log('click');
		console.log(e.target.images.files);
		console.log(e.target.images2.files);
		// plane.request({name:'registerProduct',body:{data:JSON.stringify({name:'hello'},{images:})}})
		// formData.append('images', JSON.stringify(data.images));
		// try {
		// 	const response = await axios.patch(
		// 		'http://localhost:4000/api/request/64d32151ff0abe43d9cbb5ab',
		// 		formData,
		// 		{
		// 			withCredentials: true,
		// 			headers: {
		// 				Accept: 'application/json',
		// 				'Content-Type': 'multipart/form-data',
		// 				'Access-Control-Allow-Credentials': true,
		// 			},
		// 		},
		// 	);
		// 	console.log('Image uploaded:', response.data);
		// } catch (error) {
		// 	console.error('Error uploading image:', error);
		// }
		// reset();
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type='file' name='images' id='' />
				<input type='file' name='images2' id='' />
				<input type='submit' />
			</form>
		</div>
	);
};

export default Support;
