import React from 'react'
import { shield, twin } from '../assets';
import { useState } from 'react';
import "./Sponsors.css"
import {
  bosch, hutti, kptcl, vtpc, ksmcl, shankar, unimitsu, rel, kspcb, mysore, tribe, tgp, mrpl, hexa, ramco, nmpt, yojaka, campco, safe, plum, dairy, unstop, daurcom, mmj, beardo
  , belgian, keventer, mmc, manforce, seg, nandini, sbi, golive, ims, Vi, gatsby,iocl,xtreme
} from '../assets';
import { motion } from "framer-motion";


const Sponsors = () => {

  const [showMore, setShowMore] = useState(false);
  const buttonText = showMore ? "Show Less" : "Show More";

  const SponsorsList = [
    { src: tribe, title: "Title Sponsor", name: "TribeVibe",link:'https://www.tribevibe.live/' },
    { src: rel, title: "Co-Sponsors", name: "Reliance",link:'https://www.ril.com/' },
    // { src: unimitsu, title: "Co-Sponsors", name: "Uniball",link:'https://www.uniball.in/' },
    { src: kspcb, title: "Associate Sponsor", name: "KSPCB",link:'https://kspcb.karnataka.gov.in/' },
    { src: mysore, title: "Associate Sponsor", name: "Mysore Sandal Soap",link:'https://mysoresandal.karnataka.gov.in/english' },
    { src: bosch, title: "Platinum Sponsor", name: "Bosch",link:'https://www.bosch.in/' },
    { src: kptcl, title: "Diamond Sponsor", name: "KPTCL",link:'https://kptcl.karnataka.gov.in/english' },
    { src: hutti, title: "Gold Sponsor", name: "Hutti Gold Mines" ,link:'https://huttigold.karnataka.gov.in/english'},
    { src: sbi, title: "Silver Sponsor", name: "SBI" ,link:'https://bank.sbi/'},
    { src: ksmcl, title: "Bronze Sponsor", name: "KSMCL",link:'https://ksmc.karnataka.gov.in/english' },
    { src: vtpc, title: "Bronze Sponsor", name: "VTPC",link:'https://vtpc.karnataka.gov.in/english' },
    { src: hexa, title: "Technology Partner", name: "Hexagon",link:'https://hexagon.com/' },
    { src: shankar, title: "IAS Coaching Partner", name: "Shankar IAS Academy" ,link:'https://www.shankariasacademy.com/'},
    { src: ramco, title: "Infrastructure Partner ", name: "Ramco Cement" ,link:'https://www.ramcocements.in/'},
    { src: mrpl, title: "Sustainability Partner ", name: "MRPL",link:'https://www.mrpl.co.in/' },
    { src: nmpt, title: "i-Care Partner", name: "NMPT" ,link:'https://newmangaloreport.gov.in/'},
    { src: yojaka, title: "Marine Partner", name: "Yojaka" ,link:'https://www.yojaka.co.in/'},
    { src: tgp, title: "Higher Education Partner", name: "Global Point",link:'http://www.theglobalpoint.in/' },
    { src: campco, title: "Chocolate Partner", name: "Campco",link:'https://campcochocolates.com/' },
    { src: safe, title: "Supply Chain Partner", name: "Safexpress",link:'http://www.safexpress.com/' },
    { src: plum, title: "Bath and Body Partner", name: "Plumbody Lovin" ,link:'https://plumgoodness.com/'},
    { src: dairy, title: "Ice Cream Partner", name: "Dairy Day",link:'https://www.dairyday.com/' },
    { src: unstop, title: "Powered By Sponsor", name: "Unstop",link:'https://unstop.com/festival/incident23-national-institute-of-technology-karnataka-nitk-surathkal-103359' },
    { src: daurcom, title: "Outreach Partner", name: "Daurcom",link:'https://daurcom.com/' },
    { src: mmj, title: "Social Media Partner", name: "MMJ",link:'https://mangaloremerijaan.com/' },
    { src: beardo, title: "Official Grooming Partner", name: "Beardo",link:'https://beardo.in/' },
    { src: belgian, title: "Waffle Partner", name: "Belgian Waffle" ,link:'https://www.instagram.com/belgianwaffleco_mangalore/?hl=en'},
    { src: keventer, title: "Milkshake Partner", name: "Keventers",link:'https://www.instagram.com/keventers_mangalore/?hl=en' },
    { src: mmc, title: "Construction Partner", name: "M M Construction" ,link:'https://goo.gl/maps/j2faCwteumiGAZwcA'},
    // { src: manforce, title: "Official Safety Partner", name: "Manforce " ,link:'https://manforcecondoms.com/'},
    { src: seg, title: "Automotive Partner", name: "SEG Automotive Inida Private Limited" ,link:'https://www.seg-automotive.com/'},
    { src: nandini, title: "Refreshments Partner", name: "Nandini",link:'https://www.kmfnandini.coop/en' },
    { src: twin, title: "Women's Lifestyle Partner", name: "Twin Birds",link:'https://www.twinbirds.co.in/' },
    { src: ims, title: "MBA Coaching Partner", name: "IMS",link:'https://www.imsindia.com/' },
    { src: Vi, title: "Connectivity Partner", name: "VI",link:'https://www.myvi.in/' },
    { src: gatsby, title: "Styling Partner", name: "Gatsby" ,link:'https://gatsbyindia.com/'},
    { src: golive, title: "E-Sports & Gaming Partner", name: "GoLive Games Studios Pvt. Ltd.",link:'https://golive.games/' },
    { src: iocl, title: "Talent Fueling Partner", name: "IOCL",link:'https://iocl.com/' },
    { src: xtreme, title: "Fitness Sponsor", name: "xtreme",link:'https://maps.app.goo.gl/CKHMf8WX4C1xFBKQ6?g_st=ic' },
  ]


  return (
    <div className=' mt-5 mb-10' id="sponsors">
      <div className='basis-full text-center font-[ARMRegular] text-4xl md:text-6xl my-3 p-3 text-primary text-gradient font-semibold sm:text-5xl md:text-left md:m-3 md:p-3'><h1>Sponsors</h1></div>
      <div className=' grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-items-center'>
        {SponsorsList.map((data, index) => {
          return (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`${showMore || (!showMore && index < 9) ? "visible" : "hidden"}`}>
              <div alt="sponsor" className={`card`} key={index}>
              <a href={data.link} target="_blank" rel="noopener noreferrer" className='m-auto' >
              <div className='img m-auto' >
              <img classname='relative object-cover ' src={data.src} />
              </div>
              </a>
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