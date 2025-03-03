import React from 'react';

const Projects = ({ projects }) => {
  return (
    <div>
      <div className='flex justify-between text-white font-bold p-4 bg-black rounded-md mb-2'>
        <span>Project Title</span>
        <span>Project Status</span>
      </div>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project ${
            index % 2 === 0
              ? 'p-4 border-[1px] shadow-sm border-gray-200 rounded-md mb-1 flex justify-between items-center bg-gray-100'
              : 'p-4 border-[1px] shadow-sm border-gray-200 rounded-md mb-1 flex justify-between items-center'
          }`}
        >
          <span>{project.projectName}</span>
          <span
            className={`${
              project.status === 'Active'
                ? 'text-center w-[80px] p-1 rounded-md bg-green-300'
                : 'text-center w-[80px] p-1 rounded-md bg-gray-300'
            }`}
          >
            {project.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Projects;
