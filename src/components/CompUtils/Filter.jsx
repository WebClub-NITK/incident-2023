import React from 'react';
const Filter = (competition) => {
    return (
        <button class="hover:bg-primary md:rounded-full text-white font-bold py-2 px-4 border-b-4 rounded">
     <div className="md:w-20 md:h-20 md:bg-primary md:rounded-full "id={competition.id}><button>{competition.title}</button></div>
      </button>
    )
}
export default Filter;