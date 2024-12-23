import React from "react";

const Section = ({ title, children }) => (
  <section className="section">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

const ExperienceItem = ({ role, company, time, description }) => (
  <div className="experience-item">
    <h3>
      {role} at {company}
    </h3>
    <span className="time">{time}</span>
    <p>{description}</p>
  </div>
);

const Home = () => (
  <div className="home">
    <Section title="Experience">
      <ExperienceItem
        role="Tech Team Lead"
        company="Nexaya"
        time="AUGUST 2023 - PRESENT"
        description="Lead and mentor a team of engineers to design scalable Applications. Architected Cloud Solutions on AWS."
      />
      <ExperienceItem
        role="Senior Platform Engineer"
        company="Mixpeek"
        time="AUGUST 2024 - PRESENT"
        description="Develop and maintain robust platform architectures to support Mixpeek’s AI vector processing engine."
      />
      <ExperienceItem
        role="Senior Platform Engineer"
        company="Mixpeek"
        time="AUGUST 2024 - PRESENT"
        description="Develop and maintain robust platform architectures to support Mixpeek’s AI vector processing engine."
      />
      {/* Add more experience items */}
    </Section>
    <Section title="Education">
      <p>Delta State University, Nigeria — B.ENG, Second Class Upper (2:1)</p>
    </Section>
    <Section title="Skills">
      <ul>
        <li>Node.js, Python, Java</li>
        <li>Cloud Infrastructure: AWS, GCP</li>
        <li>Microservices, API Development, Terraform</li>
      </ul>
    </Section>
    <Section title="Projects">
      <a
        href="https://ogagacodes.github.io/projects"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit my project portfolio
      </a>
    </Section>
    <Section title="Certifications">
      <ul>
        <li>Node.js API Development (Udemy)</li>
        <li>Pragmatic System Design (Udemy)</li>
        {/* Add more certifications */}
      </ul>
    </Section>
    <Section title="Languages">
      <p>
        English (Expert), French (Basic), Spanish (Basic), Pidgin (Expert),
        Urhobo (Expert)
      </p>
    </Section>
  </div>
);

export default Home;
