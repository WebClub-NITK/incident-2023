import React,{useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import ICareModal from './ICareModal';
import { Player,Controls } from "@lottiefiles/react-lottie-player";
import icare from "../lotties/icare.json";
import { GiCrossedSabres } from "react-icons/gi";
const Icare = () => {
  const [showMore, setShowMore] = useState(false);
  const buttonText = showMore ? "Close" : "Read More";

  return (
    <section id="icare">
      <AnimatePresence>
        <motion.div
          className="h-[1000px] md:h-[600px] lg:rounded-xl shadow-sm flex flex-row justify-center flex-wrap my-5 py-5"
          initial={{ x: "-50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          {/* I-care Content */}
          <div className="basis-full text-center font-[ARMRegular] text-4xl md:text-6xl font-semibold my-3 p-3 text-primary text-gradient font-semibold sm:text-5xl md:text-left md:m-3 md:p-3">
            I-CARE
          </div>
          <div className="md:flex">
            <div
              className={`flex  flex-wrap  justify-center md:px-10 md:ml-4 py-2 ${
                showMore ? "hidden" : "visible"
              }`}
            >
              <Player
                autoplay
                loop
                src={icare}
                style={{ height: "330px", width: "100%" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
            <div className=" font-poppins text-primary  basis-7/12">
              <div className="text-wrap text-xl text-justify mx-3 md:ml-32 p-6 ">
                <p>
                  At Incident, a large-scale cultural fest is not only about
                  fun, but also giving back to the community. i-CARE, the social
                  wing of Incident, focuses on programmes such as
                  social-awareness, health, rural-development, education,
                  child-care and gender-equality.
                </p>
                <br />
                <p>
                  Through Beach Schooling, underprivileged students near NITK
                  are tutored in the evenings.
                </p>
              </div>

              {/* opening card */}
              {showMore ? (
                <motion.div
                  className="fixed inset-0 my-5  px-2 shadow-md rounded-3xl opacity-80 shadow-secondary overflow-y-auto no-scrollbar"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className=" w-full h-full overflow-y-auto  no-scrollbar  bg-gradient-to-br from-slate-900 to-black flex-initial justify-center ">
                    <div className="basis-11/12 flex py-2">
                      <h1 className="basis-full font-poppins text-4xl text-center font-medium text-primary py-3">
                        About I-Care
                      </h1>
                      <button
                        className="bg-transparent lg:hover:bg-background rounded p-4 inset-x-100"
                        onClick={() => {
                          setShowMore(!showMore);
                        }}
                      >
                        <GiCrossedSabres className="text-primary" />
                        <div></div>
                      </button>
                    </div>
                    <div className="basis-11/12 h-[800] flex py-2">
                      <ICareModal />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="basis">
                  <div className="flex justify-center items-center basis-1/12">
                    <button
                      className="m-2 p-2 font-poppins bg-gradient-to-r from-[#9f793eff]
                via-[#d4a152ff] to-[#dcb270ff] border-2 border-primary rounded-md back font-medium
                 text-black transition-all duration-150 hover:scale-105"
                      onClick={() => {
                        setShowMore(!showMore);
                      }}
                    >
                      {buttonText}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
export default Icare;
