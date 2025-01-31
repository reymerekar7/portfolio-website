import React from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageTransition from '../components/transitions/PageTransition';

const Projects = () => {
  const breadcrumbs = [{ label: 'Projects', href: '/projects' }];

  // Array of project objects
  const projects = [
    {
      title: 'MLOps',
      description: 'led a team of 5 to build a MLOps platform for a client',
      tech: ['Python', 'FastAPI', 'Hugging Face', 'LangChain', 'OpenAI', 'Anthropic'],
    },
    {
      title: 'Social Media App',
      description: 'A scalable social media application with real-time features.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills.',
      tech: ['React', 'Next.js', 'Chakra UI'],
    },
    {
      title: 'Analytics Dashboard',
      description: 'An interactive analytics dashboard for monitoring key metrics.',
      tech: ['React', 'D3.js', 'Express'],
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        {/* 2x2 grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;