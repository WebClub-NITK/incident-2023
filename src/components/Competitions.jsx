import React, { useEffect, useState } from "react";
// import Filter from "./CompUtils/Filter";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CompetitionCard from "./CompUtils/CompetitionCard";
// import { Button } from "@headlessui/react";
import { compDetails } from "../constants/competition";
import { logo, biz, dance, fashion, lit, music, sports } from "../assets/index";
// import Paginator from "./CompUtils/Paginator";

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [filterCompetitions, setFilterCompetitions] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All Categories");
  const [showMore, setShowMore] = useState(false);

  const buttonText = showMore ? "Show Less" : "Show More";
  const coins = [logo, biz, dance, fashion, lit, music, sports];
  // const [currentPage, setCurrentPage] = useState(1)
  // const [postsPerPage, setPostsPerPage] = useState(2)

  useEffect(() => {
    setCompetitions(compDetails);
    setFilterCompetitions(compDetails);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Categories");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    setTimeout(() => {
      if (item === "All Categories") {
        setFilterCompetitions(competitions);
      } else {
        setFilterCompetitions(
          competitions.filter((competitions) => competitions.category == item)
        );
      }
    }, 500);
    toggleDropdown();
  };

  const handleCompetitionFilter = (item) => {
    setActiveFilter(item);

    setTimeout(() => {
      setSelectedOption(item);
      if (item === "All Categories") {
        setFilterCompetitions(competitions);
      } else {
        setFilterCompetitions(
          competitions.filter((competitions) => competitions.category == item)
        );
      }
    }, 500);
  };

  // implementing Paginator

  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = competitions.slice(firstPostIndex, lastPostIndex)

  return (
    <section id="competitions" className="pt-16">
      <div className="basis-full text-center font-[ARMRegular] text-4xl md:text-6xl my-3 p-3 text-primary text-gradient font-semibold sm:text-5xl md:text-left md:m-3 md:p-3">
        Competitions
      </div>
      {/* For coins */}
      <div className="hidden md:block md:transition-all md:duration-100 md:flex flex-wrap md:flex-row md:space-x-9 md:justify-center md:items-center flex items-center justify-center">
        <div className="w-auto text-primary font-poppins py-2 px-4 border-b-4 border-[#d4a152] flex flex-row justify-evenly p-1 space-x-1">
          {[
            "All Categories",
            "Biz",
            "Dance",
            "Fashion",
            "Lit",
            "Music",

            "Sports",
          ].map((item, index) => (
            <button key={index} className="max-w-[144px]">
              <img
                src={coins[index]}
                alt=""
                onClick={() => handleCompetitionFilter(item)}
                className={`font-bold p-2 hover:scale-[1.05]`}
                key={index}
              />
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* For dropdown */}
      <div className="md:hidden relative w-full min-w-max">
        <div className="flex font-poppins justify-center">
          <button
            // removed the following
            // transform translate-y-1/2
            className={`text-center py-2 flex items-center justify-center px-4 px-4 py-2 rounded-lg text-[#1A2328] bg-primary border border-[#89352a] focus:outline-none focus:shadow-outline hover:border-[#672c1a] shadow-2 shadow-inner shadow-[#672c1a] ${
              isOpen ? "w-full" : "w-fit"
            }`}
            onClick={toggleDropdown}
          >
            <div className="flex justify-center">
              <h3>{selectedOption}</h3>
            </div>
            <ChevronDownIcon
              className={`-mr-1 ml-1 h-5 w-5 ${isOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
        {isOpen && (
          <div className="{`absolute z-20 mt-3 text-center origin-top-right rounded-md shadow-lg overflow-y-auto shadow-10 shadow-black ">
            <div className="bg-secondary font-poppins rounded-md shadow-xs shadow-2 shadow-inner shadow-[#1A2328] ">
              <div className="py-1">
                {[
                  "All Categories",
                  "Biz",
                  "Dance",
                  "Fashion",
                  "Lit",
                  "Music",

                  "Sports",
                ].map((item, index) => (
                  <a
                    key={index}
                    className="block px-4 py-2 text-sm leading-5 text-[#1A2328] hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 my-1 "
                    onClick={() => {
                      handleCompetitionFilter(item);
                      toggleDropdown();
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* for desktop */}
      <div
        className={`hidden md:flex md:flex-wrap md:flex-row md:justify-center ${
          filterCompetitions.length > 3 ? "min-h-[60vh]" : "min-h-[30vh]"
        }`}
      >
        {filterCompetitions.map((competitions, index) => (
          <div>
            <div
              className={`w-full rounded-lg overflow-hidden flex-initial justify-center ${
                showMore || (!showMore && index < 9) ? "visible" : "hidden"
              }`}
              id={competitions.id}
            >
              <CompetitionCard
                key={competitions.id}
                index={index}
                title={competitions.title}
                details={competitions.details}
                date={competitions.date}
                poc={competitions.poc}
                image={competitions.image}
                reg_link={competitions.reg_link}
              />
            </div>
          </div>
        ))}
      </div>

      {filterCompetitions.length > 9 && (
        <div className="md:flex md:flex-wrap md:justify-center hidden">
          <button
            className="md:m-2 md:p-2 md:font-poppins md:bg-gradient-to-r from-[#9f793eff]
              via-[#d4a152ff] to-[#dcb270ff] md:border-2 md:border-primary md:rounded-md back md:font-medium md:text-black md:transition-all md:duration-150 md:hover:scale-105"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {buttonText}
          </button>
        </div>
      )}
      <div
        className={`flex flex-wrap justify-center md:hidden ${
          filterCompetitions.length < 2 ? "min-h-[30vh]" : "min-h-[60vh]"
        }`}
      >
        {filterCompetitions.map((competitions, index) => (
          <div>
            <div
              className={`w-full rounded-lg overflow-hidden flex-initial justify-center ${
                showMore || (!showMore && index < 3) ? "visible" : "hidden"
              }`}
              id={competitions.id}
            >
              <CompetitionCard
                key={competitions.id}
                index={index}
                title={competitions.title}
                details={competitions.details}
                date={competitions.date}
                poc={competitions.poc}
                image={competitions.image}
                reg_link={competitions.reg_link}
              />
            </div>
          </div>
        ))}
      </div>

      {filterCompetitions.length > 3 && (
        <div className="flex justify-center">
          <button
            className="m-2 p-2 font-poppins bg-gradient-to-r from-[#9f793eff] md:hidden
              via-[#d4a152ff] to-[#dcb270ff] border-2 border-primary rounded-md font-medium text-black transition-all duration-150 md:hover:scale-105"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {buttonText}
          </button>
        </div>
      )}

      {/* for mobile and tablet */}
      {/* <div className="flex flex-wrap">
        {currentPosts.map((competitions, index) => (
          <div className="w-full">
            <div
              className="w-full rounded-lg overflow-hidden flex-initial justify-center"
              id={competitions.id}
            >
              
              <CompetitionCard
                key={competitions.id}
                index={index}
                title={competitions.title}
                details={competitions.details}
                date={competitions.date}
                poc={competitions.poc}
                image={competitions.image}
              />

            </div>
             
          </div>
        ))}
      </div> */}
    </section>
  );
};
export default Competitions;
