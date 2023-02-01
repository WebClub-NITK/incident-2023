import React, { useEffect, useState } from 'react';
import Filter from './CompUtils/Filter';
import CompetitionCard from './CompUtils/CompetitionCard';
import {compDetails} from '../constants/competition';
import { logo } from "../assets"
const Competitions = () => {

  const [competitions, setCompetitions] = useState([]);
  const [filterCompetitions, setFilterCompetitions] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setCompetitions(compDetails);
    setFilterCompetitions(compDetails);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select the Category");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
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
    toggleDropdown();
  };

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

     
{/* For coins */}
  <div className='hidden md:block md:transition-all md:duration-100 md:flex flex-wrap md:flex-row md:space-x-9 md:justify-center md:items-center flex items-center justify-center'>
      
        <div class="w-auto text-white font-bold py-2 px-4 border-b-4 flex flex-row justify-evenly p-1 space-x-1">
          {
            ['All','1', '2', '3', '4', '5', '6', '7'].map((item, index) => (
              
              <button 
                key={index} 
              >
                
                <img src= {logo} alt=""
                  onClick = {() => handleCompetitionFilter(item)}
                  className={`font-bold p-2 hover:scale-[1.05]`}
                  key={index}
                />
             
                {item}
              </button>
              
            ))
          }
        </div>
      
  </div>
 
{/* For dropdown */}
<div className="block md:hidden relative ">
      <button
        // removed the following 
        // transform translate-y-1/2
      className="w-full text-center py-2 flex items-center justify-center px-4 px-4 py-2 rounded-lg text-gray-600 bg-primary border border-gray-400 focus:outline-none focus:shadow-outline hover:border-gray-500"
        onClick={toggleDropdown}
      >
    
      
        
        {selectedOption}
        <svg className="ml-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7. 293a1 1 0 011. 414 0L10 10.586l3. 293 -3. 293a1 1 0 111. 414 1. 414l-4 4a1 1 0 01-1. 414 0l-4-4a1 1 0 010 -1. 414z" clipRule="evenodd" />
        </svg>
      </button>
      
          {isOpen && (
      <div className="{`absolute z-20 mt-3 text-center origin-top-right rounded-md shadow-lg overflow-y-auto ">
      <div className="bg-white rounded-md shadow-xs ">
        <div className="py-1">
              { ['All','1', '2', '3', '4', '5', '6', '7'].map((item, index) => (
                <a
                key={index}
                  href="#"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  onClick = {() => {handleCompetitionFilter(item); toggleDropdown();}}
                >
                  {item}
                </a>
              ))}
            </div>
            </div></div>
          )}
      
    </div>


 

      <div className='flex flex-wrap sm:flex-row md:flex-row'>
        {
          filterCompetitions.map((competitions, index)=>(
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 flex flex-wrap justify-center'>
              <div className='w-full rounded-lg overflow-hidden flex justify-center ' id={competitions.id} >
                <CompetitionCard 
                key={competitions.id} 
                index = {index}
                title={competitions.title} 
                details={competitions.details} 
                date={competitions.date}
                image={competitions.image}
                />
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default Competitions

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


       {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
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


