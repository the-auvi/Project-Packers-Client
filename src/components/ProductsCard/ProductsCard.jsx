import React from 'react'
// TODO: Remove this when image from db works properly
import Image from "../../assets/card1.png"

/**
 * 
 * @param {string} img - recive img src
 * @param {string} title - recive title
 * @param {string} price - recive price 
 * @returns 
 */
const ProductsCard = ({img, title, price}) => {
  // console.log(img)
  return (
    <div className='w-full h-[402px} bg-white'>

       <div className='flex  flex-col justify-center p-3'>
       <img src={Image} alt="image" />
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