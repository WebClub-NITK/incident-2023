import React from 'react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import { qnaSrc } from '../constants/faq'
const FAQ = () => {

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-x-32 px-4 md:px-12 lg:px-32 lg:pb-10">
      <h2 className='text-8xl leading-none tracking-tight text-center md:text-left w-full xl:w-4/5 text-white'>
      Frequently asked questions
      </h2>
      <div className="w-full z-10">
        <div className='text-lg xl:text-2xl'>





          {/* QNA Component 1 Starts here */}
          <button className='flex w-full justify-between py-3 mb-2 text-left border-t-2 font-circular leading-6 xl:leading-8 tracking-wider text-white' data-value='false' type = "button" aria-expanded='false'>
            <span className='w-3/4'>First Question</span>
          <ChevronDownIcon className={`-mr-1 ml-1 h-5 w-5`} aria-hidden='true' />
          </button>
          <div className='text-white flex w-full justify-between rounded-lg mb-2 text-left text-md xl:text-xl'>
              Answer 1
          </div>
          {/* Upto this is one QNA component 1*/}






          {/* QNA Component 2 Starts here */}
          <button className='flex w-full justify-between py-3 mb-2 text-left border-t-2 font-circular leading-6 xl:leading-8 tracking-wider text-white' data-value='false' type = "button" aria-expanded='false'>
            <span className='w-3/4'>Second Question</span>
          <ChevronDownIcon className={`-mr-1 ml-1 h-5 w-5`} aria-hidden='true' />
          </button>
          <div className='text-white flex w-full justify-between rounded-lg mb-2 text-left text-md xl:text-xl'>
              Answer 2
          </div>
          {/* Upto this is one QNA component 2*/}





          {/* Rest all have a similar structure */}
          {/* Task: Import the qna from the qnaSrc which i have already linked inside the constants folder of this project,  map them here instead of using these hard coded qna components */}






          <button className='flex w-full justify-between py-3 mb-2 text-left border-t-2 font-circular leading-6 xl:leading-8 tracking-wider text-white' data-value='false' type = "button" aria-expanded='false'>
            <span className='w-3/4'>Third Question</span>
          <ChevronDownIcon className={`-mr-1 ml-1 h-5 w-5`} aria-hidden='true' />
          </button>

          <div className='text-white flex w-full justify-between rounded-lg mb-2 text-left text-md xl:text-xl'>
              Answer 3
          </div>

          <button className='flex w-full justify-between py-3 mb-2 text-left border-t-2 font-circular leading-6 xl:leading-8 tracking-wider text-white' data-value='false' type = "button" aria-expanded='false'>
            <span className='w-3/4'>Fourth Question</span>
          <ChevronDownIcon className={`-mr-1 ml-1 h-5 w-5`} aria-hidden='true' />
          </button>

          <div className='text-white flex w-full justify-between rounded-lg mb-2 text-left text-md xl:text-xl'>
              Answer 4
          </div>

        </div>
      </div>
    </div>

  )
}

export default FAQ