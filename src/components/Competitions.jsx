import React from 'react';
import Filter from './CompUtils/Filter';
import CompetitionCard from './CompUtils/CompetitionCard';
import {compDetails} from '../constants/competition';
const Competitions = () => {
  return (
    <section id="competitions">
      <h1 className='flex-1 font-poppins font-semibold text-[45px] text-primary leading-[80px] justify-center'>
        Competitions
      </h1>
            <div className='md:transition-all md:duration-100 md:flex flex-wrap  md:flex-row md:space-x-8 md:justify-center md:items-center '>{
            compDetails.map((competition)=>(
              <Filter title={competition.title} details={competition.details} date={competition.date}/>
            ))
            }</div>
      <div className='flex flex-wrap sm:flex-row md:flex-row'>
        {
          compDetails.map((competition)=>(
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3'>
              <div className='w-full rounded-lg overflow-hidden' id={competition.id} >
                <CompetitionCard title={competition.title} details={competition.details} date={competition.date}/>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default Competitions