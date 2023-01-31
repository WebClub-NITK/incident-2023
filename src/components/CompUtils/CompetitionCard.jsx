import React from 'react'

const CompetitionCard = (competition) => {
  return (
    <div className='h-auto
                    w-[25rem]
                    max-w-9/10 
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
          <div className='w-auto flex justify-center mt-3'>
              {/* <p className='text-sm font-poppins text-neutral-50 mt-2 px-3'>{competition.details}</p> */}
                <img src={competition.image} alt="Logo" className='max-w-1/2'/>
            </div>
          <div className="flex w-full justify-center px-2 mt-2">
              <button className="rounded-md bg-primary px-3 text-md font-poppins text-rose-900 hover:text-black hover:bg-gradient-to-br from-orange-700 via-oorange-800 to-transparent">Click For more info</button>
          </div>
        </div>
    </div>  
  )
}

export default CompetitionCard