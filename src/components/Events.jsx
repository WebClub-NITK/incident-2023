import React from 'react'
import { useState } from 'react'
import EventDetails from "./EventDetails"
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import "./Events.css"
const Events = () => {

  const [currentImage, setCurrentImage] = useState(0)
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
      src: "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRqMbXvdztEAKJMI7MtP0RuM6rYlOQ1TmLL8vBIGj_PLM0hgE_4ua7_Tw9rtFaBQSAEPXcZEyuYrniOmuA&psig=AOvVaw11su-8aSLGm4X7y1slMWtV&ust=1675525051367000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMibj67X-fwCFQAAAAAdAAAAABAE.com/photo-1672580090136-53781593741d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
    },
    {
      index: 3,
      src: "https://source.unsplash.com/Z8dtTatMVMw",
      info: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
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
      src: "https://images.unsplash.com/photo-1672812995328-2a5459b582ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
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


  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };


  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };





  const currentImageHandler = (index) => {
    setCurrentImage(index)
    console.log(index)

    setSelected(!selected)
    console.log(selected)
  }

  const selectedHandler = (props) => {
    setSelected(props)
  }
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current , next) => setCurrentImage(next),
  };

  return (
    <div className=''>
      <div>Events</div>
        <div className="Events">
          <Slider {...settings}>
            {a.map((img,idx) => (
              <div className={idx === currentImage ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} onClick={()=>{currentImageHandler(idx+1)}}/>
              </div>
            ))}
          </Slider>
        </div>
        {selected == true
        ?<EventDetails data={slidedata[currentImage-1]} closeHandler={selectedHandler} className="transition-all ease-in-out duration-300"/>
        :<div></div>
        }
        
    </div>
  )
}

export default Events