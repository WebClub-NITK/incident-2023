import React, { useCallback } from 'react'
import { useState } from 'react'
import EventDetails from "./EventDetails"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

const Events = () => {

  const [currentImage, setCurrentImage] = useState(2)
  const [selected, setSelected] = useState(false)

  const slidedata = [
    {
      index: 1,
      src: "https://source.unsplash.com/Z8dtTatMVMw",
      info: "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, doloremque!"
    },
    {
      index: 2,
      info: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672580090136-53781593741d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
    },
    {
      index: 3,
      src: "https://source.unsplash.com/Z8dtTatMVMw",
      info: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
    },
    {
      index: 4,
      info :"4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672812995328-2a5459b582ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
    },
    {
      index: 5,
      info :"4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672812995328-2a5459b582ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",

    },
    {
      index: 6,
      src: "https://source.unsplash.com/Z8dtTatMVMw",
      info: "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, doloremque!"
    },
    {
      index: 7,
      info: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672580090136-53781593741d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
    },
    {
      index: 8,
      src: "https://source.unsplash.com/Z8dtTatMVMw",
      info: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
    },
    {
      index: 9,
      info :"4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672812995328-2a5459b582ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
    },
    {
      index: 10,
      info :"4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672812995328-2a5459b582ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",

    },
  ]
  const a=slidedata.map((data) => data.src);
  const b=slidedata.map((data) => data.info);
  const c=slidedata.map((data) => data.index);
  console.log(c);

 


  const currentImageHandler = (index) => {
    setCurrentImage(index)
    console.log(index)

    setSelected(!selected)
    console.log(selected)
  }

  const selectedHandler = (props) => {
    setSelected(props)
  }
  return (
    <div>
      <div>Events</div>
      <div  id='imgBox' className="flex relative">
        <Swiper
        spaceBetween={50}
        modules={[Navigation, Pagination, Scrollbar, A11y,EffectCoverflow]}
        effect="Coverflow"
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slidedata.map(data=>(
          <SwiperSlide key={data.index} className='top-[-30px]'>
            <div className='py-3 justify-center'>
              <img id={data.index} className='w-56 h-64 relative left-[100px]' src={data.src} onClick={()=>{currentImageHandler(data.index)}} />
            </div>
          </SwiperSlide>
          
        

        ))}

      </Swiper>
        {selected == true
        ?<EventDetails data={slidedata[currentImage-1]} closeHandler={selectedHandler} className="transition-all ease-in-out duration-300"/>
        :<div></div>
        }
        
      </div>
    </div>
  )
}

export default Events