import React from "react";

const ProjectCard = ({ company, project, description, links }) => (
  <div className="project-container">
        <div className="project-card">
   <h2>{project}</h2>
    </div>
    <div className="project-card">
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>{description}</p>
      {links?.dashboard && (
        <a href={links.dashboard} target="_blank" rel="noopener noreferrer">
          App Home
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
