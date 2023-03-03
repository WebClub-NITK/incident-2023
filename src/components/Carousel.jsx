import React, { useState,useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { motion,AnimatePresence } from "framer-motion";
import slides from '../constants/carousel';
import { red } from '@mui/material/colors';

function Carousel({
}) {
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
  
useEffect(() => {
    const k=
    setTimeout(
      () =>
        nextSlide(),
      3000
    );
    return () => clearTimeout(k);
  }, [currentIndex]);
  return (
    <div className='max-w-[1400px] h-[440px] w-full m-auto py-16 px-4 relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className='w-full h-full rounded-3xl bg-center bg-cover duration-500 ease-in-out'
      ></div>
      {/* Left Arrow */}
      <div className='hidden  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-secondary/10  cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-secondary/10  cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* Dots */}
      <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, index) => (
          <RxDotFilled 
            color={index === currentIndex ? '#FFA500' : '#FFF'} 
            onClick={() => goToSlide(index)} 
            key={index}
          />
        ))} 
      </div>
    </div>
  );
}

export default Carousel;