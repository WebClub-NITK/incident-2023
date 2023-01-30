import React from 'react'

const CompetitionCard = (competitioncompetition) => {
  return (
    <div className="transition-all duration-100 h-fit w-fit m-0 p-1 rounded-lg bg-dimMaroon m-4 border-black border-2 hover:border-none hover:shadow-inner hover:shadow-black">
    <div className='w-full h-full min-h-[28rem] max-w-sm bg-dimMaroon rounded-lg'>
        <div className='p-6'>
            {/* hover to some color */}
            {/* text colors and bg are subject to change */}
        <div className='text-rose-100 hover:text-red-600 cursor-pointer'>
          <h3 className='text-lg font-medium font-poppins'>Dance</h3>
        </div>

        {/* fix the hover, it should hover only for the head text and not the whole line */}
          <div className='w-full'>
            <p className='text-sm font-poppins text-neutral-50 mt-2 px-3'>{competition.details}</p>
          </div>
        </div>
    </div>  
    </div>
  )
}

export default CompetitionCard