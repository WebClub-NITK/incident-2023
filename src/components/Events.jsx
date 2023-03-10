import React, { useCallback } from 'react'
import { useState } from 'react'
import EventDetails from "./EventDetails"
import Slider from "react-slick"
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi"
import "./Events.css"
import { logo } from "../assets"
import { sunidhi } from '../assets'
import { mx, cm1, cm2 } from '../assets'
import { motion } from "framer-motion";

const Events = () => {

  const [currentImage, setCurrentImage] = useState(0)
  const [selected, setSelected] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const slidedata = [
    {
      index: 1,
      src: sunidhi,
      date:"19/03/2023",
      info: "The headliner for the final day of Incident 2023 is none other than the Queen of Bollywood music, Sunidhi Chauhan!\n\nIn a career spanning over 2 decades, Sunidhi has lent her expressive voice to 200+ movies. With chartbusters like Sheila ki Jawani, Ra Ra Rakkamma and Crazy Kiya Re, She has truly been one of the flagbearers of Indian music.\n\nHer energy and flair are second to none and the time is nigh for these shores to witness it on the 19th of March at Incident 2023.",
      heading: 'BOLLYWOOD NIGHT'

    },
    {
      index: 2,
      info: `Incident 2023 presents to you the Mysore-based fusion band, Mysore Xpress on the Fusion Night on March 17th.\n\n 
       \n\nFrom wonderful originals like Nammooru, Freedom Rock and Samaya to creative mashups and covers of popular songs like Belageddu, Gulabi Aanken and Dil Chahta Hai, Mysore Xpress truly is the complete package for Fusion music lovers!`,
      heading: 'FUSION NIGHT',
      src: mx,
      date:"17/03/2023",
    },
    {
      index: 3,
      src: cm1,
      info: "Coming soon...",
      heading: 'DJ NIGHT',
      date:"18/03/2023",
    },
    {
      index: 4,
      info: "Coming soon..",
      src: cm2,
      heading: 'COMEDY NIGHT',
      date:"16/03/2023",
    },
  ]
  const a = slidedata.map((data) => data.src);
  const b = slidedata.map((data) => data.heading);


  const NextArrow = ({ onClick }) => {
    return (

      <div className="arrow next sm:flex hidden" onClick={onClick}>
        <TfiArrowCircleRight />
      </div>
    );
  };


  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev sm:flex hidden" onClick={onClick}>
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
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerPadding: -20,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentImage(next),
  };

  if (window.innerWidth >= 760) {
    return (
      <div className='flex justify-center items-center my-12' id="events">
        <div className="Events  text-center">
          <motion.div
            whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
          >
            <div className='Heading text-gradient font-[ARMRegular] leading-[2] md:text-[80px] text-[50px] font-bold float-left '>EVENTS</div>
            <Slider {...settings} className={` Slider w-[80vw] flex items-center`}>
              {slidedata.map((data) => (
                <div className={data.index-1 === currentImage ? "slide activeSlide hover:scale-[0.99] "  : "slide hover:scale-[0.9]"}>
                  <img src={data.src} alt={data.src} className=' rounded-3xl object-cover' onClick={() => { currentImageHandler(data.index-1) }} />
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
  else {
    settings.slidesToShow = 1
    return (
      <div className='flex justify-center items-center'>
        <div className="Events text-center">
          <motion.div
            whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}>
            <div className='Heading text-gradient font-[ARMRegular] leading-[2] md:text-[60px] text-[60px] font-bold'>EVENTS</div>
            <Slider {...settings} className={` Slider w-[60vw] flex items-center`}>
              {slidedata.map((data) => (
                <div className={data.index-1 === currentImage ? "slide activeSlide scale:[0.8] hover:scale-[0.99] "  : "slide hover:scale-[0.9]"}>
                  <img src={data.src} alt={data.src} className=' rounded-3xl object-cover' onClick={() => { currentImageHandler(data.index-1) }} />
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
}

export default Events