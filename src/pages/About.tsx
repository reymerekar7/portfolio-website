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
    backend: [
      'Node.js',
      'Express.js',
      'NestJS',
      'Python',
      'Django',
      'FastAPI',
      'RESTful APIs',
      'GraphQL',
    ],
    database: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'AWS',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Git',
    ],
  };

  const skillBars = [
    { name: 'Frontend Development', percentage: 95 },
    { name: 'Backend Development', percentage: 90 },
    { name: 'Database Management', percentage: 85 },
    { name: 'Cloud Infrastructure', percentage: 80 },
    { name: 'DevOps', percentage: 75 },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            I am a passionate software engineer with extensive experience in full-stack development.
            My technical expertise includes building scalable applications and implementing best practices
            in software development. I thrive on solving complex technical challenges and am always eager
            to learn new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
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

          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h2>
            <div className="space-y-8">
              <SkillCategory title="Frontend Development" skills={skillCategories.frontend} />
              <SkillCategory title="Backend Development" skills={skillCategories.backend} />
              <SkillCategory title="Database & Cloud" skills={skillCategories.database} />
            </div>
          </div>
        </div>

        <div className="prose prose-indigo max-w-none">
          <p className="text-gray-600">
            I thrive on solving complex technical challenges and building scalable applications.
            My focus is on writing clean, maintainable code and implementing best practices in
            software development. I'm always eager to learn new technologies and contribute to
            innovative projects.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;