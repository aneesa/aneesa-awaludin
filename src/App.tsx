// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Components from './pages/Components';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Aneesa Awaludin';
  }, []);

  return (
    <Router basename="/aneesa-awaludin/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </Router>
  );
};

export default App;

