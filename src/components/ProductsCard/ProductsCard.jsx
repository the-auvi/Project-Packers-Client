import React from 'react'
/**
 * 
 * @param {string} img - recive img src
 * @param {string} title - recive title
 * @param {string} price - recive price 
 * @returns 
 */
const ProductsCard = ({img, title, price}) => {
  return (
    <div className='w-72 h-[402px}'>

       <div className='space-y-2'>
       <img src={img} alt="" />
        <p className='text-lg font-semibold'>{title}</p>
        <div className='flex justify-between items-center' >
            <p className='text-base'>Retailer Price</p>
            <p className='text-lg font-semibold'>${price}</p>
        </div>
       </div>

    </div>
  )
}

export default ProductsCard