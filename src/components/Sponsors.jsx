import React from 'react'
import { shield, twin } from '../assets';
import { useState } from 'react';
import "./Sponsors.css"
import {
  bosch, hutti, kptcl, vtpc, ksmcl, shankar, unimitsu, rel, kspcb, mysore, tribe, tgp, mrpl, hexa, ramco, nmpt, yojaka, campco, safe, plum, dairy, unstop, daurcom, mmj, beardo
  , belgian, keventer, mmc, manforce, seg, nandini, sbi, golive, ims, Vi, gatsby,
} from '../assets';
import { motion } from "framer-motion";


const Sponsors = () => {

  const [showMore, setShowMore] = useState(false);
  const buttonText = showMore ? "Show Less" : "Show More";

  const SponsorsList = [
    { src: tribe, title: "Title Sponsor", name: "TribeVibe" },
    { src: rel, title: "Co-Sponsors", name: "Reliance" },
    { src: unimitsu, title: "Co-Sponsors", name: "Uniball" },
    { src: kspcb, title: "Associate Sponsor", name: "KSPCB" },
    { src: mysore, title: "Associate Sponsor", name: "Mysore Sandal Soap" },
    { src: bosch, title: "Platinum Sponsor", name: "Bosch" },
    { src: kptcl, title: "Diamond Sponsor", name: "KPTCL" },
    { src: hutti, title: "Gold Sponsor", name: "Hutti Gold Mines" },
    { src: sbi, title: "Silver Sponsor", name: "SBI" },
    { src: ksmcl, title: "Bronze Sponsor", name: "KSMCL" },
    { src: vtpc, title: "Bronze Sponsor", name: "VTPC" },
    { src: hexa, title: "Technology Partner", name: "Hexagon" },
    { src: shankar, title: "IAS Coaching Partner", name: "Shankar IAS Academy" },
    { src: ramco, title: "Infrastructure Partner ", name: "Ramco Cement" },
    { src: mrpl, title: "Sustainability Partner ", name: "MRPL" },
    { src: nmpt, title: "i-Care Partner", name: "NMPT" },
    { src: yojaka, title: "Marine Partner", name: "Yojaka" },
    { src: tgp, title: "Higher Education Partner", name: "Global Point" },
    { src: campco, title: "Chocolate Partner", name: "Campco" },
    { src: safe, title: "Supply Chain Partner", name: "Safexpress" },
    { src: plum, title: "Bath and Body Partner", name: "Plumbody Lovin" },
    { src: dairy, title: "Ice Cream Partner", name: "Dairy Day" },
    { src: unstop, title: "Powered By Sponsor", name: "Unstop" },
    { src: daurcom, title: "Outreach Partner", name: "Daurcom" },
    { src: mmj, title: "Social Media Partner", name: "MMJ" },
    { src: beardo, title: "Official Grooming Partner", name: "Beardo" },
    { src: belgian, title: "Waffle Partner", name: "Belgian Waffle" },
    { src: keventer, title: "Milkshake Partner", name: "Keventers" },
    { src: mmc, title: "Construction Partner", name: "M M Construction" },
    { src: manforce, title: "Official Safety Partner", name: "Manforce " },
    { src: seg, title: "Automotive Partner", name: "SEG Automotive Inida Private Limited" },
    { src: nandini, title: "Refreshments Partner", name: "Nandini" },
    { src: twin, title: "Women's Lifestyle Partner", name: "Twin Birds" },
    { src: ims, title: "MBA Coaching Partner", name: "IMS" },
    { src: Vi, title: "Connectivity Partner", name: "VI" },
    { src: gatsby, title: "Styling Partner", name: "Gatsby" },
    { src: golive, title: "E-Sports & Gaming Partner", name: "GoLive Games Studios Pvt. Ltd." },

  ]

  return (
    <div className=' mt-5 mb-10' id="sponsors">
      <div className='basis-full text-center font-[ARMRegular] text-4xl md:text-6xl my-3 p-3 text-primary text-gradient font-semibold sm:text-5xl md:text-left md:m-3 md:p-3'><h1>Sponsors</h1></div>
      <div className=' grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-items-center'>
        {SponsorsList.map((data, index) => {
          return (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`${showMore || (!showMore && index < 9) ? "visible" : "hidden"}`}>
              <div alt="sponsor" className={`card`} key={index}>
                <div className='img m-auto' >
                  <img classname='relative object-cover ' src={data.src} />
                </div>
                <div className='font-poppins text-[25px] text-primary m-auto'>{data.title}</div>
              </div>
            </motion.div>
          )
        })}

      </div>
      {SponsorsList.length > 9 && (
        <div className="flex flex-wrap justify-center">
          <button
            className="m-2 p-2 font-poppins bg-gradient-to-r from-[#9f793eff]
              via-[#d4a152ff] to-[#dcb270ff] border-2 border-primary rounded-md back md:font-medium text-black md:transition-all duration-150 hover:scale-105"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  )
}

export default Sponsors