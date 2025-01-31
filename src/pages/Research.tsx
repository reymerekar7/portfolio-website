import React from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageTransition from '../components/transitions/PageTransition';

const Research = () => {
  const breadcrumbs = [{ label: 'Research', href: '/research' }];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold mb-6">Research</h1>
        <div className="grid gap-6">
          {/* Add your research content here */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Research Title</h2>
            <p className="text-gray-600 mb-4">
              Brief description of the research and its significance.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 text-sm rounded">Field/Area</span>
              {/* Add more tags as needed */}
            </div>
          </div>
          {/* Repeat the above block for more research entries */}
        </div>
      </div>
    </PageTransition>
  );
};

export default Research; 