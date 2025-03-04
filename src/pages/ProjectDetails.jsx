import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = ({ projects = [] }) => {
  // Set default to an empty array
  const { id } = useParams();

  // Ensure id is converted to number for comparison
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className='p-4 min-h-screen'>
      <div className='p-4 border border-gray-300 rounded-md shadow'>
        <Link to='/' className='text-blue-600 text-center block mb-4'>
          &#8592; Back to all projects
        </Link>
        <div className='py-8 text-left'>
          <h2 className='text-2xl border-y-[1px] py-4'>
            {project.projectName}
          </h2>
          <div className='py-4 flex justify-between md:justify-start md:gap-16'>
            <strong>Company</strong>
            <span>{project.clientName}</span>
          </div>
          <div className='flex justify-between md:justify-start md:gap-16 border-y-[1px] py-4'>
            <strong>Status</strong>
            <span>{project.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
