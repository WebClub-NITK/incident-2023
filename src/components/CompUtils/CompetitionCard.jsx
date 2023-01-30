import React from 'react'

const CompetitionCard = (competition) => {
  const card_gradient = "";
  return (
    <div className='w-full 
                    h-full 
                    min-h-[28rem] 
                    max-w-sm 
                    bg-dimMaroon 
                    shadow-2 
                    shadow-inner 
                    shadow-black 
                    rounded-lg 
                    m-4 
                    hover:bg-gradient-to-br from-dimMaroon to-rose-900'>
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
            <p className='text-sm font-poppins text-neutral-50 mt-2 px-3'>{competition.details}</p>
            {/* <button className="rounded-md bg-primary">Click For more info</button> */}
          </div>
        </div>
    </div>  
  )
}

export default CompetitionCard