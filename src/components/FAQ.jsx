import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import faq from "../assets/faq.png";
import { qnaSrc } from "../constants/faq";
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "../index.css";
const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (j) => {
    if (selected == j) {
      return setSelected(null);
    }
    setSelected(j);
  };

  return (
    <section className="mt-12 relative pt-6" id="faq">
      <div className="flex flex-wrap justify-center">
        <div className="w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={faq} className="w-[70%] md:w-[60%] mx-auto mt-4" />
          <motion.div
            className="h-fit rounded-xl shadow-sm flex flex-row flex-wrap my-5"
            initial={{ x: "50%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <div className="w-full flex flex-col md:mt-9 mt-2">
              {qnaSrc.map((item, i) => (
                <div className="m-1 p-1 px-2 rounded-md w-full">
                  <div>
                    <button
                      className="font-[ARMBook] flex w-full justify-between py-3 mb-1 text-left border-t-2 font-bold leading-6 xl:leading-8 tracking-wider text-primary"
                      type="button"
                      onClick={() => toggle(i)}
                    >
                      <span className="md:text-xl sm:text-xl text-md">
                        {item.question}
                      </span>

                      <span>
                        {selected != i ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>
                    </button>
                  </div>
                  <div>
                    {selected == i ? (
                      <div className="text-secondary py-1 font-[poppins] sm:text-xl text-md">
                        {" "}
                        {item.answer}
                      </div>
                    ) : (
                      <div className=" py-1 hidden  "> {item.answer}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* <Player
          autoplay
          loop
          // src="https://assets9.lottiefiles.com/packages/lf20_zptgbuvm.json"
          src="https://assets1.lottiefiles.com/packages/lf20_fzv34t2e.json"
          // src="https://lottie.host/753428f3-9bc1-4b67-9e13-3ec0eb539c6f/HEbELt92rL.json"
          style={{ height: '370px', width: '370px' , margin: '0px 70px'}}
          mode="scroll"
          className='md:absolute md:bottom-0 w-[45%] 2xl:w-1/3 hidden md:block md:mb-0 '

          >
      </Player>  */}
    </section>
  );
};

export default FAQ;
