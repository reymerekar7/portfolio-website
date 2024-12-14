import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
      <Link to="/" className="flex items-center hover:text-indigo-600">
        <Home className="w-4 h-4" />
      </Link>
      {items.map(({ label, href }, index) => (
        <React.Fragment key={href}>
          <ChevronRight className="w-4 h-4" />
          <Link
            to={href}
            className={`hover:text-indigo-600 ${
              index === items.length - 1 ? 'text-gray-900 font-medium' : ''
            }`}
          >
            {label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;