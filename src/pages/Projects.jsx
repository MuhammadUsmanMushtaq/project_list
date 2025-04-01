import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../components/Search';

const Projects = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearchResults = (results) => {
    setFilteredProjects(results);
  };

  return (
    <div className='max-w-6xl mx-auto bg-whiteshadow-md'>
      <Search data={projects} onSearchResults={handleSearchResults} />
      <div className='grid grid-cols-9 gap-4 bg-gray-100 font-medium p-3 rounded-t-md text-sm '>
        <div>Project #</div>
        <div>Cust Name</div>
        <div>Cust Invoice</div>
        <div>Supp Invoice</div>
        <div>Expected</div>
        <div>Outcome</div>
        <div>Status</div>
        <div>Details</div>
        <div>Actions</div>
      </div>
      {filteredProjects.length === 0 ? (
        <p className='p-4 text-center border-x '>Oops No project found</p>
      ) : (
        filteredProjects.map((project) => (
          <div key={project.id} className='divide-y divide-gray-300 '>
            <div className='grid grid-cols-9 gap-4 p-2 items-center border-b border-x border-gray-100 hover:bg-gray-50 text-sm '>
              <div>{project.projectNumber}</div>
              <div>{project.clientName}</div>
              <div>{project.customerInvoice}</div>
              <div>{project.supplierInvoice}</div>
              <div>{project.expected}</div>
              <div>{project.outcome}</div>
              {project.status === 'Completed' ? (
                <div>
                  <span className='border-green-500 bg-green-50 text-green-500 font-medium border rounded-full px-2 py-1 text-center text-xs'>
                    {project.status}
                  </span>
                </div>
              ) : (
                <div>
                  <span className='border-orange-500 bg-orange-50 text-orange-400 font-medium border rounded-full px-2 py-1 text-center text-xs'>
                    {project.status}
                  </span>
                </div>
              )}

              <div>
                <Link
                  to={`/projects/${project.id}`}
                  key={project.id}
                  className='text-blue-600 '
                >
                  details
                </Link>
              </div>
              <div>
                {project.status === 'Completed' ? (
                  <p className='px-2 py-1'>----</p>
                ) : (
                  <button className='px-2 py-1 bg-[#63a27a] text-white rounded'>
                    Done
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      )}
      <div className='border-x border-b rounded-b-md pt-8'>
        <div className='text-center mt-6 p-6 bg-gray-100'>pagination</div>
      </div>
    </div>
  );
};

export default Projects;
