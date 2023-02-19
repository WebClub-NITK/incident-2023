import React from 'react'
import { socialMedia, aboutMe } from "../constants";
import { layout } from "../style";
import unstop from "../assets/unstop-logo.png";
import inciLogo from "../assets/incilogo.png"

const Footer = () => (
  <footer id="contactMe" className="bg-[#181823] sm:px-16 px-6">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
    >
      <div className={` ${layout.sectionInfo}`}>
        <h2 className="text-xl font-bold text-gray-800 font-[ARMRegular] dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-[30px]">
          {aboutMe.name}
        </h2>
        <p
          className={`font-[ARMRegular] font-normal dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-[20px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          {aboutMe.tagLineOne}
        </p>
        <p
          className={`font-[ARMRegular] font-normal dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-[20px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          {aboutMe.tagLineTwo}
        </p>
        <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>
        <div className="grid grid-cols-2">
          {/* styles is a prop */}
          <button className="text-dimMaroon flex mx-auto justify-center items-center my-6 xl:w-[330px] md:w-[230px] sm:w-[300px] w-[240px] font-[RMMedium] button-gradient p-2 px-2 font-bold xl:text-2xl md:text-base sm:text-xl text-sm cursor-pointer rounded-md hover:text-white">
            <img src={unstop} className="xl:h-[30px]  md:h-[30px] sm:h-[30px] h-[30px] px-2" />REGISTER NOW</button>
        </div>
      </div>
      <div className="md:ml-auto mt-10 md:mt-0">
        <img
          src={inciLogo}
          alt="Incident Logo"
          className="w-[200px] h-[200px] relative z-[5] rounded-full"
        />
      </div>
    </div>
  </footer>
);

export default Footer;