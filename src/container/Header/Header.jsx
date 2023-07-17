import React, { useState } from "react";
import headerImg from "../../assets/header.png";
import ReloadImg from "../../assets/cd-reload.svg";

import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"

import Button from "../../components/Button/Button";
import { BsCheck2Circle } from "react-icons/bs";
import Slider from "../../components/Slider/Slider";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";

const Header = () => {
  const [reqURL, setReqURL] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false)

  const handleQuantity = (type) => {
    if (type === "minus" && quantity > 0) {
      setQuantity(quantity - 1);
    }
    if (type === "plus") {
      setQuantity(quantity + 1);
    }
  };

  const handleChangeRequestURL = (e) => {
    setReqURL(e.target.value);
  };

  const ModalBody = (
    <div className="w-96">
      {/* button */}
      <div className="flex items-center gap-4 justify-start ">
        <h1 className="font-bold">Request Item</h1>
        <button className="border px-4 py-1 rounded-3xl">Link</button>
        <button className="border px-4 py-1 rounded-3xl">Images</button>
      </div>
      <hr className="my-2" />

      <form>
        {/* Product link */}
        <div>
          <label htmlFor="productLink">Product Link </label>
          <div className="flex items-center gap-1">
            <div className="w-full flex px-3 items-center text-ellipsis truncate border rounded-3xl bg-white">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-[#F2C852]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <input
                type="search"
                defaultValue={reqURL}
                id="productLink"
                onChange={handleChangeRequestURL}
                className="relative m-0 block flex-auto bg-transparent bg-clip-padding ps-3 py-[0.25rem] text-base font-normal leading-[1.6] text-[#124E58] outline-none placeholder:text-[#124E58]"
                placeholder="Paste the URL of the product"
              />
            </div>

            <button>
              <img
                src={ReloadImg}
                alt=""
                className="bg-gray-100 p-2 rounded-full"
              />
            </button>
          </div>
        </div>

        {/* product name */}


       
        <div>
          <label htmlFor="productLink">Product Name </label>
          <div className="flex items-center gap-1">
            <div className="w-full flex px-3 items-center text-ellipsis truncate border rounded-3xl bg-white">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-[#F2C852]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <input
                type="search"
                defaultValue={reqURL}
                id="productLink"
                onChange={handleChangeRequestURL}
                className="relative m-0 block flex-auto bg-transparent bg-clip-padding ps-3 py-[0.25rem] text-base font-normal leading-[1.6] text-[#124E58] outline-none placeholder:text-[#124E58]"
                placeholder="Paste the URL of the product"
              />
            </div>
          </div>
        </div>

        {/* quantity */}

        <div>
          <label htmlFor="quantity">Quantity </label>

          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center gap-2 border w-44 p-2 rounded-3xl bg-white">
              <button
              className="text-2xl"
                onClick={(e) => {
                  e.preventDefault();
                  handleQuantity("minus");
                }}
              >
                <AiOutlineMinus/>
              </button>
              <input
                type="number"
                readOnly
                value={quantity}
                id="productLink"
                onChange={handleChangeRequestURL}
                className="bg-transparent ps-2 text-center text-black text-2xl outline-none font-normal w-24"
                 
              />
              <button
              className="text-2xl"
                onClick={(e) => {
                  e.preventDefault();
                  handleQuantity("plus");
                }}
              >
                <AiOutlinePlus/>
              </button>
            </div>

            <p className="text-2xl text-gray-400">
              By <a href="amazon.com" className="underline text-xl text-[#6EAFB3]" >amazon.com</a>
            </p>
          </div>

    
        </div>


{/* add a note */}
<div className="flex flex-col">
  <label htmlFor="addNote">Add a note <span>(optional)</span></label>
  <textarea name="addNote" id="addNote" cols="30" rows="5"  className="border outline-none p-3 rounded-xl" ></textarea>
</div>


{/* send requste button */}
{
  loggedIn?
  // <PrimaryButton> <input type="submit" value={"re"} /></PrimaryButton> : <PrimaryButton/>
  <Button><input type="submit" value={"re"} /></Button> : <Button/>
}


      </form>
    </div>
  );

  return (
    <header className="bg-[#0D3D4B]   text-white mb-80 ">
      <div className="wrapper h-[590px] relative  flex justify-between items-center ">
        <div className="space-y-4">
          {/* title */}
          <div className="text-5xl font-extrabold">
            Shop product from USA <br /> and save up to 40%
          </div>
          {/* sub title */}
          <div>
            Thousands of deals on gadgets,shoes, <br /> watches- everything from
            US
          </div>
          {/* search */}
          <div className="flex">
            <div className="w-auto md:w-2/3 flex px-3 items-center text-ellipsis truncate border rounded-3xl bg-white">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-[#F2C852]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <input
                type="search"
                onChange={handleChangeRequestURL}
                className="relative m-0 block flex-auto bg-transparent bg-clip-padding ps-3 py-[0.25rem] text-base font-normal leading-[1.6] text-[#124E58] outline-none placeholder:text-[#124E58]"
                placeholder="Paste the URL of the product"
              />
            </div>

            <Modal modalBody={ModalBody} openButtonName="Create request" />
          </div>

          <div className="flex gap-4 w-96 ">
            <div className="flex items-start mt-16">
              <BsCheck2Circle className="text-yellow-300 text-2xl" />
              Recive your product in 1-2 weeks
            </div>
            <div className="flex items-start mt-16">
              <BsCheck2Circle className="text-yellow-300 text-2xl" />
              Deliverd by verifie trusted travelers
            </div>
          </div>
        </div>

        <img src={headerImg} alt="" width={500} className="mb-20" />
        <div className="wrapper absolute -bottom-72 left-10">
          <Slider />
        </div>
      </div>
    </header>
  );
};

export default Header;
