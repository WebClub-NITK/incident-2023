import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1240px] w-full h-screen py-16 mt-12'>
    <div className='text-secondary grid md:grid-cols-2 mt-[150px]">'>
      
      <div className=' mx-auto flex flex-col justify-center'>
        <h1 className='text-gradient md:text-8xl sm:text-7xl text-6xl font-bold md:py-6 mx-auto'>Incident 23</h1>
          <p className='md:text-5xl sm:text-4xl text-2xl mt-2 font-bold mx-auto'>A tale of Knights and Bards</p>
          <img className='w-[300px] mx-auto' src='https://static.vecteezy.com/system/resources/previews/012/634/538/original/art-deco-outline-stroke-in-golden-color-for-classy-and-luxury-style-premium-vintage-line-art-design-element-free-png.png'/>
        <h1 className='text-primary text-xl font-bold mx-auto mt-[-40px]'>16-19 March 2023</h1>

        <div className='flex flex-col sm:flex-row items-center justify-center w-full my-12'>
        <button className='bg-primary w-[180px] border-2 border-primary rounded-md font-medium py-4 m-3 text-black'>Register</button>
        <button className='bg-background w-[180px] border-2 border-primary rounded-md font-medium py-4 m-3 text-primary'>About</button>
        </div>
      </div>
        <img className="w-[300px] mx-auto my-4" src="https://www.pngkey.com/png/full/66-661251_printed-vinyl-middle-age-knight-warrior-knight.png" alt="/"/>

    </div>
    </div>
  )
}

export default Hero