// src/components/ContactSection.jsx
import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-black py-16 px-6 text-center">
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Get in Touch
      </h2>
      <p className="text-cyan-300 text-lg mb-10">
        Let’s connect — whether it’s to collaborate or just say hello!
      </p>

      <div className="flex justify-center gap-6">
        {/* Email */}
        <a
          href="mailto:2300030401@kluniversity.in"
          className="text-white hover:text-cyan-400 text-2xl transition duration-300"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/venkata-siripriya-m-710142281/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 text-2xl transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 text-2xl transition duration-300"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
