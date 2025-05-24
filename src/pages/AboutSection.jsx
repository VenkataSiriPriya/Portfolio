// src/components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  const primaryColor = '#06B6D4'; // cyan-500
  const accentColor = '#0891B2';  // cyan-600

  return (
    <section
      id="about"
      className="bg-black py-16 px-4 text-center"
    >
      <h2
        className="text-3xl font-bold mb-4"
        style={{
          background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        About Me
      </h2>
      <p
        className="text-gray-300 max-w-2xl mx-auto"
        style={{ color: '#A0F0FF' }} // light cyan-ish text
      >
        I'm a self-taught developer with a love for creating clean, functional, and responsive websites.
        My main tech stack includes React, Tailwind CSS, and JavaScript. I enjoy learning and building cool stuff.
      </p>
    </section>
  );
};

export default AboutSection;
