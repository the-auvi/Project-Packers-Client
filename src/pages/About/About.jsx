import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
// TODO: Remove image from here when Image coming from db
import blog1 from '../../assets/Blog1.png';
import Headings from '../../components/Headings/Headings';
import Slider from '../../components/Slider/Slider';

const About = () => {

	return (
		<>
			{/* header */}
			<div
				style={{ backgroundImage: `url(${blog1})` }}
				className={`backgroundImage w-screen h-[600px] flex items-center justify-center`}
			>
				<div className='wrapper  '>
					<p className='text-center text-2xl font-bold text-[#6BCCCB]'>
						About Us
					</p>
					<p className='text-[40px] font-semibold text-white text-center'>
						UBS is a multinational investment bank based in Switzerland, active.
					</p>
				</div>
			</div>
			<div className='wrapper'>
				<div className='flex gap-8 items-center pt-12 pb-[84px] ' >
					<div className='flex-1' >
						<p className='text-[32px] font-semibold' >Our Story</p>
						<p className='text-base font-normal' >
							It’s been named as one of the Most Innovative Companies in 2019 by
							“Fast Company”. <br />  <br /> The digital transformation journey started
							back in 2015, when KW decided to reposition itself as a tech
							company. The company invested heavily in its own software, the
							cloud, and AI. It has scooped up top talent from the market and
							created its own Labs division, KW Labs. KW Labs acts as the
							innovation hub of Keller Williams, working in a similar fashion to
							Google and Amazon. <br /> <br /> To stay ahead of competitors,
							Keller Williams have also undertaken one of the most ambitious
							projects in the industry – to leverage their data to boost
							artificial intelligence-powered technology.
						</p>
					</div>
					<div className='flex-1 ' >
						<img src={blog1} alt='' className='h-[480px] rounded-3xl' />
					</div>
				</div>



				<div className='flex flex-row-reverse gap-8 items-center pt-12 pb-[148px] ' >
					<div className='flex-1' >
						<p className='text-[32px] font-semibold' >Our Values</p>
						<p className='text-base font-normal' >
							It’s been named as one of the Most Innovative Companies in 2019 by
							“Fast Company”. <br />  <br /> The digital transformation journey started
							back in 2015, when KW decided to reposition itself as a tech
							company. The company invested heavily in its own software, the
							cloud, and AI. It has scooped up top talent from the market and
							created its own Labs division, KW Labs. KW Labs acts as the
							innovation hub of Keller Williams, working in a similar fashion to
							Google and Amazon. <br /> <br /> To stay ahead of competitors,
							Keller Williams have also undertaken one of the most ambitious
							projects in the industry – to leverage their data to boost
							artificial intelligence-powered technology.
						</p>
					</div>
					<div className='flex-1 ' >
						<img src={blog1} alt='' className='h-[480px] rounded-3xl' />
					</div>
				</div>

                <div  className='pb-[148px]' >
                    <Headings title="Our users love project packers" />
                    <div className='overflow-x-scroll'>
                    <Slider />
                    </div>
                </div>
			</div>
		</>
	);
};

export default About;
