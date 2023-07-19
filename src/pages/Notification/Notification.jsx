import React, { useRef } from "react";
import card1 from "../../assets/card1.png";
import NotificationCard from "../../components/NotificationCard/NotificationCard";

const Notification = ({isNavbar}) => {


// console.log(isNavbar);



      const date = new Date();
  // console.log(date.getMinutes());
  const sendingMin = date.getMinutes();
  return (
    <div>

    



      <div className={`${!isNavbar ? "max-w-[804px] mx-auto":""}`} >
      {
        !isNavbar && <h1 className="text-2xl font-semibold text-[#124E58] p-[20px] [0] [12px] [0]" >Notification</h1>
      }
      <NotificationCard 
     
        isNavbar={isNavbar}
        icon={card1}
        message="We've reviewed item #3163652 (Fitbit Versa...). You can now take it to checkout!"
        time={sendingMin}
        type="cart"
      />
      <NotificationCard
        isNavbar={isNavbar}
        icon={card1}
        message="We've reviewed item #3163652 (Fitbit Versa...). You can now take it to checkout!"
        time={sendingMin}
        type="cart"
      />
      <NotificationCard
        isNavbar={isNavbar}
        icon={card1}
        message="We've reviewed item #3163652 (Fitbit Versa...). You can now take it to checkout!"
        time={sendingMin}
        type="user"
      />
      <NotificationCard
        isNavbar={isNavbar}
        icon={card1}
        message="We've reviewed item #3163652 (Fitbit Versa...). You can now take it to checkout!"
        time={sendingMin}
        type="cart"
      />
    </div>
    </div>
  );
};

export default Notification;
