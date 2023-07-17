import React from 'react'


/**
 * 
 * @param {string} img -recive img src 
 * @param {string} title - recive blog title
 * @param {string} details - recive blog details
 * @returns 
 */
const BlogCard = ({img, title, details}) => {
/**
 * @description - sliced blog details for showing short details in card
 */
    const shortDetails = details.slice(0,50)
  return (
    <div className='w-[283px] h-[366px] rounded-2xl border'>
        <img src={img} alt="" className='bg-black rounded-t-xl' />
        <div className='p-5 space-y-3 '>
            <p className='text-base font-semibold'>{title}</p>
            <p className='text-sm font-normal'>{shortDetails}</p>
            <button className='text-primary text-sm font-semibold border p-2 rounded'>Learn more</button>
        </div>
    </div>
  )
}

export default BlogCard