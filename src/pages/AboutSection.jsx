import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AboutSection = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const profile = {
    title: "Computer Science Student & Security Enthusiast",
    location: "Vijayawada, India",
    institution: "KL University",
    specialization: "Cybersecurity & Blockchain Technology"
  };

  const expertise = {
    security: [
      { area: "Ethical Hacking Fundamentals", proficiency: "Learning", tools: "Kali Linux, Basic Penetration Testing" },
      { area: "Network Security Basics", proficiency: "Intermediate", tools: "Wireshark, Nmap, Network Analysis" },
      { area: "Web Application Security", proficiency: "Learning", tools: "OWASP Guidelines, Burp Suite Basics" },
      { area: "Cloud Security Concepts", proficiency: "Beginner", tools: "AWS Security Fundamentals" }
    ],
    development: [
      { stack: "Frontend", technologies: "React.js, JavaScript, HTML/CSS", experience: "2+ years" },
      { stack: "Backend", technologies: "Node.js, Python, Django", experience: "2+ years" },
      { stack: "Database", technologies: "PostgreSQL, MongoDB", experience: "1+ years" },
      { stack: "DevOps", technologies: "Docker, Git, Basic CI/CD", experience: "1+ years" }
    ]
  };

  const achievements = [
    {
      period: "2025",
      milestone: "Cybersecurity Specialization Focus",
      description: "Beginning focused study in cybersecurity fundamentals, ethical hacking principles, and security architecture concepts.",
      impact: "Academic Progress"
    },
    {
      period: "2024",
      milestone: "Full-Stack Development Skills",
      description: "Built comprehensive Property Management System using React.js and modern web technologies with security considerations.",
      impact: "Personal Project"
    },
    {
      period: "2024",
      milestone: "Backend Development Foundation",
      description: "Developed solid understanding of Python and Django framework with PostgreSQL database integration.",
      impact: "Academic Project"
    },
    {
      period: "2023",
      milestone: "Programming Fundamentals",
      description: "Established strong foundation in computer science concepts, programming basics, and version control systems.",
      impact: "Academic Foundation"
    }
  ];

  const certifications = [
    "Computer Science Fundamentals",
    "Web Development (Self-taught)",
    "Database Management Basics",
    "Security Awareness Training"
  ];

  const navigation = [
    { id: 'overview', label: 'Overview' },
    { id: 'expertise', label: 'Technical Expertise' },
    { id: 'achievements', label: 'Professional Journey' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Executive Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex justify-between items-start">
            <div>
             <Link to="/">
  <button className="text-gray-400 hover:text-cyan-400 mb-6 flex items-center gap-2 transition-colors">
    <span className="text-sm">🏠</span>
    <span className="text-sm">Home</span>
  </button>
</Link>
              <h1 className="text-4xl font-light text-white mb-2">Professional Profile</h1>
              <p className="text-gray-400">Full Stack Developer with Cybersecurity Focus</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm font-medium">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Profile Summary */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-light text-white mb-6">{profile.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Aspiring cybersecurity professional with strong foundation in full-stack development 
                and emerging expertise in blockchain systems. Currently pursuing advanced studies in security 
                architecture while building practical experience through hands-on projects. Committed to 
                developing secure, scalable applications with robust security implementations.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <span key={index} className="bg-gray-900 text-gray-300 px-4 py-2 rounded-md text-sm border border-gray-800">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-white font-medium mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">Location:</span>
                  <span className="text-gray-300 ml-2">{profile.location}</span>
                </div>
                <div>
                  <span className="text-gray-500">Institution:</span>
                  <span className="text-gray-300 ml-2">{profile.institution}</span>
                </div>
                <div>
                  <span className="text-gray-500">Specialization:</span>
                  <span className="text-cyan-400 ml-2">{profile.specialization}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="border-b border-gray-800 mb-12">
          <div className="flex gap-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`pb-4 text-sm font-medium transition-colors relative ${
                  activeSection === item.id
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Sections */}
        <main>
          {activeSection === 'overview' && (
            <section className="space-y-12">
              <div>
                <h3 className="text-xl font-light text-white mb-6">Core Competencies</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                    <h4 className="text-cyan-400 font-medium mb-4">Security Engineering</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Learning ethical hacking principles and methodologies</li>
                      <li>• Studying network security fundamentals and protocols</li>
                      <li>• Understanding web application security vulnerabilities</li>
                      <li>• Exploring cloud security concepts and best practices</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                    <h4 className="text-cyan-400 font-medium mb-4">Systems Development</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Building full-stack web applications with modern frameworks</li>
                      <li>• Developing RESTful APIs and backend services</li>
                      <li>• Working with relational and NoSQL databases</li>
                      <li>• Learning containerization and deployment practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'expertise' && (
            <section className="space-y-12">
              <div>
                <h3 className="text-xl font-light text-white mb-8">Security Expertise</h3>
                <div className="space-y-4">
                  {expertise.security.map((item, index) => (
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-white font-medium">{item.area}</h4>
                        <span className="text-cyan-400 text-sm">{item.proficiency}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.tools}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light text-white mb-8">Development Stack</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {expertise.development.map((item, index) => (
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-white font-medium">{item.stack}</h4>
                        <span className="text-gray-500 text-sm">{item.experience}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.technologies}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeSection === 'achievements' && (
            <section>
              <h3 className="text-xl font-light text-white mb-8">Professional Milestones</h3>
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-2 border-gray-800 pl-8 relative">
                    <div className="absolute -left-2 top-0 w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-white font-medium text-lg">{achievement.milestone}</h4>
                          <span className="text-cyan-400 text-sm">{achievement.period}</span>
                        </div>
                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-xs">
                          {achievement.impact}
                        </span>
                      </div>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Professional CTA */}
        <section className="mt-16 text-center">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-12">
            <h3 className="text-2xl font-light text-white mb-4">Learning & Growth Opportunities</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Open to discussing security architecture, full-stack development projects, 
              and research collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a
  href="/RESUME.pdf"
  download
>
  <button className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 rounded-md font-medium transition-colors">
    Download Resume
  </button>
</a>

            
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;