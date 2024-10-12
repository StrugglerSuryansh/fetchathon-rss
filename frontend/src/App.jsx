import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rider from './pages/Rider';
import Driver from './pages/Driver';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rider" element={<Rider />} />
          <Route path="/driver" element={<Driver />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;