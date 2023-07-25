import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button/Button";

/**
 * Modal
 * @description this component used for modal opening and closing
 * @param {component} modalBody - recive a full customize component for modal body
 * @param {string} openButtonName - recive name of open modal button
 */

const Modal = ({ children, openButtonName, className}) => {

  const [showModal, setShowModal] = useState(false);

  /**
   * @description this funtion used for opening a modal
   */
  const openModal = () => {
    setShowModal(true);
  };


    /**
   * @description this funtion used for close a modal
   */
  const closeModal = () => {
    setShowModal(false);
  };
  

  return (
    <>
      {/* modal opening button */}
      <Button buttonType="secondaryButton" name={openButtonName} onClick={openModal} className={className} />

      {/* modal body */}
      <div
        className={`w-screen text-black h-screen fixed top-0 left-0 right-0 bottom-0 z-20  ${
          showModal ? "scale-100 bg-[#0D3D4B]/70" : "scale-0 bg-[#0D3D4B]/0"
        } transition-all  duration-500 `}
      >
        <div className={`fixed inset-0 flex items-center justify-center z-50 `}>
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            {children}

            {/* Modal Close Button */}
            <button
              className="text-3xl absolute top-5 right-4 text-gray-400 font-thin rounded"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
