import React, { useState } from "react";
import Modal from "./Modal";
import styles from "../../style";
import { motion } from "framer-motion";
const CompetitionCard = (competition) => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => {
    setShowModal(!showModal);
    document.body.style.overflow = "unset";
  };
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="">
        {/* className={`${styles.card}`} */}
        <div className="p-3">
          {/* <div className="text-primary">
            <div className="flex flex-wrap flex-row justify-between">
              <h3 className="text-lg font-medium font-poppins inline">
                {competition.title}
              </h3>
              <h3 className="text-lg font-medium font-poppins inline">
                {competition.date}
              </h3>
            </div>
          </div> */}

          {/* fix the hover, it should hover only for the head text and not the whole line */}
          <div className="w-auto flex justify-center mt-2">
            {/* <p className='text-sm font-poppins text-neutral-50 mt-2 px-3'>{competition.details}</p> */}
            <div className="w-full flex flex-row justify-evenly p-0 space-x-1">
              <button
                className="max-w-[320px] flex justify-center px-2 mt-1 flex-wrap sm:flex-row md:flex-row"
                onClick={() => {
                  setShowModal(true);
                  document.body.style.overflow = "hidden";
                }}
              >
                <img
                  src={competition.image}
                  alt="Logo"
                  className="max-w-auto h-auto transition-all ease-in-out md:hover:translate-x-0.5 md:hover:-translate-y-0.5 duration-150"
                />
                {/* Click for more info */}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        visible={showModal}
        details={competition.details}
        title={competition.title}
        date={competition.date}
        poc={competition.poc}
        onClose={handleOnClose}
      />
    </motion.div>
  );
};

export default CompetitionCard;
