import React from 'react';
import OverviewCard from '../../../../components/OverviewCard/OverviewCard';
import Overview from '../../../../container/AdminContainer/Overview/Overview';

import graph from '../../../../assets/Thrash/Assets.png';
import heatmap from '../../../../assets/Thrash/Row.png';

const DashBoard = () => {
	return (
		<div>
			<h2 className='p-[20px_0]  border-b w-full text-[#0D3D4B] text-xl font-semibold'>
				Overview
			</h2>
			<>
				<Overview />
			</>
			<div className='flex gap-4 py-5 justify-between'>
				<img src={graph} alt='' className='min-w-[1012px] min-h-[386x]' />
				<img src={heatmap} alt='' className='min-w-[528px] min-h-[386x]' />
			</div>
		</div>
	);
};

export default DashBoard;
