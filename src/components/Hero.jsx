import React from "react";
import art from "../assets/art-element.webp";
import { Player } from "@lottiefiles/react-lottie-player";
import animationdata from "../assets/bg_lottie.json";
import unstop from "../assets/unstop-logo.png";

const Hero = () => {
  return (
    <div id="home">
      <div className="w-full">
        <Player
          autoplay
          loop
          src={animationdata}
          className="md:w-full sm:w-[2000px] w-[1400px] "
        />
      </div>

      <div className="boxWidth h-screen py-16 absolute inset-x-1 xl:top-[50%] lg:top-[42%] md:top-[35%] sm:top-[500px] top-[380px]">
        <div className="text-white">
          <div className="mx-auto flex flex-col justify-center">
            <h1 className="text-gradient font-[RMMedium] xl:text-8xl lg:text-6xl md:text-6xl sm:text-8xl text-5xl font-bold md:py-6 mx-auto ">
              Incident '23
            </h1>
            <p className="xl:text-7xl lg:text-5xl md:text-5xl sm:text-7xl text-4xl mt-2 font-[ELand] mx-auto">
              A Tale of Bards & Knights
            </p>
            <img className="w-[320px] mx-auto my-[-60px]" src={art} />
            <h1 className="text-primary font-[poppins] xl:text-3xl lg:text-2xl sm:text-3xl text-xl font-bold mx-auto">
              16 March to 19 March
            </h1>
            <a href="https://unstop.com/festival/incident23-national-institute-of-technology-karnataka-nitk-surathkal-103359">
            <button className="text-dimMaroon flex mx-auto justify-center items-center my-6 xl:w-[350px] md:w-[230px] sm:w-[300px] w-[240px] font-[RMMedium] button-gradient p-2 px-2 font-bold xl:text-2xl md:text-base sm:text-xl text-sm cursor-pointer rounded-md hover:text-white">
              <img
                src={unstop}
                className="xl:h-[35px]  md:h-[25px] sm:h-[30px] h-[25px] px-2"
              />
              REGISTER NOW
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
