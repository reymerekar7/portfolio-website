import React from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import SkillCategory from '../components/skills/SkillCategory';
import SkillBar from '../components/skills/SkillBar';
import PageTransition from '../components/transitions/PageTransition';

const About = () => {
  const breadcrumbs = [{ label: 'About', href: '/about' }];

  const skillCategories = {
    frontend: [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material UI',
    ],
    ai: [
      'OpenAI',
      'Anthropic',
      'Hugging Face',
      'LangChain',
      'Python',
      'FastAPI',
      'RESTful APIs',
      'TensorFlow',
      'PyTorch',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'MLFlow',
    ],
    database: [
      'Google Cloud Platform',
      'AWS',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Git',
      'Apache Airflow',
      'dbt',
      'MLOps',
    ],
  };

  const skillBars = [
    { name: 'AI/ML Development', percentage: 95 },
    { name: 'Entrepreneurship/Startups', percentage: 90 },
    { name: 'Generative AI', percentage: 90 },
    { name: 'MLOps/LLMOps', percentage: 85 },
    { name: 'Storytelling', percentage: 85 },
    { name: 'Content Creation', percentage: 85 },
    { name: 'Client Relationship Management', percentage: 80 },
    { name: 'Strategic Advisory', percentage: 80 },
    { name: 'Data Engineering', percentage: 75 },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* About Me Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            As an AI Architecture Specialist at Accenture, I lead clients through AI/ML transformations, operationalizing scalable solutions that deliver tangible value. 
            My expertise encompasses Generative AI, MLOps, AI/ML Development, and Strategic Advisory.
            I am passionate about creating innovative AI-driven products and excel at combining technical proficiency with storytelling to craft compelling narratives that highlight competitive advantages. 
            With a strong entrepreneurial mindset, I am dedicated to exploring effective methodologies, systems, and startup ventures.
          </p>
        </div>

        {/* Core Competencies Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h2>
          <div className="space-y-6">
            {skillBars.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>

        {/* Technical Expertise Section */}
        <div className="mb-12">
          {/* Technical Expertise Header */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h2>
          
          {/* Container without horizontal padding to align headers */}
          <div className="bg-gray-50 rounded-xl">
            {/* Inner container with vertical padding and no horizontal padding */}
            <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* AI/ML Development Column */}
              <div className="space-y-4">
                <h3 className="font-bold ml-0">AI/ML Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.ai.map(skill => (
                    <span key={skill} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Database & Cloud Column */}
              <div className="space-y-4">
                <h3 className="font-bold ml-0">Database, Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.database.map(skill => (
                    <span key={skill} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Removed Additional Description Section */}
      </div>
    </PageTransition>
  );
};

export default About;