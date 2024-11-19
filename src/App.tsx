// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Components from './pages/Components';
import Button from './components/atoms/Button';

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Dark Mode Toggle Button */}
      <Button label="Toggle Dark Mode" onClick={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </Router>
  );
};

export default App;

