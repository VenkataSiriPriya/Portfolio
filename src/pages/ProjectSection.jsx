import React, { useState } from 'react';

const ProjectSection = () => {
  const [flippedCards, setFlippedCards] = useState({});

  // Cyan color scheme
  const primaryColor = '#06B6D4'; // cyan-500
  const accentColor = '#0891B2'; // cyan-600

  const projects = [
    {
      title: "Hospital Management System",
      category: "Healthcare Platform",
      description: "A comprehensive hospital management system featuring patient registration, appointment scheduling, medical records management, billing system, and staff administration with role-based access control.",
      tech: ["Python", "Django", "PostgreSQL", "Bootstrap"],
      githubUrl: "https://github.com/VenkataSiriPriya/HMS",
      liveUrl: "https://siripriya.pythonanywhere.com/",
      features: ["Patient Registration", "Appointment Scheduling", "Medical Records", "Billing System"],
      isComingSoon: false
    },
    {
      title: "Property Management System",
      category: "Real Estate Platform",
      description: "A modern property management application with property listings, tenant management, rent collection, maintenance tracking, and comprehensive reporting dashboard for property owners and managers.",
      tech: ["React.js", "Spring Boot", "Node.js", "MySQL"],
      githubUrl: "https://github.com/VenkataSiriPriya/SDP",
      liveUrl: "https://sdp-79n7.vercel.app/",
      features: ["Property Listings", "Tenant Management", "Rent Collection", "Maintenance Tracking"],
      isComingSoon: false
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "Machine Learning",
      description: "An intelligent analytics platform leveraging machine learning algorithms for predictive insights, data visualization, and automated reporting across multiple business domains.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Predictive Analytics", "ML Algorithms", "Data Visualization", "Automated Reports"],
      isComingSoon: true
    },
    {
      title: "Blockchain Voting System",
      category: "Decentralized App",
      description: "A secure and transparent voting system built on blockchain technology ensuring vote integrity, anonymity, and immutable record-keeping for democratic processes.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Blockchain Security", "Vote Integrity", "Anonymous Voting", "Smart Contracts"],
      isComingSoon: true
    }
  ];

  const handleCardClick = (index) => {
    if (!projects[index].isComingSoon) {
      setFlippedCards(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    }
  };

  return (
    <section id="projects" className="bg-black text-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: 1,
            transform: 'translateY(0px)'
          }}
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
            Click on project cards to explore detailed information and access live demos
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative h-80 group ${project.isComingSoon ? 'cursor-default' : 'cursor-pointer'}`}
              style={{ perspective: '1000px' }}
              onClick={() => handleCardClick(index)}
            >
              <div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front Side */}
                <div
                  className={`absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 p-6 flex flex-col justify-between transition-all duration-300 ${
                    project.isComingSoon 
                      ? 'opacity-75' 
                      : 'group-hover:shadow-2xl hover:scale-105'
                  }`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    boxShadow: `0 8px 25px ${primaryColor}15`
                  }}
                >
                  {/* Coming Soon Badge */}
                  {project.isComingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: '#F59E0B',
                          color: 'white'
                        }}
                      >
                        COMING SOON
                      </span>
                    </div>
                  )}

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
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Brief Description for Front */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description.substring(0, 120)}...
                    </p>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Click to flip indicator or Coming Soon */}
                  <div className="flex items-center justify-center">
                    {project.isComingSoon ? (
                      <span className="text-xs text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Coming Soon
                      </span>
                    ) : (
                      <span className="text-xs text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Click to flip
                      </span>
                    )}
                  </div>
                </div>

                {/* Back Side */}
                {!project.isComingSoon && (
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
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="text-xs px-2 py-1 rounded text-center"
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

                    {/* Action Buttons */}
                    <div className="flex gap-3 justify-center">
                      <a
                        href={project.liveUrl}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-white text-sm transition-all duration-300 hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                          boxShadow: `0 4px 15px ${primaryColor}30`
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-white text-sm transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-gray-500"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
          style={{
            opacity: 1,
            transform: 'translateY(0px)'
          }}
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
        </div>
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