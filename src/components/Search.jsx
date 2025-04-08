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
    filterData(term, isCompleted, isInprogress, startDate, endDate);
  };

  const handleCompletedChange = (e) => {
    const checked = e.target.checked;
    setIsCompleted(checked);
    filterData(searchTerm, checked, isInprogress, startDate, endDate);
  };

  const handleInprogressChange = (e) => {
    const checkedInprogress = e.target.checked;
    setIsInprogress(checkedInprogress);
    filterData(searchTerm, isCompleted, checkedInprogress, startDate, endDate);
  };

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);
    filterData(searchTerm, isCompleted, isInprogress, date, endDate);
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    setEndDate(date);
    filterData(searchTerm, isCompleted, isInprogress, startDate, date);
  };

  // Clear date filter
  const handleClearDateFilter = () => {
    setStartDate('');
    setEndDate('');
    filterData(searchTerm, isCompleted, isInprogress, '', '');
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
        project.clientName.toLowerCase().includes(term.toLowerCase()) ||
        project.projectNumber.toString().includes(term);

      const matchesStatus =
        (completedFilter && project.status === 'Completed') ||
        (inprogressFilter && project.status === 'In progress') ||
        (!completedFilter && !inprogressFilter);

      const matchesDate = () => {
        const projectStartDate = new Date(project.startDate);
        const projectEndDate = new Date(project.endDate);

        // Check if project date falls within the selected range
        const isAfterStartDate =
          !startDateFilter || projectStartDate >= new Date(startDateFilter);
        const isBeforeEndDate =
          !endDateFilter || projectEndDate <= new Date(endDateFilter);

        return isAfterStartDate && isBeforeEndDate;
      };

      const matchesOutcome = project.outcome >= 10;

      return matchesTerm && matchesStatus && matchesDate() && matchesOutcome;
    });

    onSearchResults(filteredData);
  };

  return (
    <div className='mb-12 p-8  rounded-md shadow-md border'>
      <form className='rounded-md bg-white flex flex-col items-center'>
        <div className='flex items-center w-full relative '>
          <input
            type='text'
            value={searchTerm}
            onChange={handleSearchChange}
            className='mb-2 bg-gray-100 w-full rounded-md border border-gray-400 p-3'
            placeholder='Search by customer number or customer name...'
          />
          <FiSearch size={24} className='absolute right-3 top-3 text-black' />
        </div>

        {/* Date Range Filters */}
        <div className='w-full justify-between flex items-center text-sm border-[1px] border-gray-400  px-4 py-2 rounded-md'>
          <div className='flex gap-4'>
            <label className=''>
              <input
                checked={isCompleted}
                onChange={handleCompletedChange}
                type='checkbox'
                className='mr-2'
              />
              Completed
            </label>
            <label className=''>
              <input
                checked={isInprogress}
                onChange={handleInprogressChange}
                type='checkbox'
                className='mr-2'
              />
              In progress
            </label>
          </div>

          <div className='flex gap-4'>
            <div className='flex items-center gap-1 '>
              <label htmlFor='start-date' className='mr-1'>
                From:
              </label>
              <input
                id='start-date'
                type='date'
                value={startDate}
                onChange={handleStartDateChange}
                className='text-gray-400 border rounded p-1 bg-gray-100'
              />
            </div>

            <div className='flex items-center gap-1'>
              <label htmlFor='end-date' className='mr-1'>
                To:
              </label>
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
              className='text-xs text-blue-500 mt-2'
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
