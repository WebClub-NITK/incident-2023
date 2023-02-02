import React, { useState } from "react";
import Modal from "./Modal";
import styles from "../../style";
const CompetitionCard = (competition) => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  return (
    <div>
      <div className={`${styles.card}`}>
        <div className="p-6">
          {/* hover to some color */}
          {/* text colors and bg are subject to change */}
          <div className="text-primary cursor-pointer">
            <div className="flex flex-wrap flex-row justify-between">
              <h3 className="text-lg font-medium font-poppins inline">
                {competition.title}
              </h3>
              <h3 className="text-lg font-medium font-poppins inline">
                {competition.date}
              </h3>
            </div>
          </div>

          {/* fix the hover, it should hover only for the head text and not the whole line */}
          <div className="w-auto flex justify-center mt-3">
            {/* <p className='text-sm font-poppins text-neutral-50 mt-2 px-3'>{competition.details}</p> */}
            <img src={competition.image} alt="Logo" className="max-w-1/2" />
          </div>
          <div className="flex w-full justify-center px-2 mt-2">
            <button
              className={`${styles.card_button}`}
              onClick={() => setShowModal(true)}
            >
              Click for more info
            </button>
          </div>
        </div>
      </div>
      <Modal
        visible={showModal}
        details={competition.details}
        title={competition.title}
        date={competition.date}
        onClose={handleOnClose}
      />
    </div>
  );
};

export default CompetitionCard;
