import React from "react";
import CartCard from "../../components/CartCard/CartCard";
import cart11 from "../../assets/cart1.png";

import "./Cart.css"


/**
 * 
 * @param {boolean} isNavbar - recieve why this component used for. if true then it used for navigation else for page
 * @returns 
 */
const Cart = ({ isNavbar }) => {
  return (
    <div className="wrapper">

      {/* table */}
      <table className=" " >

        {/* for page */}
        {!isNavbar && (

          // table head
          <thead className="hidden md:table-header-group  ">
            <tr className="text-sm font-semibold text-[#124E58]">
              <th className="text-start">Product List</th>
              <th className="text-start">Qantity</th>
              <th className="text-start">Price</th>
            </tr>
          </thead>
        )}

        {/* table body */}
       <tbody>
       <CartCard
          isNavbar={isNavbar}
          ProductQuantity={1}
          productImg={cart11}
          price={12212132}
          productName="OUTERBOX COMPUTER SERIES Case for iPhone 12 & iPhone 12 pro"
        />
        <CartCard
          isNavbar={isNavbar}
          ProductQuantity={1}
          productImg={cart11}
          price={12212132}
          productName="OUTERBOX COMPUTER SERIES Case for iPhone 12 & iPhone 12 pro"
        />
        <CartCard
          isNavbar={isNavbar}
          ProductQuantity={1}
          productImg={cart11}
          price={12212132}
          productName="OUTERBOX COMPUTER SERIES Case for iPhone 12 & iPhone 12 pro"
        />
       </tbody>
      </table>
    </div>
  );
};

export default Cart;
