// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Actors from './components/Actors';
import Films from './components/Films';
import Reach from './components/Reach us';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/films" element={<Films />} />
          <Route path="/reach us" element={<Reach us />} /> {/* New route for Series component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
