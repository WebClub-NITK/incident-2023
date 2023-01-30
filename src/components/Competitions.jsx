import React, { useEffect, useState } from 'react';
import Filter from './CompUtils/Filter';
import CompetitionCard from './CompUtils/CompetitionCard';
import {compDetails} from '../constants/competition';
const Competitions = () => {

  const [competitions, setCompetitions] = useState([]);
  const [filterCompetitions, setFilterCompetitions] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setCompetitions(compDetails);
    setFilterCompetitions(compDetails);
  }, []);

  const handleCompetitionFilter = (item) => {
    setActiveFilter(item);

    setTimeout(() => {
      if(item === "All"){
        setFilterCompetitions(competitions);
      }
      else{
        setFilterCompetitions(
          competitions.filter(
            (competitions) => competitions.category == item
          )
        )
      }
    }, 500);
  }


  return (
    <section id="competitions">
      <h1 className='flex-1 font-poppins font-semibold text-[45px] text-primary leading-[80px] justify-center'>
        Competitions
      </h1>

      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

                                                            {/* Old filter button reference */}

      {/* <div className='md:transition-all md:duration-100 md:flex flex-wrap  md:flex-row md:space-x-8 md:justify-center md:items-center '>
        {
          compDetails.map((competition)=>(
            <Filter title={competition.title} details={competition.details} date={competition.date}/>
          ))
        }
      </div> */}
      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}


  <div className='md:transition-all md:duration-100 md:flex flex-wrap md:flex-row md:space-x-9 md:justify-center md:items-center flex items-center justify-center'>
      
        <div class=" text-white font-bold py-2 px-4 border-b-4 flex items-center p-1 ">
          {
            ['1', '2', '3', '4', '5', '6', '7', 'All'].map((item, index) => (
              
              <button 
                key={index}
                onClick = {() => handleCompetitionFilter(item)}
                className={`hover:bg-primary md:rounded-full text-white font-bold py-2 px-4 border-b-4 rounded ${
                  activeFilter === item ? "bg-primary" : ""
                }`}
              >
                {item}
              </button>
              
            ))
          }
        </div>
      
  </div>

{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

{/* Old competition structure for reference */}

      {/* <div className='flex flex-wrap sm:flex-row md:flex-row'>
        {
          compDetails.map((competition)=>(
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3'>
              <div className='w-full rounded-lg overflow-hidden' id={competition.id} >
                <CompetitionCard title={competition.title} details={competition.details} date={competition.date}/>
              </div>
            </div>
          ))
        }
      </div> */}

{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

      <div className='flex flex-wrap sm:flex-row md:flex-row'>
        {
          filterCompetitions.map((competitions, index)=>(
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3'>
              <div className='w-full rounded-lg overflow-hidden' id={competitions.id} >
                <CompetitionCard 
                key={competitions.id}
                index = {index}
                title={competitions.title} 
                details={competitions.details} 
                date={competitions.date}/>
                
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default Competitions