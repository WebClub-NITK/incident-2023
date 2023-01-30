import React, { useCallback } from 'react'
import { useState } from 'react'

const Events = () => {

  const [currentImage, setCurrentImage] = useState(1)

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
  ]

  const currentImageHandler = (index) => {
    setCurrentImage(index)
  }


  return (
    <div>
      <div>Events</div>
      <div className="flex">
        {slidedata.map((data) => {
          if (data.index === currentImage) {
            return (
              <div onClick={() => currentImageHandler(data.index)} className="w-full z-10">
                <img src={data.src} alt='incident-events' className="w-56 h-80 object-cover mx-5 rounded-lg" />
                <div>{data.info}</div>
              </div>
            )
          } else {
            return (
              <div onClick={() => currentImageHandler(data.index)} className="z-0">
                <img src={data.src} alt='incident-events' className="w-56 h-80 object-cover opacity-50 mx-5 rounded-lg" />
                <div>{data.info}</div>
              </div>
            )
          }

        })
        }
      </div>
    </div>
  )
}

export default Events