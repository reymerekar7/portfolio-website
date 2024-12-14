import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;