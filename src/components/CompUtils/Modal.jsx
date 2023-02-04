import { React, useEffect } from "react";
import { GiCrossedSabres } from "react-icons/gi";
import styles from "../../style";
import { logo } from "../../assets";
import { motion, AnimatePresence } from "framer-motion";
const Modal = ({ visible, details, title, date, poc, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "backdrop-div") onClose();
  };
  return (
    <AnimatePresence>
      { visible && 
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-poppins"
          id="backdrop-div"
          key="backdrop-div"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleOnClose}
        >
          <div className="bg-gradient-to-br from-slate-900 to-black rounded max-w-[85%] max-h-[90%] rounded-3xl md:max-w-[70%] shadow-md shadow-secondary overflow-y-auto no-scrollbar">
            <div className="flex flex-row md-2 border-b-2 border-black">
              <div className="basis-1/12">{/*Padding*/}</div>
              <div className="basis-10/12">
                <h1 className="w-full font-poppins text-4xl text-center font-medium text-primary py-3">
                  {title}
                </h1>
              </div>
              <div className="flex justify-center items-center basis-1/12">
                <button
                  className="bg-transparent lg:hover:bg-background rounded p-2"
                  onClick={onClose}
                >
                  <GiCrossedSabres className="text-primary" />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex h-fit items-top justify-center flex-wrap shrink-0 grow-0">
              {/* Image Div */}
              <div className="basis-full my-5 m-5 border-2 border-transparent rounded-3xl md:basis-4/12 flex flex-wrap items-center">
                <div className="h-full">
                  <p className="text-primary text-2xl font-semibold mb-5">
                    {date}
                  </p>
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
            <div className="flex justify-center items-center my-2 ">
              <button className={`${styles.modal_button}`}>Register</button>
              <button className={`${styles.modal_button}`} onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  );
};
export default Modal;
