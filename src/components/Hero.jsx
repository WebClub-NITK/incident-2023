import React from 'react';
import knight from '../assets/knight.png';
import bard from '../assets/bard.png';
import art from '../assets/art-element.webp';
import bgVideo from '../assets/BgVideo.webm';
import bg from '../assets/BgVideo.gif';


const Hero = () => {

  return (
    <div>
      <div className='h-screen'>
      <img className="object-cover min-h-full  md:block"src={bg} alt="" />
      </div>
      <div className='lg:block'>
     <img className="absolute top-80 left-10 sm:w-[280px] md-[400px] w-[150px] mx-auto my-4" src={bard} alt="/"/>
      <img className="absolute top-80 right-10  sm:w-[320px] md-[430px] w-[190px] mx-auto my-4" src={knight} alt="/"/>
      </div>

    <div className='boxWidth h-screen py-16 absolute inset-x-1 top-40'>
      
      <div className='text-white mt-[150px]">'>
        <div className='mx-auto flex flex-col justify-center'>
          <h1 className='text-gradient font-[RMMedium] md:text-8xl sm:text-7xl text-5xl font-bold md:py-6 mx-auto '>Incident 23</h1>
          <p className='md:text-7xl sm:text-6xl text-4xl mt-2 font-[ELand] mx-auto'>A tale of Bards & Knights</p>
          <img className='w-[300px] mx-auto' src={art}/>
          <h1 className='text-primary text-2xl font-bold mx-auto mt-[-40px]'>16 March to 19 March</h1>
          <div className='flex flex-col sm:flex-row items-center justify-center w-full my-12'>
            <button className='button-gradient w-[180px] border-2 border-primary rounded-md font-medium py-4 m-3 text-black hover:text-white'>Register</button>
            <button className=' w-[180px] border-2 border-primary rounded-md font-medium py-4 m-3 text-primary hover:text-secondary'>About</button>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Hero