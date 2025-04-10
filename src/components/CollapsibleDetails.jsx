import React from 'react';
import { FaRegBuilding } from 'react-icons/fa';

const CollapsibleDetails = ({ project, isExpanded }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
        isExpanded ? 'max-h-screen opacity-100' : 'opacity-0'
      }`}
    >
      <div className='text-sm p-4 bg-gray-50 border'>
        <div>
          <h2 className='text-2xl'>{project.projectName}</h2>
          <div className='flex items-center gap-2 py-2 '>
            <FaRegBuilding size={24} />
            <p className='font-bold'>{project.clientName}</p>
          </div>
        </div>

        <div className='flex justify-between pt-4'>
          <div className='w-80'>
            <h2 className=' bg-white p-2 rounded-md font-semibold py-2'>
              Project description
            </h2>
            <p className='  bg-white p-2 rounded-md m-0'>
              {project.description}
            </p>
            <div className='grid grid-cols-2 mt-4  bg-white p-2 rounded-md text-xs'>
              <p className='font-semibold'>Contact person:</p>
              <p className='m-0'>Jon Hill</p>

              <p className='font-semibold'>E-mail:</p>
              <p className='m-0'>Jon@gmail.com</p>

              <p className='font-semibold'>Mobile:</p>
              <p>0723000000</p>

              <p className='font-semibold'>Order ID:</p>
              <p>987654</p>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='text-sm mt-2 space-y-1'>
              {/* Header Row */}
              <p className='font-semibold'>Customer Invoice</p>
              <div className=' bg-white p-1 text-xs grid grid-cols-4 gap-4 font-semibold '>
                <p>Date</p>
                <p>Invoice</p>
                <p>Status</p>
                <p>Amount</p>
              </div>

              {/* Data Row 1 */}
              <div className='bg-white p-1 text-xs grid grid-cols-4 gap-4'>
                <p className='m-0'>2024-01-23</p>
                <p className='m-0 text-blue-500'>00001se</p>
                <p className='m-0'>Paid</p>
                <p className='m-0'>200000</p>
              </div>

              {/* Data Row 2 */}
              <div className='bg-white p-1 text-xs grid grid-cols-4 gap-4'>
                <p className='m-0'>2024-01-23</p>
                <p className='m-0 text-blue-500'>00001se</p>
                <p className='m-0'>Paid</p>
                <p className='m-0'>200000</p>
              </div>

              {/* Total Row */}
              <div className='grid grid-cols-4 font-semibold'>
                <p></p>
                <p></p>
                <p className='bg-white p-1'>Total</p>
                <p className='bg-white p-1'>200000</p>
              </div>
            </div>
            <div className='text-sm mt-2 space-y-1'>
              {/* Header Row */}
              <p className='font-semibold'>Supplier Invoice</p>
              <div className='bg-white p-1 text-xs grid grid-cols-4 gap-4 font-semibold'>
                <p>Date</p>
                <p>Invoice</p>
                <p>Status</p>
                <p>Amount</p>
              </div>

              {/* Data Row 1 */}
              <div className='bg-white p-1 text-xs grid grid-cols-4 gap-4'>
                <p className='m-0'>2024-01-23</p>
                <p className='m-0 text-blue-500'>00001se</p>
                <p className='m-0'>Paid</p>
                <p className='m-0'>200000</p>
              </div>

              {/* Data Row 2 */}
              <div className='bg-white p-1 text-xs grid grid-cols-4 gap-4'>
                <p className='m-0'>2024-01-23</p>
                <p className='m-0 text-blue-500'>00001se</p>
                <p className='m-0'>Paid</p>
                <p className='m-0'>200000</p>
              </div>

              {/* Total Row */}
              <div className='grid grid-cols-4 font-semibold'>
                <p></p>
                <p></p>
                <p className='bg-white p-1'>Total</p>
                <p className='bg-white p-1'>200000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleDetails;
