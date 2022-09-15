import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Game from './pages/Game';
import Home from './pages/Home';
import Pairs from './pages/Pairs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pairs" element={<Pairs />} />
        {/* Le path="*" fonctionne si jamais l'url ne correspond à rien de déclaré ci-dessus */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;