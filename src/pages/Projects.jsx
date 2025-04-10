import React, { useState } from 'react';
import { Search } from '../components/Search';
import CollapsibleDetails from '../components/CollapsibleDetails';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';

const Projects = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const handleSearchResults = (results) => {
    setFilteredProjects(results);
  };

  const handleCheckboxChange = (id) => {
    setSelectedProjects((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((projectId) => projectId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDeleteSelected = () => {
    setFilteredProjects(
      filteredProjects.filter(
        (project) => !selectedProjects.includes(project.id)
      )
    );
    setSelectedProjects([]);
  };

  const handleToggleExpand = (id) => {
    setExpandedProjectId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className='max-w-6xl mx-auto'>
      <Search data={projects} onSearchResults={handleSearchResults} />

      {selectedProjects.length > 0 && (
        <div className='relative'>
          <div className='hover:bg-gray-100 absolute top-[-40px] flex items-center gap-2 px-2 py-1 border border-gray-200 rounded-md'>
            <IoMdCheckmarkCircle size={24} className='text-[#63a27a]' />
            <button
              onClick={handleDeleteSelected}
              className='font-medium text-xs'
            >
              Completed
            </button>
          </div>
        </div>
      )}

      <div className='text-center grid grid-cols-[auto,repeat(9,_1fr)] gap-2 bg-gray-200 font-medium p-3 rounded-t-md text-sm '>
        <div className='w-8'>#</div>
        <div>Project nr</div>
        <div>Start date</div>
        <div>Cust Name</div>
        <div>Cust Invoice</div>
        <div>Sup Invoice</div>
        <div>Expected</div>
        <div>Outcome</div>
        <div>Status</div>
        <div>Details</div>
      </div>

      {filteredProjects.length === 0 ? (
        <p className='p-4 text-center border-x'>Oops No project found</p>
      ) : (
        filteredProjects.map((project) => {
          const isSelected = selectedProjects.includes(project.id);
          const isExpanded = expandedProjectId === project.id;

          return (
            <div key={project.id} className='divide-y divide-gray-300'>
              <div
                className={`text-center grid grid-cols-[auto,repeat(9,_1fr)] gap-2 p-2 items-center border-b border-x border-gray-200 hover:bg-gray-100 text-sm ${
                  isSelected ? 'hover:bg-green-100 bg-green-100' : ''
                }`}
              >
                <div className='w-8'>
                  <label>
                    <input
                      type='checkbox'
                      checked={isSelected}
                      onChange={() => handleCheckboxChange(project.id)}
                    />
                  </label>
                </div>
                <div>{project.projectNumber}</div>
                <div>{project.startDate}</div>
                <div>{project.clientName}</div>
                <div>{project.customerInvoice * 2}</div>
                <div>{project.supplierInvoice * 2}</div>
                <div>{project.expected * 2}</div>
                <div>{project.outcome * 2}</div>

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

                <div className='ml-8'>
                  <button
                    onClick={() => handleToggleExpand(project.id)}
                    className='text-blue-600 flex items-center gap-1'
                  >
                    {isExpanded ? (
                      <div className='flex items-center  gap-2'>
                        <span>close</span>
                        <BsChevronCompactUp size={16} />
                      </div>
                    ) : (
                      <div className='flex items-center gap-2'>
                        <span>view</span>
                        <BsChevronCompactDown size={16} />
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* Collapsible section with smooth transition */}
              <CollapsibleDetails project={project} isExpanded={isExpanded} />
            </div>
          );
        })
      )}

      <div className='border-x border-b border-gray-200 rounded-b-md pt-8'>
        <div className='text-center mt-6 p-6 rounded-b bg-gray-200'>
          pagination
        </div>
      </div>
    </div>
  );
};

export default Projects;
