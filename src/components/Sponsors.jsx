import React from 'react'
import { shield } from '../assets';
import "./Sponsors.css"

const Sponsors = () => {

  const SponsorsList = [
    { src: "", title: "Title Sponsor", name: "TribeVibe" },
    { src: "", title: "Co-Sponsors", name: "Reliance" },
    { src: "", title: "Co-Sponsors", name: "Uniball" },
    { src: "", title: "Associate Sponsor", name: "KSPCB" },
    { src: "", title: "Associate Sponsor", name: "Mysore Sandal Soap" },
    { src: "", title: "Platinum Sponsor", name: "Bosch" },
    { src: "", title: "Diamond Sponsor", name: "KPTCL" },
    { src: "", title: "Gold Sponsor", name: "Hutti Gold Mines" },
    { src: "", title: "Bronze Sponsor", name: "KSMCL" },
    { src: "", title: "Bronze Sponsor", name: "VTPC" },
    { src: "", title: "Technology Partner", name: "Hexagon" },
    { src: "", title: "IAS Coaching Partner", name: "Shankar IAS Academy" },
    { src: "", title: "Infrastructure Partner ", name: "Ramco Cement" },
    { src: "", title: "Sustainability Partner ", name: "MRPL" },
    { src: "", title: "i-Care Partner", name: "NMPT" },
    { src: "", title: "Marine Partner", name: "Yojaka" },
    { src: "", title: "Higher Education Partner", name: "Global Point" },
    { src: "", title: "Chocolate Partner", name: "Campco" },
    { src: "", title: "Supply Chain Partner", name: "Safexpress" },
    { src: "", title: "Bath and Body Partner", name: "Plumbody Lovin" },
    { src: "", title: "Ice Cream Partner", name: "Dairy Day" },
    { src: "", title: "Powered By Sponsor", name: "Unstop" },
    { src: "", title: "Outreach Partner", name: "Daurcom" },
    { src: "", title: "Social Media Partner", name: "MMJ" },
    { src: "", title: "Official Grooming Partner", name: "Beardo" },
    { src: "", title: "Waffle Partner", name: "Belgian Waffle" },
    { src: "", title: "Milkshake Partner", name: "Keventers" },
    { src: "", title: "Construction Partner", name: "M M Construction" },
    { src: "", title: "Official Safety Partner", name: "Manforce " },
    { src: "", title: "Automotive Partner", name: "SEG Automotive Inida Private Limited" },
    { src: "", title: "Refreshments Partner", name: "Nandini" },
    { src: "", title: "Women's Lifestyle Partner", name: "Twin Birds" },

  ]

  return (
    <div className=' mt-5 mb-10'>
      <div className=' grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-items-center'>
        {SponsorsList.map((data) => {
          return (
            <div alt="sponsor" className="card" >
              <img src={data.src} />
              <div className='font-poppins text-xl text-primary m-auto'>{data.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sponsors