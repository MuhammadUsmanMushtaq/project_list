import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../components/Search';
import { RiProgress4Line, RiProgress8Line } from 'react-icons/ri';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';

const Projects = ({ projects }) => {
  return (
    <div className='bg-gray-100 p-4'>
      <Search />
      {projects.map((project) => (
        <Link
          to={`/projects/${project.id}`}
          key={project.id}
          className='p-4 border-[1px] shadow-sm border-l-4 border-gray-200 rounded-md mb-2 flex justify-between items-center bg-white  hover:border-green-700 '
        >
          <div className='flex text-left items-center'>
            <HiOutlineBuildingOffice color='green' size={64} />
            <div className='flex flex-col leading-3 text-left'>
              <span className='text-xl'>{project.projectName}</span>
              <span className='text-sm'>{project.clientName}</span>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <span>{project.status}</span>
            <span>
              {project.status === 'Completed' ? (
                <RiProgress8Line className=' text-green-600 text-xl' />
              ) : (
                <RiProgress4Line className='animate-spin text-orange-400 text-xl' />
              )}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
