import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";

const Pagination = (props) => {
  const [page, setPage] = useState(2);
  const [rowPerPage, setRowPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleRowPerPage = (event) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowPerPage={rowPerPage}
      onRowsPerPageChange={handleRowPerPage}
    />
  );
};

export default Pagination;

// import React from "react";
// import classnames from "classnames";
// import { usePagination, DOTS } from "./usePagintaion";
// import "./Pagination.scss";

// const Pagination = (props) => {
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className,
//   } = props;

//   const PaginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize,
//   });

//   if (currentPage === 0 || PaginationRange.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = PaginationRange[PaginationRange.length - 1];

//   return (
//     <>
//       <ul
//         className={classnames("pagination-container", {
//           [className]: className,
//         })}>
//         <li
//           className={classnames("pagination-items", {
//             disabled: currentPage === 1,
//           })}
//           onClick={onPrevious}
//         >
//           <div className="arrow left"></div>
//         </li>

//         {PaginationRange.map((pageNumber) => {
//           if (pageNumber === DOTS) {
//             return <li className="pagination-items dots">&#8230;</li>;
//           }
//           return (
//             <li
//               className={classnames("pagination-items", {
//                 selected: pageNumber === currentPage,
//               })}
//               onClick={() => onPageChange(pageNumber)}
//             >
//               {pageNumber}
//             </li>
//           );
//         })}
//         <li
//           className={classnames("pagination-items", {
//             disabled: currentPage === lastPage,
//           })}
//           onClick={() => onNext}
//         >
//           <div className="arrow right"></div>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default Pagination;
