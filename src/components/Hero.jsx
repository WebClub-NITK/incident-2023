import React from 'react';
import art from '../assets/art-element.webp';
import {Player} from '@lottiefiles/react-lottie-player';
import animationdata from '../assets/Main_page_bg_lottie.json';



const Hero = () => {

  return (
    <div>
      <div className='w-full'>
      <Player
      
        autoplay
        loop
        src={animationdata}
        className="md:w-full sm:w-[2000px] w-[1400px] "
      /> 

      </div>

    <div className='boxWidth h-screen py-16 absolute inset-x-1 xl:top-[52%] md:top-[45%] sm:top-[55%] top-[380px]'>
      
      <div className='text-white'>
        <div className='mx-auto flex flex-col justify-center'>
          <h1 className='text-gradient font-[RMMedium] xl:text-8xl md:text-6xl sm:text-8xl text-5xl font-bold md:py-6 mx-auto '>Incident '23</h1>
          <p className='xl:text-7xl md:text-5xl sm:text-7xl text-4xl mt-2 font-[ELand] mx-auto'>A tale of Bards & Knights</p>
          <img className='w-[320px] mx-auto mt-[-50px]' src={art}/>
          <h1 className='text-primary font-[poppins] xl:text-3xl sm:text-3xl text-xl font-bold mx-auto mt-[-60px]'>16 March to 19 March</h1>
          
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Hero