import React from 'react';
import { useState } from 'react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import { qnaSrc } from '../constants/faq'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const FAQ = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (j) =>{
    if(selected==j){
      return setSelected(null)
    }
    setSelected(j)
  }

  return (
    <section className='mt-12 relative'>

    
    <div className='flex flex-wrap justify-center'>
      <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <div>
          <h2 className='text-primary md:text-8xl sm:text-6xl ss:text-5xl text-4xl p-4'>
          Frequently asked questions
          </h2>
      
      
      
        </div>


      <div className='w-full flex flex-col md:mt-16 mt-2'>

        {qnaSrc.map((item,i) => (
          <div className='m-2 p-2 px-4 rounded-md w-full'>
            <div> 
            <button className='flex w-full justify-between py-3 mb-2 text-left border-t-2 font-bold leading-6 xl:leading-8 tracking-wider     text-primary'type = "button" onClick={() => toggle(i)}>
             <span className='w-3/4 text-xl'>{item.question}</span>

             <span>{selected!= i?  (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                  </svg>
                )
                : 
                (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                </svg>
                )}
            </span>
           
           </button>

            </div>

                <div>{selected== i ? (<div className='text-secondary py-1 '> {item.answer}</div>) : (<div className=' py-1 hidden'> {item.answer}</div>)}

            </div>
            </div>
        ))}

      </div>
      </div>
    </div>
     <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_zptgbuvm.json"
          style={{ height: '500px', width: '500px' }}
          mode="scroll"
          className='md:absolute lg:bottom-12 w-[45%] 2xl:w-1/3 hidden md:block mb-2 lg:mb-0'
          
          >
      </Player> 
    </section>
  )
}

export default FAQ

