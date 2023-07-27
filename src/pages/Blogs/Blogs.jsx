import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import BlogCard from '../../components/BlogCard/BlogCard';

const Blogs = () => {
	const [allBlogs, setAllBlogs] = useState([]);

	const [axiosSecure] = useAxiosSecure();

	useEffect(() => {
		axiosSecure.get('/api/blogs').then((res) => {
			setAllBlogs(res.data);
			console.log(res.data);
		});
	}, []);
	console.log(allBlogs);
	return (
		<div className='pt-24  pb-12 '>
			<div className='wrapper flex items-center justify-center'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
					{allBlogs.map((blog) => (
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
	);
};

export default Blogs;
