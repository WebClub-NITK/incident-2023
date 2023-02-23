import React, { useCallback } from 'react'
import { useState } from 'react'
import EventDetails from "./EventDetails"
import Slider from "react-slick"
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi"
import "./Events.css"
import {logo} from "../assets"
import { motion } from "framer-motion";

const Events = () => {

  const [currentImage, setCurrentImage] = useState(0)
  const [selected, setSelected] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const slidedata = [
    {
      index: 1,
      src: logo,
      info: "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, doloremque!",
      heading: 'EVENT 1'

    },
    {
      index: 2,
      info: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: logo,
      heading: 'EVENT 2'
    },
    {
      index: 3,
      src: logo,
      info: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      heading: 'EVENT 3'
    },
    {
      index: 4,
      info: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: logo,
      heading: 'EVENT 4'
    },
    {
      index: 5,
      info: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: logo,
      heading: 'EVENT 5'
    },

    {
      index: 6,
      src: logo,
      info: "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, doloremque!",
      heading: 'EVENT 6'
    },

    {
      index: 7,
      info: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: logo,      
      heading: 'EVENT 7'
    },

    {
      index: 8,
      src: logo,      
      info: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      heading: 'EVENT 8'
    },

    {
      index: 9,
      info: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: logo,      
      heading: 'EVENT 9'
    },

    {
      index: 10,
      info: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellendus?",
      src: logo,      
      heading: 'EVENT 10'
    },
    
  ]
  const a = slidedata.map((data) => data.src);
  const b = slidedata.map((data)=>data.heading);


  const NextArrow = ({ onClick }) => {
    return (

        <div className="arrow next " onClick={onClick}>
          <TfiArrowCircleRight />
        </div>
    );
  };


  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <TfiArrowCircleLeft />
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentImage(next),
  };

  return (
    <div className='flex justify-center items-center'>
      <div className="Events  text-center">
        <motion.div
              whileInView={{ y: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}>
          <div className='Heading font-[ARMRegular]'>EVENTS</div>
          <Slider {...settings} className='Slider w-[82vw] flex items-center' >
            {slidedata.map((data) => (
              <div className={data.index-1 === currentImage ? "slide activeSlide hover:scale-[1.05] " : "slide hover:scale-[0.95]"}>
                <p className='font-[ARMRegular]'>{data.heading}</p>
                <img src={data.src} alt={data.src} className=' rounded-lg object-cover' onClick={() => { currentImageHandler(data.index-1) }} />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
      {selected == true
        ? <EventDetails data={slidedata[selectedImage]} closeHandler={selectedHandler} className="transition-all ease-in-out duration-300" />
        : <div></div>
      }
    </div>
  )
}

export default Events