import React, { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo3.png";
import myAcct from "../../assets/Avatar.png";
import NotificationImg from "../../assets/cd-notification.svg";
import Cart1 from "../../assets/cd-products.svg";
import card1 from "../../assets/card1.png";

import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import DropDownNotification from "../../components/DropDown/DropDown";
import Notification from "../../pages/Notification/Notification";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import Cart from "../../pages/Cart/Cart";





// TODO: add comment and short it more


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleClick = (p) => {
    console.log(p);
  };

  return (
    <div>
      <nav className="flex gap-1 max-w-screen-xl mx-auto items-center justify-between bg-white text-black h-20">
        {/* button for open navbar in mobile response */}
        {isLoggedIn && (
          <button
            className={`text-2xl ${openMenu && "hidden"} sm:hidden      `}
            onClick={() => setOpenMenu(true)}
          >
            <AiOutlineMenuUnfold />
          </button>
        )}

        {/* NavMenu in Mobile responsive navmenu*/}
        {isLoggedIn && (
          <div
            className={` absolute z-50 bg-white h-screen w-3/4 top-0 md:hidden transition-all duration-1000 ${
              openMenu ? " left-0 " : " -left-[40rem]"
            }`}
          >
            <div className="px-4 py-10">
              {/* Logo and button */}
              <div className="flex items-center">
                <img src={logo2} alt="" className="w-20 md:w-full md:hidden" />
                <Button
                  buttonType="outlineButton"
                  name="Login or Sign up"
                  onClick={() => handleClick("pujon")}
                />
              </div>
              {/*  */}
              <hr className="my-3" />

              {/* all nav menu  */}
              <ul className="space-y-2 md:hidden">
                {/* my account */}
                <li>
                  <NavLink className="flex items-center gap-2">
                    <img src={myAcct} alt="" /> My Account
                  </NavLink>
                </li>

                {/* Notification */}
                <li>
                  <NavLink className="flex items-center gap-2">
                    <img
                      src={NotificationImg}
                      alt=""
                      className="bg-[#CFF6EF] p-1 rounded-full"
                    />
                    Notification
                  </NavLink>
                </li>

                {/* Support */}
                <li>
                  <NavLink className="flex items-center gap-2">
                    <img
                      src={NotificationImg}
                      alt=""
                      className="bg-[#CFF6EF] p-1 rounded-full"
                    />
                    Support
                  </NavLink>
                </li>

                {/* LogOut */}
                <li>
                  <NavLink className="flex items-center gap-2">
                    <img
                      src={NotificationImg}
                      alt=""
                      className="bg-[#CFF6EF] p-1 rounded-full"
                    />
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* button for closing navbar in mobile responsive */}
            {isLoggedIn && (
              <button
                onClick={() => setOpenMenu(false)}
                className="absolute -right-10 top-8 text-3xl md:hidden"
              >
                <AiOutlineClose />
              </button>
            )}
          </div>
        )}

        {/* logo for mobile responsinve with out opening navmenu */}
        <div>
          <img
            src={logo2}
            alt=""
            className="max-w-[5rem] min-w-[5rem] md:hidden"
          />
        </div>

        {/* for desktop */}
        <div>
          <img src={logo} alt="" className="w-20 md:w-full hidden md:block" />
        </div>

        {/* search */}
        <div className="w-auto md:w-2/4 flex px-3 items-center text-ellipsis truncate border rounded-3xl">
          {/* search Icon */}
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

          {/* search input */}
          <input
            type="search"
            className="relative m-0 block flex-auto bg-transparent bg-clip-padding ps-3 py-[0.25rem] text-base font-normal leading-[1.6] text-[#124E58] outline-none placeholder:text-[#124E58]"
            placeholder="Paste the URL of the product"
          />
        </div>

        {/*Conditional button for mobile responsive */}
        <>
          {isLoggedIn ? (
            <NavLink className="flex items-center gap-2">
              <img
                src={Cart1}
                alt=""
                className="bg-[#CFF6EF] p-1 rounded-full md:hidden min-w-[2.5rem] max-w-[2.5rem]"
              />
            </NavLink>
          ) : (
            <Button
              buttonType="secondaryButton"
              name="Login"
              className={"block md:hidden"}
              onClick={() => handleClick("pujon")}
            />
          )}
        </>

        {/* for desktop */}
        <div className="md:flex items-center space-x-2 hidden">
          <p>Support</p>

          {isLoggedIn ? (
            <ul className="flex items-center gap-2">

              {/* Notification */}
              <li   className="relative">
                <button  onClick={()=>setIsOpen(!isOpen)} className="flex items-center gap-2">
                  <img
                    src={NotificationImg}
                    alt=""
                    className="bg-[#CFF6EF] p-1 rounded-full"
                  />
                </button>

                <div >
                   <DropDownNotification isOpen={isOpen} isNotification={true} >  <Notification isNavbar={true}/>  </DropDownNotification>
                </div>
               
              </li>

              {/* Cart */}
             <li   className="relative">
                <button  onClick={()=>setIsCartOpen(!isCartOpen)} className="flex items-center gap-2">
                  <img
                    src={Cart1}
                    alt=""
                    className="bg-[#CFF6EF] p-1 rounded-full"
                  />
                </button>

                <div >
                   <DropDownNotification isOpen={isCartOpen} >  <Cart isNavbar={true}/>  </DropDownNotification>
                </div>
               
              </li>

              {/* Account */}
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
                name="Login"
                onClick={() => handleClick("pujon")}
              />

              <Button name="Sign Up" onClick={() => handleClick("pujon")} />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
