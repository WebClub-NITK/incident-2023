import React from 'react'
import CompetitionCard from './CompUtils/CompetitionCard'
import {compDetails} from '../constants/competition';
const Competitions = () => {
  return (
    <section id="competitions">
      <div className='flex flex-wrap sm:flex-row md:flex-row'>

        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3'>
          <div className='w-full rounded-lg overflow-hidden'>
            <CompetitionCard/>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3'>
          <div className='w-full rounded-lg overflow-hidden'>
            <CompetitionCard/>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3'>
          <div className='w-full rounded-lg overflow-hidden'>
            <CompetitionCard/>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3'>
          <div className='w-full rounded-lg overflow-hidden'>
            <CompetitionCard/>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3'>
          <div className='w-full rounded-lg overflow-hidden'>
            <CompetitionCard/>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Competitions