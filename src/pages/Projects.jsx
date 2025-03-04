import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../components/Search';

const Projects = ({ projects }) => {
  return (
    <div className='bg-gray-100 p-4'>
      <Search />
      {projects.map((project) => (
        <Link
          to={`/projects/${project.id}`}
          key={project.id}
          className='p-4 border-[1px] shadow-sm border-gray-200 rounded-md mb-1 flex justify-between items-center bg-white'
        >
          <div className='flex flex-col text-left'>
            <span className='text-xl'>{project.projectName}</span>
            <span className='text-sm'>{project.clientName}</span>
          </div>

          <span
            className={`${
              project.status === 'Completed'
                ? 'text-center p-2 rounded-md border-2 border-green-500 bg-white text-green-500  '
                : 'text-center p-2 rounded-md border-2 border-yellow-500 bg-white text-yellow-600 '
            }`}
          >
            {project.status}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
