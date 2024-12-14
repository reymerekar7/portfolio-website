import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Bio from '../layout/Bio';
import About from '../../pages/About';
import Projects from '../../pages/Projects';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Bio />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* Add other routes as they are implemented */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;