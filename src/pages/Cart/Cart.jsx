import React from "react";
import CartCard from "../../components/CartCard/CartCard";
import cart11 from "../../assets/cart1.png";

const Cart = ({ isNavbar }) => {
  // console.log(isNavbar);

  return (
    <div className="">
      <table className="border-separate border-spacing-4">
        {!isNavbar && (
          <thead className="hidden md:table-header-group">
            <tr className="text-sm font-semibold text-[#124E58]">
              <th className="text-start">Product List</th>
              <th className="text-start">Qantity</th>
              <th className="text-start">Price</th>
            </tr>
          </thead>
        )}
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
      </table>
    </div>
  );
};

export default Cart;
