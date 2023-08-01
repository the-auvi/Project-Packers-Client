import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
	const { id } = useParams();
	console.log('inside items', id);

	return (
		<div>
			<div className='wrapper'></div>
		</div>
	);
};

export default Item;
