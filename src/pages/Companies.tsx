import React from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageTransition from '../components/transitions/PageTransition';

const Companies = () => {
  const breadcrumbs = [{ label: 'Companies', href: '/companies' }];

  // Array of company objects
  const companies = [
    {
      name: 'Company One',
      description: 'Description of Company One and your role there.',
      skills: ['React', 'Node.js', 'AWS'],
    },
    {
      name: 'Company Two',
      description: 'Description of Company Two and your role there.',
      skills: ['Angular', 'Firebase', 'Docker'],
    },
    {
      name: 'Company Three',
      description: 'Description of Company Three and your role there.',
      skills: ['Vue', 'GraphQL', 'Kubernetes'],
    },
    {
      name: 'Company Four',
      description: 'Description of Company Four and your role there.',
      skills: ['Next.js', 'Express', 'MongoDB'],
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold mb-6">Companies</h1>
        {/* 2x2 grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {companies.map((company, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
              <p className="text-gray-600 mb-4">{company.description}</p>
              <div className="flex gap-2 flex-wrap">
                {company.skills.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-sm rounded">
                    {skill}
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

export default Companies;