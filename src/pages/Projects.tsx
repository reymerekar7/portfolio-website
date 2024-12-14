import React from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageTransition from '../components/transitions/PageTransition';

const Projects = () => {
  const breadcrumbs = [{ label: 'Projects', href: '/projects' }];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">E-commerce Platform</h2>
            <p className="text-gray-600 mb-4">
              A full-featured e-commerce solution built with React and Node.js
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 text-sm rounded">React</span>
              <span className="px-2 py-1 bg-gray-100 text-sm rounded">Node.js</span>
              <span className="px-2 py-1 bg-gray-100 text-sm rounded">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;