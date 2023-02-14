import React from 'react'
import Carousel from './Carousel'
const Icare = () => {
  return (
    <section id="icare">
    <div className=" h-fit lg:rounded-xl shadow-sm flex flex-row flex-wrap my-5 py-3">
    {/* I-care Content */}
      <div className="sm:basis-full flex item-center justify-center text-center font-[ARMRegular] text-6xl m-3 p-4 text-primary font-semibold">
      I-CARE
      </div>
      <div className="basis-full my-2 md:basis-1/2 font-poppins text-primary sm:text-1xl mx-3 p-4  my-2">
        <p>
        At Incident, a large-scale cultural fest is not only about fun, but also giving back to the community. i-CARE, the social wing of Incident, focuses on programmes such as social-awareness, health, rural-development, education, child-care and gender-equality. 
        </p>
        <br />
        <p>
        Through Beach Schooling, underprivileged students near NITK are tutored in the evenings.
        </p>
        <br />
        <p>
        Through this initiative, students have availed educational essentials such as school bags, stationery,
        notebooks etc., and other medical essentials such as sanitisers and masks to keep them safe.
        </p>
        <br/>
        <p>
        Since 2019, i-Care has been quite active and numerous initiatives such as paper recycling, cloth collection drive, 
        orphanage visits and multiple workshops have been carried out. We also plan to take up many more such noble initiatives in the future. 
        </p>
    {/* carousel section */}
      </div>
    <div className="basis-full md:basis-5/12 flex justify-center items-center">
      <Carousel />
    </div>
  </div>
  </section>
  )
}

export default Icare
