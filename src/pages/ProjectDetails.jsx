import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className='p-4'>
      <h2>{project.projectName}</h2>
      <p>
        <strong>Description:</strong> {project.clientName}
      </p>
      <p>
        <strong>Status:</strong> {project.status}
      </p>
    </div>
  );
};

export default ProjectDetails;
