import React from 'react';

export const Search = () => {
  return (
    <div className=' pt-8 pb-12'>
      <form className='rounded-md bg-white p-6 shadow-md'>
        <div className='mb-2 flex items-center'>
          <input
            type='text'
            className='w-full rounded-md bg-gray-100 border border-gray-200 p-2'
            placeholder='Search ...'
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
