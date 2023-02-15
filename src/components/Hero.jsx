import React from 'react';
import knight from '../assets/knight.png';
import bard from '../assets/bard.png';
import art from '../assets/art-element.webp';
import {Player} from '@lottiefiles/react-lottie-player';
import animationData from '../assets/Main_page_bg_lottie.json';



const Hero = () => {

  return (
    <div>
      <div className='w-full'>
      
      
      <Player
      
        autoplay
        loop
        src={animationData}
        
        className="md:w-full sm:w-[1900px] w-[1400px] "
      >  
      
      <img className="absolute md:top-[65%] sm:top-[730px] top-[572px] xl:left-60 lg:left-40 md:left-12 sm:left-10 left-4 sm:w-[230px] md:w-[215px] xl:w-[290px] w-[140px] mx-auto " src={bard} alt="/"/>
      <img className="absolute md:top-[65%] sm:top-[730px] top-[570px] xl:right-60 lg:right-40 md:right-12 sm:right-10 right-3 sm:w-[290px] md:w-[270px] xl:w-[365px] w-[180px]  mx-auto " src={knight} alt="/"/>
      
      </Player>

      </div>
      

    <div className='boxWidth h-screen py-16 absolute inset-x-1 xl:top-[50%] sm:top-[45%] top-[340px]'>
      
      <div className='text-white ">'>
        <div className='mx-auto flex flex-col justify-center'>
          <h1 className='text-gradient font-[RMMedium] xl:text-8xl md:text-6xl sm:text-6xl text-5xl font-bold md:py-6 mx-auto '>Incident '23</h1>
          <p className='xl:text-7xl md:text-5xl sm:text-5xl text-4xl mt-2 font-[ELand] mx-auto'>A tale of Bards & Knights</p>
          <img className='w-[320px] mx-auto mt-[-50px]' src={art}/>
          <h1 className='text-primary font-[poppins] xl:text-3xl sm:text-2xl text-xl font-bold mx-auto mt-[-60px]'>16 March to 19 March</h1>
          
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Hero