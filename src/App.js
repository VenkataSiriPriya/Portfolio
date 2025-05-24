// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutPage from './pages/AboutSection'; // Create this page
import ProjectSection from './pages/ProjectSection';
import Certifications from './pages/Certifications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectSection />} />
         <Route path="/certificates" element={<Certifications />} />
      </Routes>
    </Router>
  );
}

export default App;
