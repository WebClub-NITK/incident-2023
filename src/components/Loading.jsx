import React from 'react'
import inciload from "../assets/inci-loading.gif";

function Loading() {
  return (
    <div className='w-full h-screen'>
        <img className='relative m-auto top-[40%] md:w-[6%] sm:w-[20%] w-[35%]' src={inciload}/>
    </div>
  )
}

export default Loading