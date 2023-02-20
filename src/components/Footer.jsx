import React from "react";
import { socialMedia, aboutMe } from "../constants";
import { layout } from "../style";
import unstop from "../assets/unstop-logo.png";
import inciLogo from "../assets/incilogo.png";

const Footer = () => (
  <footer id="contactUs" className="bg-[#212c33] sm:px-16 px-6 ">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
    >
      <div className={` ${layout.sectionInfo}`}>
        <h2 className="text-xl font-bold font-[ARMRegular] text-gradient dark:text-white text-[30px]">
          {aboutMe.name}
        </h2>
        <a
          href="tel:+918884147838"
          className={`font-[poppins] font-normal text-secondary md:hover:text-primary text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          {aboutMe.tagLineOne}
        </a>
        <a
          href="mailto:incident@nitk.edu.in"
          className={`font-[poppins] font-normal text-secondary md:hover:text-primary text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          {aboutMe.tagLineTwo}
        </a>
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
          <button className="text-dimMaroon flex mx-auto justify-center items-center my-6 md:w-[250px] sm:w-[300px] w-[240px] font-[RMMedium] button-gradient p-2 px-2 font-bold md:text-base sm:text-xl text-sm cursor-pointer rounded-md hover:text-white">
            <img
              src={unstop}
              className="h-[30px] px-2"
            />
            REGISTER NOW
          </button>
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
