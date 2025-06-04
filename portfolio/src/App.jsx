import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Para rutas
import './App.css';

function App({ currentTheme, setCurrentTheme }) {
  return (
    <Router>
      <div className="app">
        <Header theme={currentTheme} setTheme={setCurrentTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;