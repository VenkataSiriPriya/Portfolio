import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const certifications = [
  {
    title: 'Python Full Stack Development',
    issuer: 'Internshala',
    year: '2024',
    link: 'https://example.com/certificate1',
  },
  {
    title: 'Frontend Development with React.js',
    issuer: 'Coursera',
    year: '2024',
    link: 'https://example.com/certificate2',
  },
  {
    title: 'Git & GitHub Mastery',
    issuer: 'Udemy',
    year: '2023',
    link: 'https://example.com/certificate3',
  },
  {
    title: 'PostgreSQL for Developers',
    issuer: 'Great Learning',
    year: '2024',
    link: 'https://example.com/certificate4',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-black text-white py-20 px-6 min-h-screen">
      {/* Home Button */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex justify-start">
          <a
            href="/"
            className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            ⬅ Home
          </a>
        </div>
      </div>

      {/* Certifications Content */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Certifications 📜
        </h2>
        <p className="text-cyan-300 text-lg mb-12">
          A showcase of my certified accomplishments and learning journeys.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-800 border border-cyan-700 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                {cert.title}
              </h3>
              <p className="text-gray-400 mb-1">
                <span className="font-medium text-white">Issuer:</span> {cert.issuer}
              </p>
              <p className="text-gray-400 mb-4">
                <span className="font-medium text-white">Year:</span> {cert.year}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
