import React from 'react';
import PageTransition from '../transitions/PageTransition';

const Bio = () => {
  return (
    <PageTransition>
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem-8rem)]">
        {/* Left Column - Bio Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Reyhan Merekar</h1>
            <p className="text-gray-600 leading-relaxed text-xl">
              AI Engineer, Founder, Educator, Lifelong Learner.
            </p>
          </div>
        </div>

        {/* Right Column - Full Height Image */}
        <div className="w-full md:w-1/2 h-[calc(100vh-4rem-8rem)]">
          <img
            src="/IMG_2138.JPG"
            alt="Profile"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
        </div>
      </div>
    </PageTransition>
  );
};

export default Bio;