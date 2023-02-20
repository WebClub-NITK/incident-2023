import React from 'react'
import inciload from "../assets/inci-loading.gif";

function Loading() {
  return (
    <div className='w-full h-screen'>Loading
        <img className='relative m-auto top-[40%] md:w-[6%] w-[20%]' src={inciload}/>
    </div>
  )
}

export default Loading