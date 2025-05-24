import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/myphoto.jpg';

const HeroSection = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cyan color scheme
  const primaryColor = '#06B6D4'; // cyan-500
  const accentColor = '#0891B2'; // cyan-600

  // Static content
  const content = {
    name: "John Doe",
    role: "Full Stack Developer",
    description: "I craft exceptional digital experiences through clean code and thoughtful design. Specializing in modern web technologies like React and Tailwind CSS, I transform ideas into elegant, user-centered solutions.",
    sections: [
      { name: 'Home', href: '#home' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ]
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white"
    >
      {/* Navbar */}
      <nav className="relative z-50 w-full px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            key={content.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            {content.name}
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {content.sections.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  {item.name}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r transition-all duration-300 group-hover:w-full"
                    style={{
                      background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`
                    }}
                  ></span>
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-300 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-300 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-sm rounded-lg mt-4"
        >
          <ul className="px-6 py-4 space-y-3">
            {content.sections.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Hello, I'm{' '}
                <span
                  className="bg-gradient-to-r bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(45deg, ${primaryColor}, ${accentColor})`
                  }}
                >
                  {content.name}
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 font-light"
              >
                {content.role}
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={content.sections[1].href}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                  boxShadow: `0 10px 30px ${primaryColor}30`
                }}
              >
                View My Work
              </a>
              <a
                href={content.sections[2].href}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: primaryColor,
                  color: primaryColor,
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${primaryColor}, ${accentColor})`;
                  e.target.style.color = 'white';
                  e.target.style.borderColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = primaryColor;
                  e.target.style.borderColor = primaryColor;
                }}
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Additional Info Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <span 
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  backgroundColor: `${primaryColor}1A`,
                  color: primaryColor,
                  borderColor: `${primaryColor}33`
                }}
              >
                React
              </span>
              <span 
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  backgroundColor: `${primaryColor}1A`,
                  color: primaryColor,
                  borderColor: `${primaryColor}33`
                }}
              >
                Node.js
              </span>
              <span 
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  backgroundColor: `${primaryColor}1A`,
                  color: primaryColor,
                  borderColor: `${primaryColor}33`
                }}
              >
                Full Stack
              </span>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex flex-col items-center lg:items-end space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Animated background glow */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse"
                style={{
                  background: `radial-gradient(circle, ${primaryColor}, ${accentColor})`,
                  transform: 'scale(1.2)',
                }}
              ></div>
              
              {/* Image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 group">
                <img
                  src={profileImage}
                  alt="John Doe - Developer"
                  className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white/10 group-hover:ring-white/20 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10"
             style={{ background: `radial-gradient(circle, ${primaryColor}, transparent)` }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10"
             style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }}></div>
      </div>
    </section>
  );
};

export default HeroSection;