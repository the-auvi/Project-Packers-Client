import React from 'react';

const Support = () => {
	const formData = new FormData();
	const onSubmit = async (e) => {
		console.log('click');
		console.log(e.target.files[0]);

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
				<input type='file' name='' id='' />
				<input type='submit' />
			</form>
		</div>
	);
};

export default Support;
