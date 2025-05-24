// HomePage.jsx
import React, { useState } from 'react';
import HeroSection from '../pages/HeroSection';
import ProjectSection from '../pages/ProjectSection';
import AboutSection from '../pages/AboutSection';
import ContactSection from '../pages/ContactSection';

const HomePage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <HeroSection isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      <ProjectSection isFlipped={isFlipped} />
      <AboutSection isFlipped={isFlipped} />
      <ContactSection isFlipped={isFlipped} />
    </>
  );
};

export default HomePage;
