import React from 'react';
import { FaRegBuilding } from 'react-icons/fa';

const CollapsibleDetails = ({ project, isExpanded }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
        isExpanded ? 'max-h-screen opacity-100 ' : 'opacity-0'
      }`}
    >
      <div className='text-sm p-2 bg-gray-50 border'>
        <div className=' bg-white rounded-md p-2 border'>
          <h2 className='text-2xl'>{project.projectName}</h2>
          <div className='flex items-center gap-2 py-2 '>
            <FaRegBuilding color={'green'} size={24} />
            <p className='font-bold'>{project.clientName}</p>
          </div>
        </div>

        <div className=''>
          <div className='flex justify-between pt-2 '>
            <div className='w-80 grid grid-cols-2  gap-1  bg-white p-2 rounded-md text-xs border'>
              <p className='font-semibold'>Contact person:</p>
              <p className='m-0'>Jon Hill</p>

              <p className='font-semibold'>E-mail:</p>
              <p className='m-0'>Jon@gmail.com</p>

              <p className='font-semibold'>Mobile:</p>
              <p>0723000000</p>

              <p className='font-semibold'>Project Number:</p>
              <p>{project.projectNumber}</p>
              <p className='font-semibold'>Start date:</p>
              <p>{project.startDate}</p>
              <p className='font-semibold'>End date:</p>
              <p>{project.endDate || '-'}</p>
              <p className='font-semibold '>Status:</p>
              <p
                className={`${
                  project.status === 'Completed'
                    ? 'text-green-500'
                    : 'text-orange-500'
                }`}
              >
                {project.status}
              </p>
            </div>

            <div className=' space-y-1 bg-white p-2 rounded-md border'>
              <h2 className='text-sm font-semibold py-1'>Customer invoice</h2>
              <div className=' bg-gray-100 p-1 text-xs grid grid-cols-4 gap-4 font-semibold '>
                <p>Date</p>
                <p>Invoice</p>
                <p>Status</p>
                <p>Amount</p>
              </div>

              <div className='bg-gray-100 p-1 text-xs grid grid-cols-4 gap-4'>
                <p className='m-0'>2024-01-23</p>
                <p className='m-0 text-blue-500'>00001se</p>
                <p className='m-0'>Paid</p>
                <p className='m-0'>{project.customerInvoice}</p>
              </div>

              <div className='bg-gray-100 p-1 text-xs grid grid-cols-4 gap-4'>
                <p className='m-0'>2024-01-23</p>
                <p className='m-0 text-blue-500'>00001se</p>
                <p className='m-0'>Paid</p>
                <p className='m-0'>{project.customerInvoice}</p>
              </div>

              <div className='grid grid-cols-4 font-semibold'>
                <p></p>
                <p></p>
                <p className='bg-gray-100 p-1'>Total</p>
                <p className='bg-gray-100 p-1'>{project.customerInvoice * 2}</p>
              </div>
            </div>

            <div className='space-y-1 bg-white rounded-md p-2 border'>
              <h2 className='py-1 font-semibold'>Supplier invoice</h2>
              <div className='bg-gray-100 p-1 text-xs grid grid-cols-4 gap-4 font-semibold'>
                <p>Date</p>
                <p>Invoice</p>
                <p>Status</p>
                <p>Amount</p>
              </div>

              <div className='bg-gray-100 p-1 text-xs grid grid-cols-4 gap-4'>
                <p className='m-0'>2024-01-23</p>
                <p className='m-0 text-blue-500'>00001se</p>
                <p className='m-0'>Paid</p>
                <p className='m-0'>{project.supplierInvoice}</p>
              </div>

              <div className='bg-gray-100 p-1 text-xs grid grid-cols-4 gap-4'>
                <p className='m-0'>2024-01-23</p>
                <p className='m-0 text-blue-500'>00001se</p>
                <p className='m-0'>Paid</p>
                <p className='m-0'>{project.supplierInvoice}</p>
              </div>

              <div className='grid grid-cols-4 font-semibold'>
                <p></p>
                <p></p>
                <p className='bg-gray-100 p-1'>Total</p>
                <p className='bg-gray-100 p-1'>{project.supplierInvoice * 2}</p>
              </div>
            </div>
          </div>

          <div className='text-blue-400 text-right py-4 text-xl font-semibold  '>
            <div className='inline-block border-b border-4 p-2 border-blue-400 '>
              Total Revenue :{' '}
              {(project.customerInvoice - project.supplierInvoice) * 2} SEK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleDetails;
