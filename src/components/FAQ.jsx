import React from 'react';
import { useState } from 'react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import { qnaSrc } from '../constants/faq'
const FAQ = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (j) =>{
    if(selected==j){
      return setSelected(null)
    }
    setSelected(j)
  }

  return (

    <div className='flex flex-wrap justify-center'>
      <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <div>
      <h2 className=' text-primary md:text-6xl sm:text-5xl text-4xl font-bold p-4'>
      Frequently asked questions
    </h2>
    </div>

      <div className='w-full flex flex-col md:mt-16 mt-2'>

        {qnaSrc.map((item,i) => (
          <div className='m-2 p-2 px-4 rounded-md w-full'>
            <div> 
            <button className='flex w-full justify-between py-3 mb-2 text-left border-t-2 font-bold leading-6 xl:leading-8 tracking-wider text-primary'type = "button" onClick={() => toggle(i)}>
             <span className='w-3/4 text-xl'>{item.question}</span>


             <span>{selected!= i?  (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
</svg>
): (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
</svg>
)}</span>
           
           </button>
            </div>
            <div>{selected== i? 
            (<div className='text-secondary py-1 '> {item.answer}</div>):
            (<div className=' py-1 hidden'> {item.answer}</div>)
            }
            </div>
            </div>
        ))}

      </div>
      </div>

    </div>
  )
}

export default FAQ