import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='flex justify-center mt-6'>
      <nav aria-label='Page navigation'>
        <ul className='inline-flex items-center space-x-2'>
          {/* Previous Button */}
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className={`px-4 py-2 bg-gray-300 rounded-md ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'hover:bg-blue-600 hover:text-white'
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => onPageChange(number)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === number
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {number}
              </button>
            </li>
          ))}

          {/* Next Button */}
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className={`px-4 py-2 bg-gray-300 rounded-md ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'hover:bg-blue-600 hover:text-white'
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
