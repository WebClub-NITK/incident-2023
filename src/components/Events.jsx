import React, { useCallback } from 'react'
import { useState } from 'react'
import EventDetails from "./EventDetails"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y,Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


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
        modules={[Navigation, Scrollbar, A11y,Autoplay]}
        navigation={true}
        slidesPerView={5}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slidedata.map(data=>(
          <SwiperSlide key={data.index} className='top-[-30px]'>
            <div className='py-9 justify-center'>
              <img id={data.index} className='w-56 h-64 relative' src={data.src} onClick={()=>{currentImageHandler(data.index)}} />
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