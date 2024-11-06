import React from 'react';
import { Link } from 'react-router-dom';
import { Feature } from '../components/Feature';

function Home() {
  const roleFeatures = [
    {
      icon: '🚗',
      title: 'For Riders',
      description: 'Find secure, affordable rides with transparent pricing and verified drivers.'
    },
    {
      icon: '💼',
      title: 'For Drivers',
      description: 'Earn more with lower fees, flexible schedules, and direct payments.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <Link to="/" className="text-2xl font-bold text-white">DRide</Link>
        <div className="space-x-4">
          <Link to="/profile" className="text-white hover:text-gray-200">Profile</Link>
          <Link to="/settings" className="text-white hover:text-gray-200">Settings</Link>
          <button className="px-4 py-2 text-blue-500 transition bg-white rounded-full hover:bg-gray-100">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl px-4 py-16 mx-auto">
        <div className="mb-16 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-fade-in">
            Welcome to DRide
          </h1>
          <p className="max-w-2xl mx-auto mb-12 text-xl md:text-2xl">
            Choose your role and start experiencing decentralized ride sharing
          </p>

          {/* Role Selection Cards */}
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mb-16 md:grid-cols-2">
            {roleFeatures.map((role, index) => (
              <div key={index} className="group">
                <Link
                  to={role.title.includes('Riders') ? '/rider' : '/driver'}
                  className="block h-full"
                >
                  <div className="p-8 transition duration-300 transform bg-white/10 backdrop-blur-lg rounded-xl hover:scale-105 hover:bg-white/20">
                    <span className="block mb-4 text-5xl">{role.icon}</span>
                    <h3 className="mb-4 text-2xl font-bold">{role.title}</h3>
                    <p className="mb-6 text-gray-200">{role.description}</p>
                    <button className="px-8 py-3 font-semibold text-blue-500 transition duration-300 bg-white rounded-full shadow-lg hover:bg-gray-200">
                      Get Started
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
              <div className="mb-2 text-4xl font-bold">10K+</div>
              <div className="text-gray-200">Active Users</div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
              <div className="mb-2 text-4xl font-bold">50K+</div>
              <div className="text-gray-200">Completed Rides</div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
              <div className="mb-2 text-4xl font-bold">4.9/5</div>
              <div className="text-gray-200">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 mt-auto text-white bg-black/20">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <p className="text-gray-300">
            © 2024 DRide. Building the future of decentralized transportation.
          </p>
          <div className="mt-4 space-x-4">
            <Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white">Terms</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;