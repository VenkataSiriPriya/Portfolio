import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectSection = () => {
  const [flippedCards, setFlippedCards] = useState({});

  // Cyan color scheme
  const primaryColor = '#06B6D4'; // cyan-500
  const accentColor = '#0891B2'; // cyan-600

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack Application",
      description: "A comprehensive e-commerce solution featuring user authentication, payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      features: ["Payment Integration", "Admin Dashboard", "User Authentication", "Inventory Management"]
    },
    {
      title: "Task Management App",
      category: "Collaboration Tool",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and advanced project tracking capabilities.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/task-management-app",
      features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "Project Tracking"]
    },
    {
      title: "Weather Dashboard",
      category: "Data Visualization",
      description: "A responsive weather application providing location-based forecasts, interactive maps, detailed analytics, and weather trend visualization using multiple APIs.",
      tech: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      features: ["Interactive Maps", "Weather Analytics", "Trend Visualization", "Multi-location Support"]
    },
    {
      title: "Portfolio Website",
      category: "Personal Branding",
      description: "A modern, responsive portfolio website featuring smooth animations, optimized performance, and clean design principles to showcase professional work effectively.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com/yourusername/portfolio-website",
      features: ["Smooth Animations", "Responsive Design", "Performance Optimized", "Clean UI/UX"]
    },
    {
      title: "Social Media Dashboard",
      category: "Analytics Platform",
      description: "A comprehensive social media analytics dashboard providing insights, engagement metrics, content scheduling, and performance tracking across multiple platforms.",
      tech: ["Vue.js", "D3.js", "Firebase", "REST APIs"],
      githubUrl: "https://github.com/yourusername/social-media-dashboard",
      features: ["Analytics Dashboard", "Content Scheduling", "Multi-platform Support", "Performance Metrics"]
    },
    {
      title: "Learning Management System",
      category: "Educational Platform",
      description: "An interactive learning management system with course creation, progress tracking, interactive quizzes, and comprehensive student management features.",
      tech: ["Angular", "Spring Boot", "MySQL", "AWS"],
      githubUrl: "https://github.com/yourusername/learning-management-system",
      features: ["Course Creation", "Progress Tracking", "Interactive Quizzes", "Student Management"]
    }
  ];

  const handleCardClick = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="bg-black text-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(45deg, ${primaryColor}, ${accentColor})`
            }}
          >
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Click on any project card to explore detailed information and technical implementation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative h-64 cursor-pointer group"
              style={{ perspective: '1000px' }}
              onClick={() => handleCardClick(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 p-6 flex flex-col justify-between group-hover:shadow-2xl transition-shadow duration-300"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    boxShadow: `0 8px 25px ${primaryColor}15`
                  }}
                >
                  {/* Project Icon/Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}20, ${accentColor}20)`,
                        border: `1px solid ${primaryColor}30`
                      }}
                    >
                      <svg className="w-6 h-6" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <span 
                      className="text-xs font-medium px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: `${primaryColor}15`,
                        color: primaryColor
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 rounded-md text-xs font-medium bg-gray-800 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-800 text-gray-400">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Click to flip indicator */}
                  <div className="flex items-center justify-center">
                    <span className="text-xs text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Click to flip
                    </span>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border p-6 flex flex-col group-hover:shadow-2xl transition-shadow duration-300"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    borderColor: primaryColor,
                    boxShadow: `0 8px 25px ${primaryColor}25`
                  }}
                >
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: `${primaryColor}10`,
                            color: primaryColor
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center px-4 py-2 rounded-lg font-medium text-white text-sm transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                        boxShadow: `0 4px 15px ${primaryColor}30`
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105"
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
            Let's Collaborate
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/3 -right-20 w-32 h-32 rounded-full opacity-5 animate-pulse"
          style={{ background: `radial-gradient(circle, ${primaryColor}, transparent)` }}
        />
        <div 
          className="absolute bottom-1/3 -left-20 w-32 h-32 rounded-full opacity-5 animate-pulse"
          style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }}
        />
      </div>
    </section>
  );
};

export default ProjectSection;