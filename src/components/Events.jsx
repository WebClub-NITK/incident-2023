import React, { useCallback } from 'react'
import { useState } from 'react'
import EventDetails from "./EventDetails"
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import "./Events.css"
const Events = () => {

  const [currentImage, setCurrentImage] = useState(0)
  const [selected, setSelected] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const slidedata = [
    {
      index: 1,
      src: "https://source.unsplash.com/Z8dtTatMVMw",
      info: "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, doloremque!",
      heading: 'EVENT 1'

    },
    {
      index: 2,
      info: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRqMbXvdztEAKJMI7MtP0RuM6rYlOQ1TmLL8vBIGj_PLM0hgE_4ua7_Tw9rtFaBQSAEPXcZEyuYrniOmuA&psig=AOvVaw11su-8aSLGm4X7y1slMWtV&ust=1675525051367000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMibj67X-fwCFQAAAAAdAAAAABAE.com/photo-1672580090136-53781593741d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
      heading: 'EVENT 2'
    },
    {
      index: 3,
      src: "https://source.unsplash.com/Z8dtTatMVMw",
      info: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      heading: 'EVENT 3'
    },
    {
      index: 4,
      info: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672812995328-2a5459b582ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
      heading: 'EVENT 4'
    },
    {
      index: 5,
      info: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672812995328-2a5459b582ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
      heading: 'EVENT 5'
    },
    {
      index: 6,
      src: "https://source.unsplash.com/Z8dtTatMVMw",
      info: "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, doloremque!",
      heading: 'EVENT 6'
    },
    {
      index: 7,
      info: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672812995328-2a5459b582ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
      heading: 'EVENT 7'
    },
    {
      index: 8,
      src: "https://source.unsplash.com/Z8dtTatMVMw",
      info: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      heading: 'EVENT 8'
    },
    {
      index: 9,
      info: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672812995328-2a5459b582ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
      heading: 'EVENT 9'
    },
    {
      index: 10,
      info: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: "https://images.unsplash.com/photo-1672812995328-2a5459b582ad?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUwMjM1ODA&ixlib=rb-4.0.3&q=80",
      heading: 'EVENT 10'
    },
  ]
  const a = slidedata.map((data) => data.src);
  const b = slidedata.map((data)=>data.heading);


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

  const selectedImageHandler = useCallback((idx) => {
    setSelectedImage(idx)
  }, [selected])



  const currentImageHandler = (index) => {
    setCurrentImage(index)

    setSelected(!selected)
    selectedImageHandler(index)

    // if (selectedImage == currentImage) {
    //   console.log("hii")
    // }
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
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: -20,
    // autoplay: true,
    // autoplaySpeed: 1600,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentImage(next),
  };

  return (
    <div className='text-center'>
      <div className='Heading'>EVENTS</div>
      <div className="Events">
        <Slider {...settings} className=' relative m-auto flex flex-wrap'>
          {slidedata.map((data) => (
            <div className={data.index-1 === currentImage ? "slide activeSlide" : "slide"}>
              <p>{data.heading}</p>
              <img src={data.src} alt={data.src} onClick={() => { currentImageHandler(data.index-1) }} />
            </div>
          ))}
        </Slider>
      </div>
      {selected == true
        ? <EventDetails data={slidedata[selectedImage]} closeHandler={selectedHandler} className="transition-all ease-in-out duration-300" />
        : <div></div>
      }
    </div>
  )
}

export default Events