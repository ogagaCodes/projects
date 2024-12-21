import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectData = [
  {
    company: "Ajua",
    project: "MTN Engage App",
    description: "Backend for microservices hosted on AWS ECR and EKS.",
    links: { dashboard: "https://ajua.com/" },
  },
  {
    company: "Bii",
    project: "Bii MArketplace",
    description: "Sustainable marketp[ace].",
    links: { dashboard: "https://bii.earth/" },
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
    links: { dashboard: "https://mixpeek.com/" },
  },
  {
    company: "Research Buddy",
    project: "Reserach Buddy",
    description: "Crypto Research Tool",
    links: { dashboard: "https://researchbuddy.io/" },
  },
  {
    company: "DEKAMCO",
    project: "DEKAMCO Cloud Solution",
    description: "Cloud solution for DEKAMCO",
    links: { dashboard: "https://dekam.co/" },
  },
  {
    company: "Broadcaad Ltd",
    project: "Braodcaad",
    description: "Crypto Research Tool",
    links: { dashboard: "https://broadcaad.com/" },
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
