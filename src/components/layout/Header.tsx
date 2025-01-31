import React from 'react';
import { NavItem } from '../../types';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  items: NavItem[];
}

const Header = ({ items }: HeaderProps) => {
  const location = useLocation();

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {items.map(({ title, icon: Icon, href }) => {
            const isActive = location.pathname === href;
            return (
              <Link
                key={title}
                to={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center px-4 transition-colors duration-200
                  ${isActive 
                    ? 'text-purple-400 bg-black/30' 
                    : 'text-white hover:text-white hover:bg-purple-500/20'
                  }`}
              >
                <Icon className={`w-5 h-5 mr-2 ${isActive ? 'text-purple-400' : 'text-white'}`} />
                <span className="text-sm font-medium">{title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;