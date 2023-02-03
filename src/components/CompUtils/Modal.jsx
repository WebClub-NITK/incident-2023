import React from "react";
import { close } from "../../assets";
import { GiCrossedSabres } from 'react-icons/gi';
import styles from "../../style";
import { logo } from "../../assets";
const Modal = ({ visible, details, title, date, poc, onClose }) => {
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
      <div className="bg-gradient-to-br from-slate-900 to-black rounded max-w-[70%] max-h-[90%] rounded-3xl shadow-md shadow-secondary overflow-y-auto no-scrollbar">
        <div className="flex flex-row md-2 border-b-2 border-black">
          <h1 className="w-full font-poppins text-4xl text-center font-medium text-primary p-2">
            {title}
          </h1>
          {/* please add the following icon besides the heading so that the modal closes on clicking */}
          <GiCrossedSabres className="text-primary absolute top-3 right-6" id="backdrop-div" onClick={handleOnClose} />

          
          {/* To be worked on */}
          {/* <div className="inline-flex justify-end items-center basis-5/6">
            <button className="bg-transparent lg:hover:bg-background rounded px-2 py-1">
            <img
            src={close}
            alt="Close"
            className="w-[28px] h-[28px] object-contain"
                onClick={onClose}
                />
                </button>
              </div> */}
        </div>

        {/* To be worked on*/}
        {/* Main Content */}
        <div className="flex h-fit items-top justify-center flex-wrap shrink-0 grow-0">
          {/* Image Div */}
          <div className="basis-full my-5 m-5 border-2 border-transparent rounded-3xl md:basis-4/12 flex flex-wrap items-center">
            <div className="h-full">
              <p className="text-primary text-2xl font-semibold mb-5">{date}</p>
              <img src={`${logo}`} alt="" className="overflow-clip" />
              <p className="text-primary text-xl text-right font-semibold mt-5">
                {poc}
              </p>
            </div>
          </div>
          {/* Text Div */}
          <div className="basis-full m-5 text-primary text-left text-lg md:basis-6/12 px-2">
            <div className="flex h-full items-center">{details}</div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <button className={`${styles.modal_button}`}>Register</button>
          <button className={`${styles.modal_button}`} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
