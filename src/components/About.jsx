import React from "react";
import { motion } from "framer-motion";
import { about_us_asset } from "../assets/index";
import Lottie from "react-lottie";
import sword from "../lotties/fire.json"
const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: sword,
  };
  return (
    <motion.div
      className="h-fit rounded-xl shadow-sm flex flex-row flex-wrap my-5"
      initial={{ x: "-50%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className="basis-full md:basis-1/2">
        <div className="text-start font-[ARMRegular] text-6xl m-3 p-4 text-primary font-semibold">
          About
        </div>
        <div className="text-wrap font-poppins text-xl text-primary mx-3 p-4">
          <p>
            What started as a small fest with a meagre budget in the 80s now
            stands as one of the best college festivals in India. Incident is a
            blend of cultural, social, and musical events that'll surely give
            the attendees an ecstatic experience. Incident 2023's unique theme,
            "A Tale of Bards and Knights", is adapted to celebrate this 3-day
            extravaganza with medieval grandeur.
          </p>
          <br />
          <p>
            Join us at NITK, the shoreside institute, while we become 'bards' to
            sing the hymn of this festive splendour. We, the knights of this
            realm called "Incident" are committed to giving you all a
            cherishable and splendid experience.
          </p>
        </div>
      </div>
      <div className="basis-full md:basis-1/2 flex justify-center items-top">
        <Lottie options={defaultOptions}/>
      </div>
    </motion.div>
  );
};
export default About;
