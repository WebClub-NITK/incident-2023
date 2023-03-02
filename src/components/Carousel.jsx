// import React,{useState} from 'react'
// import { Carousel } from 'flowbite-react';
// import { motion,AnimatePresence } from "framer-motion";
// import slides from '../constants/carousel';
// export default  function ICareModal(){
// const [showModal,setShowModal]=useState(false);
// const open=()=>{
//     setShowModal(!showModal);
// }
//     return (
//         <section id="icaremodal">
//           <AnimatePresence>
//             <motion.div className="shadow-md  md:flex shadow-secondary overflow-y-auto no-scrollbar"
//              initial={{ opacity: 0 }}
//              animate={{ opacity:1 }}
//              exit={{ opacity: 0 }}
//              transition={{ duration: 0.5 }}>
           

//           <div className="basis-full md:basis-7/12 font-poppins text-primary text-1xl mx-3 p-4  my-2">
//   {/*<p>
// At Incident, a large-scale cultural fest is not only about fun, but also giving back to the community. i-CARE, the social wing of Incident, focuses on programmes such as social-awareness, health, rural-development, education, child-care and gender-equality. 
// </p>
// <p>
// Through Beach Schooling, underprivileged students near NITK are tutored in the evenings.
// </p>
// <p>
// Through this initiative, students have availed educational essentials such as school bags, stationery,
// notebooks etc., and other medical essentials such as sanitisers and masks to keep them safe.
// </p>
// <p>
// Since 2019, i-Care has been quite active and numerous initiatives such as paper recycling, cloth collection drive, 
// orphanage visits and multiple workshops have been carried out. We also plan to take up many more such noble initiatives in the future. 
// </p>
// </div>
// {/* carousel */}
// {/* <div className="basis-full md:basis-4/12  sm:p-4"> */} 
// <Carousel slideInterval={3000}>
// {slides.map((_, idx) => (
//   <img src={slides[idx].src} className="object-contain" style={{width: "100%", height: "auto"}}/>))}
//   </Carousel>
//  </div>
//  </motion.div>
//   </AnimatePresence>
//  </section>
//     )
// }
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { motion,AnimatePresence } from "framer-motion";
import slides from '../constants/carousel';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  React.useEffect(() => {
    setTimeout(
      () =>
        nextSlide(),
      3000
    );
  
    return () => {};
  }, [currentIndex]);
  return (
    <div className='max-w-[1400px] h-[440px] w-full m-auto py-16 px-4 relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500 '
      ></div>
      {/* Left Arrow */}
      <div className='hidden  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-secondary/10  cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-secondary/10  cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
             <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div key={idx} className={`slideshowDot${currentIndex === idx ? " active" : ""}`}></div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Carousel;