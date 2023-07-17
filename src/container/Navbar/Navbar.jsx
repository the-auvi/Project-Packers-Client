import React, { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo3.png";
import myAcct from "../../assets/Avatar.png";
import Notification from "../../assets/cd-notification.svg";
import Cart from "../../assets/cd-products.svg";

import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = (p) => {
    console.log(p);
  };

  return (
    <div>
      <nav className="flex gap-1 max-w-screen-xl mx-auto items-center justify-between bg-white text-black p-6">
        {/* for mobile response */}

        {isLoggedIn && (
          <button
            className={`text-2xl ${openMenu && "hidden"} sm:hidden      `}
            onClick={() => setOpenMenu(true)}
          >
            <AiOutlineMenuUnfold />
          </button>
        )}

        <div
          className={` absolute z-50 bg-white h-screen w-3/4 top-0 md:hidden transition-all duration-1000 ${
            openMenu ? " left-0 " : " -left-96"
          }`}
        >
          <div className="px-4 py-10">
            <div className="flex items-center">
              {" "}
              <img
                src={logo2}
                alt=""
                className="w-20 md:w-full md:hidden"
              />{" "}
              <Button  
                buttonType="outlineButton"
                name="Login or Sign up"
                onClick= {()=>handleClick("pujon")}
              />
            </div>
            <hr className="my-3" />
            <ul className="space-y-2">
              <li>
                <NavLink className="flex items-center gap-2">
                  {" "}
                  <img src={myAcct} alt="" /> My Account
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2">
                  {" "}
                  <img
                    src={Notification}
                    alt=""
                    className="bg-[#CFF6EF] p-1 rounded-full"
                  />{" "}
                  Notification
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2">
                  {" "}
                  <img
                    src={Notification}
                    alt=""
                    className="bg-[#CFF6EF] p-1 rounded-full"
                  />{" "}
                  Support
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2">
                  {" "}
                  <img
                    src={Notification}
                    alt=""
                    className="bg-[#CFF6EF] p-1 rounded-full"
                  />{" "}
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute -right-10 top-8 text-3xl"
          >
            <AiOutlineClose />
          </button>
        </div>

        <div>
          <img src={logo2} alt="" className="w-20 md:w-full md:hidden" />
        </div>

        {/* for desktop */}
        <div>
          <img src={logo} alt="" className="w-20 md:w-full hidden md:block" />
        </div>

        {/* search */}
        <div className="w-auto md:w-2/4 flex px-3 items-center text-ellipsis truncate border rounded-3xl">
          <span>
            {" "}
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
            className="relative m-0 block flex-auto bg-transparent bg-clip-padding ps-3 py-[0.25rem] text-base font-normal leading-[1.6] text-[#124E58] outline-none placeholder:text-[#124E58]"
            placeholder="Paste the URL of the product"
          />
        </div>

        {/* for mobile responsive */}
        <>
          {isLoggedIn ? (
            <NavLink className="flex items-center gap-2">
              <img
                src={Cart}
                alt=""
                className="bg-[#CFF6EF] p-1 rounded-full"
              />
            </NavLink>
          ) : (

            <Button  
            buttonType="secondaryButton"
            name="Login"
            className={"block md:hidden"}
            onClick= {()=>handleClick("pujon")}
          />

          
          )}
        </>

        {/* for desktop */}
        <div className="md:flex items-center space-x-2 hidden">
          <p>Support</p>

          {isLoggedIn ? (
            <ul className="flex items-center gap-2">
              <li>
                <NavLink className="flex items-center gap-2">
                  <img
                    src={Notification}
                    alt=""
                    className="bg-[#CFF6EF] p-1 rounded-full"
                  />{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2">
                  {" "}
                  <img
                    src={Cart}
                    alt=""
                    className="bg-[#CFF6EF] p-1 rounded-full"
                  />{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2">
                  <img src={myAcct} alt="" />
                </NavLink>
              </li>
              <li>Pujon Das</li>
            </ul>
          ) : (
            <div className="flex items-center gap-2">
            

              <Button
                buttonType="outlineButton"
                // clas
                name="Login"
                onClick={() => handleClick("pujon")}
              />

              <Button
               
                name="Sign Up"
                onClick={() => handleClick("pujon")}
              />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <div className="block lg:hidden">
<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
  <svg
    className="fill-current h-3 w-3"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
</button>
</div> */
}
