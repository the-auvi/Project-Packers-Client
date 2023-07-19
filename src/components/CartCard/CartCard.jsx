import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const CartCard = ({
  productImg,
  productName,
  ProductQuantity,
  price,
  isNavbar,
}) => {
  const [quantity, setQuantity] = useState(ProductQuantity);
  //   console.log(quantity);

  console.log(isNavbar);

  const handleQuantity = (type) => {
    if (type === "minus" && quantity > 0) {
      setQuantity(quantity - 1);
    }
    if (type === "plus") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <tbody>
      <tr className="">
        <td className="col min-h-[64px]">
          <div className="flex items-center gap-2">
            <img src={productImg} alt="" />
            <div>
              {!isNavbar && (
                <>
                  <p className="text-base font-normal hidden md:block">
                    {productName.slice(0, 40)}
                    <br />
                    {productName.slice(41, productName.length)}
                  </p>
                </>
              )}

              {isNavbar && (
                <>
                  <p className="text-sm text-black/40 font-normal">
                    {productName.slice(0, 40)}...
                  </p>
                  <div className="col mt-1 text-xs font-semibold  ">
                    ৳ {price} tk
                  </div>
                </>
              )}

              {!isNavbar && (
                <>
                  {" "}
                  <p className="text-sm text-black/40 font-normal sm:hidden ">
                    {productName.slice(0, 40)}...
                  </p>
                  <div className="col mt-1 text-xs font-semibold sm:hidden ">
                    ৳ {price} tk
                  </div>
                </>
              )}
            </div>
          </div>
        </td>

        <td className="col min-h-[64px] ">
          <div className="flex items-center justify-center">
            <input
              value={quantity}
              readOnly
              type="number"
              id="productLink"
              className="bg-transparent text-center text-[#3E949A] text-sm outline-none font-normal w-[30px] [&::-webkit-inner-spin-button]: "
            />

            <div className="flex flex-col text-[10px] font-normal">
              <button>
                <BiSolidUpArrow />
              </button>
              <button>
                <BiSolidDownArrow />
              </button>
            </div>
          </div>

          {/* <div className="flex items-center gap-5">
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
                className="bg-transparent text-center text-[#3E949A] text-sm outline-none font-normal w-[30px] [&::-webkit-inner-spin-button]: "
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
          </div> */}
        </td>

        {/* <td className="col min-h-[64px] text-xs font-semibold hidden md:flex items-center">
          ৳ {price} tk
        </td> */}
      </tr>
    </tbody>
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
