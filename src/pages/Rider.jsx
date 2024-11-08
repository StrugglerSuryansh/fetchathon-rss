import React from 'react';
import { Link } from 'react-router-dom';
import RideForm from '../components/RideForm';
import RideList from '../components/RideList';

function Rider() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <Link to="/" className="text-2xl font-bold text-white">DRide</Link>
        <div className="space-x-4">
          <Link to="/profile" className="text-white hover:text-gray-200">Profile</Link>
          <button className="px-4 py-2 text-blue-500 transition bg-white rounded-full hover:bg-gray-100">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow max-w-4xl px-4 py-12 mx-auto">
        <div className="p-8 bg-white/10 backdrop-blur-lg rounded-xl">
          
          {/* Heading */}
          <h1 className="mb-6 text-3xl font-bold text-center text-white">Find a Ride</h1>
          
          {/* Ride Request Form */}
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-white">Request a Ride</h2>
            <RideForm type="request" />
          </div>
          
          {/* Available Rides */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Available Rides</h2>
            <RideList />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 mt-auto text-white bg-black/20">
        <div className="max-w-4xl px-4 mx-auto text-center">
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

export default Rider;
