import React,{useState} from 'react';
import {ChevronLeft,ChevronRight} from 'react-feather';
import slides from '../constants/carousel';
import '../constants/carousel.css';
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
React.useEffect(() => {
  setTimeout(
    () =>
      nextSlide(
      ),
    3000
  );

  return () => {};
}, [current]);

return (
<section id="carousel">
        <div className='overflow-hidden relative'>
          <div className='flex ease-in p-5' >
            <div className='rounded-lg overflow-hidden slideshowSlider'>
            {<img src={slides[current].src} className="object-contain flex justify-center" />}
            </div>
            <div className='w-full h-full absolute top-0 left-0 z-0'>
                <button onClick={prevSlide} className='p-4 text-primary absolute top-1/2 left-0 z-10 rounded-full'>
            <ChevronLeft size={40}/>
            </button>
            <button onClick={nextSlide} className='p-4 text-primary   absolute top-1/2 right-0 z-10 rounded-full'>
            <ChevronRight size={40}/>
            </button>
            </div>        
          </div>
        </div>
        <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div key={idx} className={`slideshowDot${current === idx ? " active" : ""}`}></div>
        ))}
      </div>
</section>
);
}