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
        <div className='flex overflow-hidden border-orange-300 border-solid relative'>
          <div className=' ease-in text-center  justify-center  p-5 md:p-1' >
            <div className='rounded-lg overflow-hidden slideshowSlider '>
            {<img src={slides[current].src} className="object-contain" />}
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