import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Exemple : composant Home
import About from './pages/About'; // Exemple : composant About
import Contact from './pages/Contact'; // Exemple : composant Contact


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Ajoute des routes supplémentaires ici */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
