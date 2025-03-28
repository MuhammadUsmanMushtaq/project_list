import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../components/Search';
import { RiProgress4Line, RiProgress8Line } from 'react-icons/ri';

const Projects = ({ projects }) => {
  return (
    <div className='bg-gray-100 p-4'>
      <Search />
      {projects.map((project) => (
        <div className=' justify-between p-4 border-[1px] shadow-sm border-l-4 border-gray-200 rounded-md mb-2 flex items-center bg-white  hover:border-[#63a27a] '>
          <div className='flex flex-col leading-3 text-left'>
            <p className='mb-4 font-semibold'>Project number</p>
            <p className=''>{project.projectNumber}</p>
          </div>
          <div className='flex flex-col leading-3 text-left'>
            <p className='mb-4 font-semibold'>Client name</p>
            <p className=''>{project.clientName}</p>
          </div>
          <div className='flex flex-col leading-3 text-left'>
            <p className='mb-4 font-semibold'>Customer invoice</p>
            <p className=''>{project.customerInvoice}</p>
          </div>
          <div className='flex flex-col leading-3 text-left'>
            <p className='mb-4 font-semibold'>Supplier invoice</p>
            <p className=''>{project.supplierInvoice}</p>
          </div>
          <div className='flex flex-col leading-3 text-left'>
            <p className='mb-4 font-semibold'>Outcome</p>
            <p className=''>{project.outcome}</p>
          </div>
          <div className='flex flex-col leading-3 text-left'>
            <p className='mb-4 font-semibold'>Status</p>
            <div className='flex items-center gap-2'>
              <p>{project.status}</p>
              <p>
                {project.status === 'Completed' ? (
                  <RiProgress8Line className=' text-green-600' />
                ) : (
                  <RiProgress4Line className='animate-spin text-orange-400' />
                )}
              </p>
            </div>
          </div>
          <div className='flex flex-col leading-3 text-left gap-2'>
            <label className='flex text-sm items-center selection:leading-3 text-left'>
              <input type='checkbox' className='mr-2' />
              Done
            </label>
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className='text-blue-500'
            >
              details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
