import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
// TODO: Remove image from here when Image coming from db
import blog1 from '../../assets/Blog1.png';
import BlogCard from '../../components/BlogCard/BlogCard';

const Blog = () => {
	const [blogDetails, setBlogDetails] = useState({});
	const [blogs, setBlogs] = useState([]);
	const { id } = useParams();
	const [axiosSecure] = useAxiosSecure();

	useEffect(() => {
		axiosSecure.get(`/api/blog/${id}`).then((res) => {
			setBlogDetails(res.data);
		});
	}, [id]);

	useEffect(() => {
		axiosSecure.get('/api/blogs').then((res) => {
			console.log(res.data);
			setBlogs(res.data.slice(0, 4));
		});
	}, []);

	return (
		<>
			{/* header */}
			<div
				style={{ backgroundImage: `url(${blog1})` }}
				className={`backgroundImage w-screen h-[600px] flex items-center justify-center`}
			>
				<div className='wrapper  '>
					<p className='text-[40px] font-semibold text-white'>
						{blogDetails?.title}
					</p>
					<div className='flex items-center gap-4 text-white '>
						<img src={blog1} alt='' className='w-[42px] h-[42px] rounded-50' />
						<p className='text-base font-medium'>Pujon Das Auvi</p>
						<div className='w-[4px] h-[4px] rounded-full text-white border-[4px]'></div>
						<p>July 26, 2023</p>
					</div>
				</div>
			</div>
			<div className='wrapper'>
				{/* blog details */}
				<div className='w-[804px] mx-auto pt-12 pb-[148px]'>
					{/* title */}
					<div className='text-[32px] font-semibold'>{blogDetails?.title}</div>
                    {/* description */}
					<p className='text-base font-normal'>{blogDetails?.description}</p>
				</div>

				{/* more blogs section */}
				<div className='pb-[148px]' >
					<div className='flex items-center justify-between w-full pb-12'>
						<div className='text-[32px] font-semibold text-[#0D3D4B]'>
							You may also like
						</div>
						<div className='flex items-center gap-2'>
							<button className='p-2 rounded-50 bg-[#CFF6EF] text-[#0D3D4B]'>
								{'<='}
							</button>
							<Link to="/home/blogs" ><button className='p-2 rounded-50 bg-[#F2C852] text-[#0D3D4B]'>
								{'=>'}
							</button></Link>
						</div>
					</div>

					{/* more blog card */}
					<div className='grid grid-cols-4 gap-7'>
						{blogs.map((blog) => (
							<div key={blog.id}>
								<BlogCard
									id={blog.id}
									title={blog.title}
									details={blog.description}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
