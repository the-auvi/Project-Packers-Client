import React from "react";

/**
 * 
 * @param {string} image - receive staff image  
 * @param {name} name - receive staff name
 * @param {string} access - receive staff access 
 * @param {function} eventHandler - reveive any evenHandler Function
 * @returns 
 */
const StaffCard = ({ image, name, access, ...eventHandler}) => {
  return (
    <div className="flex items-center justify-between w-[560px] h-[88px] px-5 py-4 ">
      <div className="flex items-center gap-3">
        <div>
          <img src={image} alt="" className="w-10 h-10 rounded-full" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm font-normal text-[#6D7175]">{access}</p>
        </div>
      </div>
      <div>
        <select
        {...eventHandler}
          name="access"
          id="access"
          className="px-4 py-2 border outline-none rounded bg-transparent text-sm font-medium"
        >
          <option value="admin">Admin</option>
          <option value="support">Support</option>
        </select>
      </div>
    </div>
  );
};

export default StaffCard;
