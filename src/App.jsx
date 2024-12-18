import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rider from './pages/Rider';
import Driver from './pages/Driver';
import LandingPage from './pages/LandingPage';
import LearnMore from './pages/LearnMore';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
// This is my comment (Hirdesh)

function App() {
  return (
    <Router>
      <div className="App">
        {/* Public Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/rider" element={<Rider />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;