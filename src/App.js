// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutPage from './pages/AboutSection';
import ProjectSection from './pages/ProjectSection';
import Certifications from './pages/Certifications';
import Footer from './pages/Footer'; // Import Footer

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/certificates" element={<Certifications />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
