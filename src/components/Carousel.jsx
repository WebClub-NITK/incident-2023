import React,{useState} from 'react';
import {ChevronLeft,ChevronRight} from 'react-feather';
import slides from '../constants/carousel';
export default function Carousel() {
const [current,setCurrent]=useState(0);
const length=slides.length;
const nextSlide=()=>{
    setCurrent(current===length-1?0:current+1);
};
const prevSlide=()=>{
    setCurrent(current===0?length-1:current-1);
};
if(!Array.isArray(slides)||slides.length<=0){
    return null;
}

return (
<section id="carousel">
        <div className='overflow-hidden relative'>
          <div className='flex ease-in' >
            <div className='rounded-lg overflow-hidden'>
            {<img src={slides[current].src} className="opacity-0.3 object-contain flex justify-center" />}
            </div>
            <div className='w-full h-full absolute top-0 left-0 z-0'>
                <button onClick={prevSlide} className='p-1  text-yellow-600 absolute top-1/2 left-0 z-10 rounded-full'>
            <ChevronLeft size={40}/>
            </button>
            <button onClick={nextSlide} className='p-1  text-yellow-600 p-1  absolute top-1/2 right-0 z-10 rounded-full'>
            <ChevronRight size={40}/>
            </button>
            </div>        
          </div>
        </div>
</section>
);
}