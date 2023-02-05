import React from "react";
import { logo } from "../assets";
const About = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 h-fit lg:rounded-xl shadow-sm flex flex-row flex-wrap my-5">
      <div className="basis-full md:basis-5/12">
        <div className="text-start font-poppins text-6xl m-3 p-4 text-primary font-semibold">
          About
        </div>
        <div className="text-wrap text-lg text-primary mx-3 p-4">
          <p>
            As the month of March approaches, every NITKian unanimously awaits
            in eager anticipation of one event...one such extravaganza...that is
            perhaps the highlight of their year - Incident. Incident is an
            experience that mere words can't encapture. It is an ecstasy that
            demands to be tasted first-hand.
          </p>
          <br />
          <p>
            Incident has been one of the flag-bearers of college fiestas in
            India and has taken huge strides, ever since its inception in 1980,
            to attain its current prestige.
          </p>
          <br />
          <p>
            This year marks our 43rd edition and Incident promises to be grander
            than ever before.
          </p>
        </div>
      </div>
      <div className="basis-full md:basis-7/12 flex justify-center items-center">
        <img src={logo} alt="" class=" max-h-[350px]" />
      </div>
    </div>
  );
};
export default About;