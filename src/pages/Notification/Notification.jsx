import React, { useEffect, useRef, useState } from "react";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import { plane } from "../../contexts/terminal/Terminal";
import formatTimeAgo from "../../utils/formatTimeAgo";


/**
 * 
 * @param {boolean} isNavbar - recieve why this component used for. if true then it used for navigation else for page
 * @returns 
 */
const Notification = ({ isNavbar }) => {
  const [navdata, setNavdata] = useState([])
  useEffect(() => {
    plane.request({ name: 'getNotification' }).then(data => data.length && setNavdata(data))
  }, [])
  // TODO: after fetching need to send time of notification to the NotificationCard
  const date = new Date();
  // console.log(date.getMinutes());
  const sendingMin = date.getMinutes();

  return (
    <div>
      <div className={`${!isNavbar ? "max-w-[804px] mx-auto" : "max-h-72 overflow-auto"}`} >

        {/* for page */}
        {
          !isNavbar && <h1 className="text-2xl font-semibold text-[#124E58] p-[20px] [0] [12px] [0]" >Notification</h1>
        }
        {
          navdata.length > 0 && navdata.map(n => {
            const time = formatTimeAgo(new Date(n.time))
            return <NotificationCard
              isNavbar={isNavbar}
              message={n.message}
              time={time}
              type={n.type}
            />
          })
        }
      </div>
    </div>
  );
};

export default Notification;
