import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

/**
 *
 * @param {string} productImg - receive product image
 * @param {string} productName - receive product name
 * @param {string} productQuantity - receive product quantity
 * @param {string} price - receive product price
 * @param {boolean} isNavbar - receive from where this component is called from navBar or not
 */
const CartCard = ({
	productImg,
	productName,
	ProductQuantity,
	price,
	isNavbar,
	setUpdatePrice,
	updatePrice,
}) => {
	/**
	 * @description for storing updated quantities
	 *
	 */
	const [quantity, setQuantity] = useState(ProductQuantity);
	const [newPrice, setNewPrice] = useState(price);

	useEffect(() => {
		const p = price * quantity;
		setNewPrice(p);

		const updatedProduct = {
			productname: productName,
			productPrice: p,
		};

		//For check if the product is already in the updatePrice array
		const productIndex = updatePrice.findIndex(
			(item) => item.productname === productName,
		);

		console.log(productIndex);

		// If the product is already in the updatePrice array, update it; otherwise, add it
		if (productIndex !== -1) {
			const updatedPriceArray = [...updatePrice];
			console.log('up', updatedPriceArray);
			updatedPriceArray[productIndex] = updatedProduct;
			setUpdatePrice(updatedPriceArray);
		} else {
			setUpdatePrice((prevPriceArray) => [...prevPriceArray, updatedProduct]);
		}
	}, [quantity, price]);

	/**
	 *
	 * @param {string} type - received for what reason the button was clicked. "minus" or "plus"
	 * @returns - updated quantity
	 */
	const handleQuantity = (type) => {
		if (type === 'minus' && quantity > 0) {
			setQuantity(quantity - 1);
		}
		if (type === 'plus') {
			setQuantity(quantity + 1);
		}
	};

	return (
		<tr className='border-b'>
			{/* 1st col */}
			<td className='col min-h-[64px]  '>
				<div className='flex items-center gap-1 '>
					<img src={productImg} alt='' />
					<div>
						{/* for page */}
						{isNavbar || (
							<>
								{/* for bigger device */}
								<p className='text-base font-normal hidden md:block'>
									{productName.slice(0, 40)}
									<br />
									{productName.slice(41, productName.length)}
								</p>

								{/* for small device */}
								<p className='text-sm text-black/40 font-normal sm:hidden '>
									{productName.slice(0, 40)}...
								</p>
								<div className='col mt-1 text-xs font-semibold sm:hidden '>
									৳ {newPrice && newPrice} tk
								</div>
							</>
						)}

						{/* for dropdown */}
						{isNavbar && (
							<>
								<p className='text-sm text-black/40 font-normal'>
									{productName.slice(0, 40)}...
								</p>
								<div className='col mt-1 text-xs font-semibold  '>
									৳ {newPrice && newPrice} tk
								</div>
							</>
						)}
					</div>
				</div>
			</td>

			{/* 2nd col */}
			<td className='col min-h-[64px] '>
				{/* for dropdown */}
				{isNavbar && (
					<div className='flex items-center justify-center'>
						<input
							value={quantity}
							readOnly
							type='number'
							id='productLink'
							className='bg-transparent text-center text-[#000000] text-sm outline-none font-normal w-[30px] [&::-webkit-inner-spin-button]: '
						/>

						<div className='flex flex-col text-[10px] font-normal text-black/60'>
							<button>
								<BiSolidUpArrow />
							</button>
							<button>
								<BiSolidDownArrow />
							</button>
						</div>
					</div>
				)}

				{/* for page */}
				{isNavbar || (
					<div className='flex items-center gap-5'>
						<div className='flex items-center justify-center gap-2 border w-[96px] px-2 py-[11px] rounded bg-white'>
							{/* decrease button */}
							<button
								className='text-black/30'
								onClick={(e) => {
									e.preventDefault();
									handleQuantity('minus');
								}}
							>
								<AiOutlineMinus />
							</button>
							<input
								value={quantity}
								readOnly
								type='number'
								id='productLink'
								className='bg-transparent text-center text-[#3E949A] text-sm outline-none font-normal w-[40px] [&::-webkit-inner-spin-button]:appearance-none  '
							/>
							{/* increase button */}
							<button
								className='text-black/30'
								onClick={(e) => {
									e.preventDefault();
									handleQuantity('plus');
								}}
							>
								<AiOutlinePlus />
							</button>
						</div>
					</div>
				)}
			</td>

			{/* 3rd col */}
			{/* for page */}
			{/* for big screen
			 */}
			{isNavbar || (
				<td className='col min-h-[64px] text-xs font-semibold hidden md:flex items-center '>
					<div className='min-h-[64px] flex items-center justify-center'>
						৳ <span>{newPrice && newPrice}</span> tk
					</div>
				</td>
			)}
		</tr>
	);
};

export default CartCard;

{
	/* <tbody>
<tr className="">
  <td className="col min-h-[64px]">
    <div className="flex items-center gap-2">
      <img src={productImg} alt="" />
      <div>
        <p className="text-base font-normal hidden md:block">
          {productName.slice(0, 40)}
          <br />
          {productName.slice(41, productName.length)}
        </p>
        <p className="text-sm text-black/40 font-normal sm:hidden text-">
          {productName.slice(0, 40)}...
           
        </p>
        <div className="col mt-1 text-xs font-semibold sm:hidden">
          ৳ {price} tk
        </div>
      </div>
    </div>
  </td>

  <td className="col min-h-[64px]">
    <div className="flex items-center gap-5">
      <div className="flex items-center justify-center gap-2 border w-[86px] px-2 py-[11px] rounded bg-white">
        <button
          className="text-black/30"
          onClick={(e) => {
            e.preventDefault();
            handleQuantity("minus");
          }}
        >
          <AiOutlineMinus />
        </button>
        <input
          value={quantity}
          readOnly
          type="number"
          id="productLink"
          className="bg-transparent text-center text-[#3E949A] text-sm outline-none font-normal w-[30px] [&::-webkit-inner-spin-button]:appearance-none "
        />
        <button
          className="text-black/30"
          onClick={(e) => {
            e.preventDefault();
            handleQuantity("plus");
          }}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  </td>

  <td className="col min-h-[64px] text-xs font-semibold hidden md:flex items-center">
    ৳ {price} tk
  </td>
</tr>
</tbody> */
}
