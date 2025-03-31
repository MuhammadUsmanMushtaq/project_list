import React, { useState } from 'react';

export const Search = ({ data, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredData = data.filter(
      (project) =>
        project.clientName.toLowerCase().includes(term.toLowerCase()) ||
        project.projectNumber.toString().includes(term)
    );
    onSearchResults(filteredData);
  };

  return (
    <div className=' pt-8 pb-12 '>
      <form className='rounded-md bg-white p-6 shadow'>
        <div className='mb-2 flex items-center'>
          <input
            type='text'
            value={searchTerm}
            onChange={handleSearchChange}
            className='w-full rounded-md bg-gray-100 border border-gray-200 p-2'
            placeholder='Search by customer number or customer name...'
          />
          <button className='md:w-[120px] ml-2 rounded-md  bg-[#63a27a] p-2 text-white hover:bg-green-700'>
            Search
          </button>
        </div>
        <div className='flex text-sm'>
          <label className='mr-4'>
            <input type='checkbox' className='mr-2 ' />
            Completed
          </label>
          <label className='mr-4'>
            <input type='checkbox' className='mr-2 ' />
            In progress
          </label>
        </div>
      </form>
    </div>
  );
};
