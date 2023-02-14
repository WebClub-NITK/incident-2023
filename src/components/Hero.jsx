import React from 'react';
import knight from '../assets/knight.png';
import bard from '../assets/bard.png';
import art from '../assets/art-element.webp';
import Lottie from 'react-lottie';
import animationData from '../assets/Main page bg .mp4.lottie.json';



const Hero = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid "
    }
  };

  return (
    <div>
      <div className=' '>
      
      <Lottie 
	    options={defaultOptions}
        width={1910}
      />
      <img className="absolute md:top-[632px] sm:top-[780px] top-[832px] md:left-60 left-10 sm:w-[210px] md:w-[315px] w-[150px] mx-auto " src={bard} alt="/"/>
      <img className="absolute md:top-[610px] sm:top-[780px] top-[810px] md:right-60 right-10 sm:w-[260px] md:w-[420px] w-[210px] mx-auto " src={knight} alt="/"/>
      </div>
      

    <div className='boxWidth h-screen py-16 absolute inset-x-1 top-[540px]'>
      
      <div className='text-white ">'>
        <div className='mx-auto flex flex-col justify-center'>
          <h1 className='text-gradient font-[RMMedium] md:text-8xl sm:text-7xl text-5xl font-bold md:py-6 mx-auto '>Incident '23</h1>
          <p className='md:text-7xl sm:text-6xl text-4xl mt-2 font-[ELand] mx-auto'>A tale of Bards & Knights</p>
          <img className='w-[320px] mx-auto mt-[-40px]' src={art}/>
          <h1 className='text-primary text-2xl font-bold mx-auto mt-[-45px]'>16 March to 19 March</h1>
          
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Hero