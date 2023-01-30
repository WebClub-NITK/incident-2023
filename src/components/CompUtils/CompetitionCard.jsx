import React from 'react'

const CompetitionCard = () => {
  return (
    <div className='w-full h-full max-w-sm bg-dimMaroon rounded-lg shadow-lg m-4'>
        <div className='p-6'>
            {/* hover to some color */}
            {/* text colors and bg are subject to change */}
        <div className='text-rose-100 hover:text-red-600 cursor-pointer'>
          <h3 className='text-lg font-medium font-poppins'>Dance</h3>
        </div>

        {/* fix the hover, it should hover only for the head text and not the whole line */}

          <p className='text-sm  font-poppins text-neutral-50 mt-2'>Dance is generally, however not exclusively, performed with the accompaniment of music and may or may not be performed in time to such music. Some dance (such as tap dance) may provide its own audible accompaniment in place of (or in addition to) music. Many early forms of music and dance were created for each other and are frequently performed together. Notable examples of traditional dance/music couplings include the jig, waltz, tango, disco, and salsa. Some musical genres have a parallel dance form such as baroque music and baroque dance; other varieties of dance and music may share nomenclature but developed separately, such as classical music and classical ballet.</p>
        </div>
    </div>
  )
}

export default CompetitionCard