import React from "react";
import { close } from "../../assets";
import styles from "../../style";
const Modal = ({ visible, details, title, date, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "backdrop-div") onClose();
  };
  if (!visible) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-poppins"
      id="backdrop-div"
      onClick={handleOnClose}
    >
      <div className="bg-secondary rounded max-w-[50%]">
        <div className="flex flex-row md-2 border-b-2 border-dimMaroon">
          <h1 className="font-poppins text-lg font-medium text-black px-2 inline-flex justify-start items-center basis-1/6">
            {title}
          </h1>
          <div className="inline-flex justify-end items-center basis-5/6">
            <button className="bg-transparent lg:hover:bg-background rounded px-2 py-1">
              <img
                src={close}
                alt="Close"
                className="w-[28px] h-[28px] object-contain"
                onClick={onClose}
              />
            </button>
          </div>
        </div>
        <div className="font-poppins flex justify-left item-center px-2">
          <b>Date:</b> {date}
        </div>
        <div className="font-poppins flex justify-left item-center px-2">
          <b>Details:</b> {details}
        </div>
        <div className="flex justify-center items-center mt-2">
            <button className={`${styles.modal_button}`}>Register</button>
            <button className={`${styles.modal_button}`} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
