import React from 'react'

const CompetitionCard = (competition) => {
  return (
    <div className='w-full h-full min-h-[28rem] max-w-sm bg-dimMaroon rounded-lg m-4 hover: shadow-md hover:shadow-rose-900'>
        <div className='p-6'>
            {/* hover to some color */}
            {/* text colors and bg are subject to change */}
        <div className='text-primary cursor-pointer'>
          <div className="flex flex-wrap flex-row justify-between">
            <h3 className='text-lg font-medium font-poppins inline'>{competition.title}</h3>
            <h3 className='text-lg font-medium font-poppins inline'>{competition.date}</h3>
          </div>
        </div>

        {/* fix the hover, it should hover only for the head text and not the whole line */}
          <div className='w-full'>
            <p className='text-sm font-poppins text-neutral-50 mt-2'>{competition.details}</p>
          </div>
        </div>
    </div>  
  )
}

export default CompetitionCard