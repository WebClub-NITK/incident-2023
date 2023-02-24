// import React, { useState } from "react";

// const Paginator = ({ itemsPerPage, items }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   const paginatedItems = items.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div>
//       {paginatedItems.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//       <button
//         disabled={currentPage === 1}
//         onClick={() => handlePageChange(currentPage - 1)}
//       >
//         Prev
//       </button>
//       <button
//         disabled={currentPage === totalPages}
//         onClick={() => handlePageChange(currentPage + 1)}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Paginator;
