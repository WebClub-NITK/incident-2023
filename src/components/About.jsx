import React from "react";
import { logo } from "../assets";
const About = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-neutral-900 h-fit xl:rounded-xl shadow-sm">
      <div className="text-start font-poppins text-6xl m-3 p-4 text-primary font-semibold">
        About
      </div>
      <div className="flex flex-row flex-wrap mx-3 px-4 pb-4">
        <div className="basis-full md:basis-5/12 max-h-[50%] text-wrap text-lg text-primary md:bais">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, omnis
          pariatur fugiat, error dolor perspiciatis eaque praesentium eligendi
          voluptate deserunt neque quasi vel id facilis et placeat dolore nobis
          a illo voluptatibus facere cupiditate ipsum. Praesentium corporis
          voluptates fugit impedit perspiciatis nihil, aliquid, dolore commodi
          debitis iste hic beatae libero fuga! Quaerat perferendis accusantium
          quisquam rerum quia. Praesentium dolorum alias, placeat, nostrum ad
          odio tempora laboriosam fuga fugiat rerum veritatis suscipit
          recusandae commodi itaque quisquam quam vero eaque unde amet sint
          architecto, cum porro! Similique esse tempora qui aspernatur possimus
          officiis nulla id quam velit! Beatae eligendi delectus unde et!
        </div>
        <div className="basis-full md:basis-7/12 flex justify-center items-center">
          <img src={logo} alt="" class=" max-h-[350px]" />
        </div>
      </div>
    </div>
  );
};
export default About;
