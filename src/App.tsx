import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { User, Briefcase, Code, BookOpen, Newspaper } from 'lucide-react';
import Header from './components/layout/Header';
import AnimatedRoutes from './components/routing/AnimatedRoutes';
import Footer from './components/layout/Footer';
import { NavItem } from './types';

const navigation: NavItem[] = [
  {
    title: 'About',
    description: 'My journey & skills',
    icon: User,
    href: '/about',
  },
  {
    title: 'Projects',
    description: 'Featured work',
    icon: Briefcase,
    href: '/projects',
  },
  {
    title: 'Companies',
    description: 'Work experience',
    icon: Code,
    href: '/companies',
  },
  {
    title: 'Research',
    description: 'Academic pursuits',
    icon: BookOpen,
    href: '/research',
  },
  {
    title: 'Newsletter',
    description: 'Weekly insights',
    icon: Newspaper,
    href: 'https://digestibleai-newsletter.beehiiv.com/',
  },
];

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header items={navigation} />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;