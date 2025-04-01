import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // For tracking current page
  const [totalPages, setTotalPages] = useState(1); // To track the total number of pages

  useEffect(() => {
    const fetchProjects = async (page = 1, limit = 10) => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos',
          {
            params: {
              _page: page, // page number
              _limit: limit, // limit per page
            },
          }
        );
        setData(response.data);
        // Assuming the total count is provided in the response headers
        const totalCount = parseInt(response.headers['x-total-count'], 10);
        setTotalPages(Math.ceil(totalCount / limit)); // Calculate total pages
      } catch (err) {
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects(page, 10); // Fetch data based on current page
  }, [page]); // This effect runs every time the `page` state changes

  const handlePageChange = (direction) => {
    if (direction === 'next' && page < totalPages) {
      setPage(page + 1);
    } else if (direction === 'prev' && page > 1) {
      setPage(page - 1);
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center mt-16 flex-col h-screen'>
        <p>Loading . . .</p>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <ul key={item.id}>
          <li>{item.title}</li>
          <li>{item.id}</li>
        </ul>
      ))}

      {/* Pagination controls */}
      <div className='flex gap-4 justify-center mt-4'>
        <button
          className=''
          onClick={() => handlePageChange('prev')}
          disabled={page === 1}
        >
          <FaArrowLeft />
        </button>
        <span className='self-center'>{`Page ${page} of ${totalPages}`}</span>
        <button
          className=''
          onClick={() => handlePageChange('next')}
          disabled={page === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default App;
