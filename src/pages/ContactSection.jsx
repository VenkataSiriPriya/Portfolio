// src/components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  const primaryColor = '#06B6D4'; // cyan-500
  const accentColor = '#0891B2';  // cyan-600

  return (
    <section id="contact" className="bg-black py-16 px-4 text-center">
      <h2
        className="text-3xl font-bold mb-6"
        style={{
          background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Get in Touch
      </h2>
      <p className="text-cyan-300 mb-4">
        Want to work together or have questions?
      </p>
      <a
        href="mailto:your.email@example.com"
        className="inline-block px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
      >
        Say Hello
      </a>
    </section>
  );
};

export default ContactSection;
