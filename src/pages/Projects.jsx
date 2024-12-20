import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectData = [
  {
    company: "Ajua",
    project: "MTN Engage App",
    description: "Backend for microservices hosted on AWS ECR and EKS.",
    links: {dashboard:"https://ajua.com/"},
  },
  {
    company: "Admoni",
    project: "Admoni App",
    description: "Mobile app available on PlayStore for advertisers.",
    links: { dashboard: "https://admoni.ng/" },
  },
  {
    company: "Mixpeek",
    project: "Mixpeek SDK",
    description: "Development of the Mixpeek SDK and engine.",
    links: {dashboard:"https://mixpeek.com/"},
  },
];

const Projects = () => (
  <div className="projects">
    <div className="project-list">
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export default Projects;