import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

export const Search = ({ data, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isInprogress, setIsInprogress] = useState(true);

  useEffect(() => {
    filterData(searchTerm, isCompleted, isInprogress);
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterData(term, isCompleted, isInprogress);
  };

  const handleCompletedChange = (e) => {
    const checked = e.target.checked;
    setIsCompleted(checked);
    filterData(searchTerm, checked, isInprogress);
  };

  const handleInprogressChange = (e) => {
    const checkedInprogress = e.target.checked;
    setIsInprogress(checkedInprogress);
    filterData(searchTerm, isCompleted, checkedInprogress);
  };

  const filterData = (term, completedFilter, inprogressFilter) => {
    const filteredData = data.filter((project) => {
      const matchesTerm =
        project.clientName.toLowerCase().includes(term.toLowerCase()) ||
        project.projectNumber.toString().includes(term);

      const matchesStatus =
        (completedFilter && project.status === 'Completed') ||
        (inprogressFilter && project.status === 'In progress') ||
        (!completedFilter && !inprogressFilter);

      const matchesOutcome = project.outcome >= 10;

      return matchesTerm && matchesStatus && matchesOutcome;
    });

    onSearchResults(filteredData);
  };

  return (
    <div className=''>
      <form className='rounded-md bg-white p-6  flex flex-col justify-center items-center'>
        <div className='mb-2 flex items-center w-2/4 relative'>
          <input
            type='text'
            value={searchTerm}
            onChange={handleSearchChange}
            className='w-full rounded-md bg-gray-100 border border-gray-200 p-2'
            placeholder='Search by customer number or customer name...'
          />
          <FiSearch className='absolute right-2 text-gray-500' />
        </div>
        <div className='flex text-sm'>
          <label className='mr-4'>
            <input
              checked={isCompleted}
              onChange={handleCompletedChange}
              type='checkbox'
              className='mr-2'
            />
            Completed
          </label>
          <label className='mr-4'>
            <input
              checked={isInprogress}
              onChange={handleInprogressChange}
              type='checkbox'
              className='mr-2'
            />
            In progress
          </label>
        </div>
      </form>
    </div>
  );
};
