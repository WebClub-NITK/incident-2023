import { React, useEffect } from "react";
import { GiCrossedSabres } from "react-icons/gi";
import styles from "../../style";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ visible, details, title, date, image, poc, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "backdrop-div") onClose();
  };
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-poppins z-20"
          id="backdrop-div"
          key="backdrop-div"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleOnClose}
        >
          <div className="bg-gradient-to-br from-slate-900 to-black rounded max-w-[85%] max-h-[80%] rounded-3xl md:max-w-[70%] shadow-md shadow-secondary overflow-y-auto no-scrollbar">
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
              <div className="basis-full my-5 m-5 border-2 border-transparent rounded-3xl md:basis-4/12 flex flex-wrap justify-center items-center">
                <img src={image} alt="" className="overflow-clip" />
                {/* <p className="text-primary text-xl text-right font-semibold mt-5">
                    {poc}
                  </p>   
                  NO DETAILS GIVEN AS OF NOW */}
              </div>
              {/* Text Div */}
              <div className="basis-full m-5 text-primary text-left text-lg md:basis-6/12 px-2">
                <p className="text-primary text-2xl font-semibold mb-5">
                  {date}
                </p>
                <div className="flex items-top my-5">{details}</div>
                <div className="flex justify-center my-8">
                <button
                  className={`text-[#1a2328] flex justify-center items-center w-auto font-[RMMedium] px-5 py-2 font-bold xl:text-2xl md:text-base sm:text-xl text-sm cursor-pointer rounded-md hover:text-white button-gradient`}
                >
                  Register
                </button>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center items-center">
              
              <button className={`${styles.modal_button}`} onClick={onClose}>
                Close
              </button>
            </div> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
