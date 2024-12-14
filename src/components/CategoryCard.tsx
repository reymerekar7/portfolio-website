import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const CategoryCard = ({ title, description, icon: Icon, href }: CategoryCardProps) => {
  return (
    <a
      href={href}
      className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-105 hover:bg-gray-50"
    >
      <div className="space-y-4">
        <Icon className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;