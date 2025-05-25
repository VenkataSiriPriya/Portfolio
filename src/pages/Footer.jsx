// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-cyan-400 border-t border-cyan-600 py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Siri Priya. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
