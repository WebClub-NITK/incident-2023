import React from 'react';
import knight from '../assets/knight.png';
import bard from '../assets/bard.png';
import art from '../assets/art-element.webp';
import {Player} from '@lottiefiles/react-lottie-player';
import animationData from '../assets/Main_page_bg_lottie.json';



const Hero = () => {

  return (
    <div>
      <div className=''>
      
      
      <Player
      
        autoplay
        loop
        src={animationData}
        
        className="sm:w-[1910px]  w-[1400px] "
      >  
      
      <img className="absolute md:top-[662px] sm:top-[800px] top-[662px] xl:left-60 md:left-40 sm:left-10 left-4 sm:w-[210px] md:w-[315px] w-[140px] mx-auto " src={bard} alt="/"/>
      <img className="absolute md:top-[640px] sm:top-[800px] top-[660px] xl:right-60 md:right-40 sm:right-10 right-3 sm:w-[260px] md:w-[420px] w-[180px] mx-auto " src={knight} alt="/"/>
      
      </Player>

      </div>
      

    <div className='boxWidth h-screen py-16 absolute inset-x-1 sm:top-[540px] top-[410px]'>
      
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