import React,{useState} from 'react'
import { motion } from "framer-motion";
import ICareModal from './ICareModal';
import {stunt} from '../assets/index';
import { GiCrossedSabres } from "react-icons/gi";
const Icare = () => {
  const [showMore, setShowMore] = useState(false);
  const buttonText = showMore ? "Show Less" : "Show More";

  return (
    <section id="icare">
    <motion.div className=" h-fit lg:rounded-xl shadow-sm flex flex-row justify-center flex-wrap my-5 py-3" 
     initial={{ x: "-50%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}>
    {/* I-care Content */}
      <div className="sm:basis-full flex item-center justify-center text-center font-[ARMRegular] text-6xl m-3 p-4 text-primary font-semibold">
      I-CARE
      </div>
<div className="flex flex-wrap justify-center item-center m-2">
  <img src={stunt}></img>
</div>
 {/* opening card */}
{showMore?
(
 <div className="fixed inset-0 backdrop-blur-md bg-gradient-to-br from-slate-900 to-black rounded max-h-[85%] rounded-3xl  shadow-md shadow-secondary overflow-y-auto no-scrollbar">
    <div className="w-full rounded-lg overflow-hidden  backdrop-blur-md flex-initial justify-center"
    >
       <button
                  className="bg-transparent lg:hover:bg-background rounded p-2"
                   onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  <GiCrossedSabres className="text-primary" />
                </button>
                <div className="basis-10/12">
                <h1 className="w-full font-poppins text-4xl text-center font-medium text-primary py-3">
                  About I-Care
                </h1>
              </div>
       <ICareModal/>
    </div>
  </div>
):
(
<div className="basis-full">
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
  </motion.div>
  </section>
  )
            }
export default Icare
