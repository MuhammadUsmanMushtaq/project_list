import React, { useState, useEffect } from 'react';
import { Search } from '../components/Search';
import CollapsibleDetails from '../components/CollapsibleDetails';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';

const Projects = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  useEffect(() => {
    const sorted = [...projects].sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
    setFilteredProjects(sorted);
  }, [projects]);

  const handleSearchResults = (results) => {
    const sortedResults = [...results].sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
    setFilteredProjects(sortedResults);
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
            <IoMdCheckmarkCircle size={24} className='text-green-500' />
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
        <p className='p-4 text-center border-x'>Oops! No project found</p>
      ) : (
        filteredProjects.map((project, index) => {
          const isSelected = selectedProjects.includes(project.id);
          const isExpanded = expandedProjectId === project.id;

          return (
            <div key={project.id} className='divide-y divide-gray-300'>
              <div
                className={`text-center grid grid-cols-[auto,repeat(9,_1fr)] gap-2 p-2 items-center text-sm
                ${
                  isExpanded
                    ? 'border border-blue-600'
                    : 'border-b border-x border-t border-gray-200'
                }
                ${isSelected ? 'bg-blue-100' : 'hover:bg-gray-50'}`}
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

                <div>
                  <span
                    className={`border rounded-full px-2 py-1 text-center text-xs font-medium ${
                      project.status === 'Completed'
                        ? 'border-green-500 bg-green-50 text-green-500'
                        : 'border-orange-500 bg-orange-50 text-orange-400'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className='ml-8'>
                  <button
                    onClick={() => handleToggleExpand(project.id)}
                    className='text-blue-600 flex items-center gap-1'
                  >
                    {isExpanded ? (
                      <div className='flex items-center gap-2'>
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
