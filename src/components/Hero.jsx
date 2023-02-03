import React from 'react';
import knight from '../assets/knight.png';
import bard from '../assets/bard.png';
import art from '../assets/art-element.webp';
import bgVideo from '../assets/bgvideo.webm';


const Hero = () => {
  return (
    <div>
      <video className='hidden md:block opacity-30 h-screen mt-[-50px]' autoPlay loop muted>
      <source src={bgVideo} type="video/mp4"/>
     </video>
     <div className=' h-screen md:hidden'>
      </div>  {/* dummy div to remove video on md and xs screens */}

    <div className='boxWidth h-screen py-16 absolute inset-x-1 top-40'>
      
      <div className='text-secondary grid md:grid-cols-2 mt-[150px]">'>
        <div className='mx-auto flex flex-col justify-center'>
          <h1 className='text-gradient font-[Cinzel] md:text-8xl sm:text-7xl text-5xl font-bold md:py-6 mx-auto '>Incident 23</h1>
          <p className='md:text-5xl sm:text-4xl text-2xl mt-2 font-[Lobster] mx-auto'>A tale of Bards & Knights</p>
          <img className='w-[300px] mx-auto' src={art}/>
          <h1 className='text-primary text-xl font-bold mx-auto mt-[-40px]'>16-19 March 2023</h1>
          <div className='flex flex-col sm:flex-row items-center justify-center w-full my-12'>
            <button className='button-gradient w-[180px] border-2 border-primary rounded-md font-medium py-4 m-3 text-black hover:text-white'>Register</button>
            <button className=' w-[180px] border-2 border-primary rounded-md font-medium py-4 m-3 text-primary hover:text-secondary'>About</button>
          </div>
        </div>
        <div className='flex flex-row mx-auto'>
          <img className="sm:w-[280px] md-[400px] w-[150px] mx-auto my-4 hover:scale-105" src={bard} alt="/"/>
          <img className="sm:w-[310px] md-[420px] w-[180px] mx-auto my-4 hover:scale-105" src={knight} alt="/"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero