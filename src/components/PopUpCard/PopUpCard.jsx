import React, { useState } from "react";
import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";

const PopUpCard = ({ title, details, openButtonName, time }) => {
  const [showModal, setShowModal] = useState(false);

  /**
   * @description this funtion used for opening a popup
   */
  const openModal = () => {
    setShowModal(true);
  };

  setTimeout(() => {
    setShowModal(false);
  }, time*1000);

  /**
   * @description this funtion used for close a popup
   */
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button name={openButtonName} onClick={openModal} />

      <div
        className={`absolute right-5 bottom-5 flex items-center   justify-center z-50 ${
          showModal ? "" : "hidden"
        }`}
      >
        <div className="bg-primary space-y-2 text-white p-6 rounded shadow-lg w-[320px] h-[172px] relative">
          <div className="text-base font-semibold">{title}</div>
          <div className="text-sm font-normal text-slate-200">{details}</div>
          <Button
            buttonType="secondaryButton"
            name="Check now"
            className="rounded border-none"
          />

          {/* Popup Close Button */}
          <button
            className="text-4xl absolute top-4 right-4 text-[#3E949A] font-normal rounded"
            onClick={closeModal}
          >
            <IoIosClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpCard;
