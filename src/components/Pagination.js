import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Pagination = ({ paginate }) => {
  const totalPost = useSelector((state) => state.totalPost);
  const [postsPerPage] = useState(10);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="container ml-4">
      <div className="d-flex justify-content-center">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                href="?#"
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Pagination;
