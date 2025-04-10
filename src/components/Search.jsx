import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

export const Search = ({ data, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isInprogress, setIsInprogress] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    filterData(searchTerm, isCompleted, isInprogress, startDate, endDate);
  }, [searchTerm, isCompleted, isInprogress, startDate, endDate]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const handleCompletedChange = (e) => {
    setIsCompleted(e.target.checked);
  };

  const handleInprogressChange = (e) => {
    setIsInprogress(e.target.checked);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleClearDateFilter = () => {
    setStartDate('');
    setEndDate('');
  };

  const filterData = (
    term,
    completedFilter,
    inprogressFilter,
    startDateFilter,
    endDateFilter
  ) => {
    const filteredData = data.filter((project) => {
      const matchesTerm =
        project.clientName?.toLowerCase().includes(term.toLowerCase()) ||
        project.projectNumber?.toString().includes(term);

      const matchesStatus =
        (completedFilter && project.status === 'Completed') ||
        (inprogressFilter && project.status === 'In progress') ||
        (!completedFilter && !inprogressFilter);

      const matchesDate = () => {
        const projectStartDate = new Date(project.startDate);
        const projectEndDate = project.endDate
          ? new Date(project.endDate)
          : null;

        const isAfterStartDate =
          !startDateFilter || projectStartDate >= new Date(startDateFilter);

        const isBeforeEndDate =
          !endDateFilter ||
          !projectEndDate ||
          projectEndDate <= new Date(endDateFilter);

        return isAfterStartDate && isBeforeEndDate;
      };

      const matchesOutcome = project.outcome >= 10;

      return matchesTerm && matchesStatus && matchesDate() && matchesOutcome;
    });

    onSearchResults(filteredData);
  };

  // Trigger filter whenever something changes
  useEffect(() => {
    filterData(searchTerm, isCompleted, isInprogress, startDate, endDate);
  }, [searchTerm, isCompleted, isInprogress, startDate, endDate]);

  return (
    <div className='mb-12 p-8 rounded-md shadow-md border'>
      <form className='rounded-md bg-white flex flex-col items-center'>
        {/* Search input */}
        <div className='flex items-center w-full relative'>
          <input
            type='text'
            value={searchTerm}
            onChange={handleSearchChange}
            className='mb-2 bg-gray-100 w-full rounded-md border border-gray-400 p-3'
            placeholder='Search by customer number or customer name...'
          />
          <FiSearch size={24} className='absolute right-3 top-3 text-black' />
        </div>

        {/* Filters */}
        <div className='w-full justify-between flex items-center text-sm border border-gray-400 px-4 py-2 rounded-md'>
          <div className='flex gap-4'>
            <label>
              <input
                type='checkbox'
                checked={isCompleted}
                onChange={handleCompletedChange}
                className='mr-2'
              />
              Completed
            </label>
            <label>
              <input
                type='checkbox'
                checked={isInprogress}
                onChange={handleInprogressChange}
                className='mr-2'
              />
              In progress
            </label>
          </div>

          <div className='flex gap-4'>
            <div className='flex items-center gap-1'>
              <label htmlFor='start-date'>From:</label>
              <input
                id='start-date'
                type='date'
                value={startDate}
                onChange={handleStartDateChange}
                className='text-gray-400 border rounded p-1 bg-gray-100'
              />
            </div>

            <div className='flex items-center gap-1'>
              <label htmlFor='end-date'>To:</label>
              <input
                id='end-date'
                type='date'
                value={endDate}
                onChange={handleEndDateChange}
                className='text-gray-400 border rounded p-1 bg-gray-100'
              />
            </div>

            <button
              type='button'
              onClick={handleClearDateFilter}
              className='text-xs bg-[#63a27a] hover:shadow-md text-white px-4 rounded-md'
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
