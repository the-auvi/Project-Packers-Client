import React from 'react'
import card1 from "../../assets/card1.png";
import Notification from '../Notification/Notification';
import {HiLogout} from "react-icons/hi"


const DropDownNotification = ({isOpen, setIsOpen}) => {
    const date = new Date()
    // console.log(date.getMinutes());
    const sendingMin = date.getMinutes()
  
  return (
    <div className='bg-white p-5 pt-0 rounded-lg w-[280px] h-[372px] overflow-y-scroll shadow-2xl' >
        <div className='sticky top-0 pt-5 pb-3 bg-white flex items-center justify-between text-sm font-semibold text-[#124E58]'  >
            <p >Notification</p>
            <p><HiLogout/></p>
        </div>
<Notification className="text-sm" icon={card1} message="We've reviewed item #3163652 (Fitbit Versa...). You can now take it to checkout!" time={sendingMin} type="cart" />
<Notification className="text-sm" icon={card1} message="We've reviewed item #3163652 (Fitbit Versa...). You can now take it to checkout!" time={sendingMin} type="cart" />
<Notification className="text-sm" icon={card1} message="We've reviewed item #3163652 (Fitbit Versa...). You can now take it to checkout!" time={sendingMin} type="user" />
<Notification className="text-sm" icon={card1} message="We've reviewed item #3163652 (Fitbit Versa...). You can now take it to checkout!" time={sendingMin} type="cart" />

    </div>
  )
}

export default DropDownNotification