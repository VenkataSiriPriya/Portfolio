
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('story');
  
  const primaryColor = '#06B6D4'; // cyan-500
  const accentColor = '#0891B2'; // cyan-600
  const gradientPrimary = 'from-cyan-500 via-blue-500 to-teal-500';
  const gradientSecondary = 'from-blue-400 via-cyan-400 to-teal-400';

  const personalInfo = {
    name: "Tech Enthusiast & Security Specialist",
    location: "KL University, India",
    experience: "3+ Years of Self-Learning",
    focus: "Cybersecurity & Full-Stack Development"
  };

  const skillsData = {
    technical: [
      { name: "React & Modern JS", level: 90, category: "Frontend" },
      { name: "Node.js & Python", level: 85, category: "Backend" },
      { name: "Cybersecurity", level: 88, category: "Security" },
      { name: "Database Design", level: 82, category: "Data" },
      { name: "Cloud & DevOps", level: 78, category: "Infrastructure" }
    ],
    tools: [
      { name: "Kali Linux", icon: "🛡️" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Git", icon: "📚" }
    ]
  };

  const timeline = [
  {
    "year": "2023",
    "title": "Started B.Tech Journey",
    "description": "Began exploring core concepts in Computer Science and Engineering. Learned programming fundamentals, version control with Git and GitHub, and built foundational knowledge in HTML and CSS.",
    "type": "education"
  },
  {
    "year": "2024",
    "title": "Self-Taught Development",
    "description": "Dived into Python full-stack development with Django. Gained experience working with PostgreSQL and built my first web application as part of the PFSD program.",
    "type": "skill"
  },
  {
    "year": "2024",
    "title": "Full-Stack Web Development",
    "description": "Expanded into full-stack development with a focus on React.js and JavaScript. Developed a complete Property Management System using these technologies.",
    "type": "specialization"
  },
  {
    "year": "2025",
    "title": "Security and Advanced Development",
    "description": "Venturing into my major specialization with a focus on cybersecurity and advanced development practices.",
    "type": "current"
  }


  ];

  const tabs = [
    { id: 'story', label: 'My Story', icon: '📖' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'journey', label: 'Journey', icon: '🚀' }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-600/5 via-transparent to-blue-600/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Home Button */}
        <div className="absolute top-0 left-0 mb-8">
          <Link to="/">
            <button className="group bg-gray-900/80 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 border border-gray-700 hover:border-cyan-500/50 flex items-center gap-3 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🏠</span>
              <span>Home</span>
            </button>
          </Link>
        </div>

        {/* Header with Personal Info Cards */}
        <div className="text-center mb-16 mt-16">
          <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-gray-700">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent">
            About Me
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {Object.entries(personalInfo).map(([key, value], index) => (
              <div key={key} className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-4 border border-gray-700 hover:bg-gray-800/60 transition-all duration-300 group">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                <div className="text-white font-semibold text-sm group-hover:text-cyan-300 transition-colors">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-2 border border-gray-700">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'story' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-gray-700">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-4xl">👨‍💻</span>
                    Who I Am
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I'm a passionate third-year Computer Science student at KL University, specializing in the fascinating intersection of 
                    <span className="text-cyan-300 font-semibold"> Cybersecurity and Blockchain Technology</span>. 
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    What drives me is the challenge of building secure, innovative solutions that make a real difference. 
                    I believe in the power of ethical hacking and robust development practices to create a safer digital world.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/30">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    My Mission
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    To leverage cutting-edge technology in creating secure, scalable, and user-centric applications 
                    that solve real-world problems while maintaining the highest security standards.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/30">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-6xl shadow-2xl">
                      🛡️
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Security First Mindset</h4>
                    <p className="text-gray-300 text-center">
                      Every line of code I write is crafted with security, performance, and scalability in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-12">
              {/* Technical Skills with Progress Bars */}
              <div className="bg-gray-900/60 backdrop-blur-md rounded-3xl p-8 border border-gray-700">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Proficiency</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {skillsData.technical.map((skill, index) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-cyan-300 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">{skill.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Favorite Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {skillsData.tools.map((tool, index) => (
                    <div key={tool.name} className="bg-gray-800/60 rounded-2xl p-4 text-center hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 group border border-gray-600">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</div>
                      <div className="text-gray-300 text-sm font-medium">{tool.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'journey' && (
            <div className="bg-gray-900/60 backdrop-blur-md rounded-3xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-12 text-center">My Development Journey</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600 hover:bg-gray-700/60 transition-all duration-300">
                          <div className="text-cyan-300 font-bold text-lg mb-2">{item.year}</div>
                          <h4 className="text-white font-semibold text-xl mb-3">{item.title}</h4>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                      
                      {/* Timeline Dot */}
                      <div className="relative z-10 mx-4">
                        <div className={`w-6 h-6 rounded-full border-4 ${
                          item.type === 'current' ? 'bg-cyan-400 border-cyan-300 animate-pulse' :
                          item.type === 'specialization' ? 'bg-cyan-500 border-cyan-300' :
                          item.type === 'skill' ? 'bg-blue-500 border-blue-300' :
                          'bg-teal-500 border-teal-300'
                        }`}></div>
                      </div>
                      
                      <div className="flex-1">
                        {index % 2 !== 0 && <div className="md:w-full"></div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-12 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-gray-400 mb-8 text-lg">Ready to turn ideas into secure, innovative solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                  View My Projects 🚀
                </button>
              </Link>
              <button className="bg-gray-800/60 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-700/60 transition-all duration-300 border border-gray-600">
                Get In Touch 💬
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;