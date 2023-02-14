import React,{useState} from 'react';
import icare1 from '../assets/icare1.jpg';
import icare2 from '../assets/icare2.jpg';
import icare3 from '../assets/icare3.jpg';
import icare4 from '../assets/icare4.jpg';
import icare5 from '../assets/icare5.jpg';
import {ChevronLeft,ChevronRight} from 'react-feather';
export default function Carousel() {
const slides=[
    {
        src:icare1,
    },
    {
        src:icare2,
    },
    {
        src:icare3,
    },
    {
        src:icare4,
    },
    {
        src:icare5,
    }
];
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
    <section className="carousel">
         <div className='overflow-hidden relative w-[800] h-[800]'>
                        <div className='flex' >
           {<img src={slides[current].src} className="object-contain  300 fade-in zoom-in aspect-square " />
}
<div className='w-full h-full absolute top-0 left-0 z-0'>
    <button onClick={prevSlide} className='p-1 bg:white absolute top-1/2 left-0 z-10 rounded-full'>
<ChevronLeft size={40}/>
</button>
<button onClick={nextSlide} className='p-1 bg:white absolute top-1/2 right-0 z-10 rounded-full'>
<ChevronRight size={40}/>
</button>
</div>

</div>
</div>
    </section>
);
}