import React from 'react'
import Carousel from './Carousel'
const Icare = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-gray-900 to-neutral-900 h-fit lg:rounded-xl shadow-sm flex flex-row flex-wrap my-5">

      <div className="sm:basis-full text-start  font-poppins text-6xl m-3 p-4 text-primary font-semibold">
      I-CARE
      </div>
      <div className="basis-full my-2 md:basis-1/3 text-primary sm:text-1xl mx-3 p-4 font-semibold my-2">
        <p>
        We at Incident believe that conducting a large-scale cultural fest is not only about having fun, but also about
        giving back to the community.
        i-CARE, the social initiative wing of Incident, focuses on programmes in social-awareness, health,
        rural-development, education, child-care and gender-equality. 
        </p>
        <br />
        <p>
        Beach Schooling is one such initiative where underprivileged students in and around NITK are provided with
        regular tutoring in the evenings, by the temple overlooking NITK Beach. 
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
      </div>
    {/* </div> */}
    <div className="basis-full md:basis-7/12 flex justify-center items-center">
      <Carousel />
    </div>
  </div>
  )
}

export default Icare