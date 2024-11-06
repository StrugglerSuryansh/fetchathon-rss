import React from 'react';
import { Link } from 'react-router-dom';
import RideForm from '../components/RideForm';
import RideList from '../components/RideList';

function Driver() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <Link to="/" className="text-2xl font-bold text-white">DRide</Link>
        <div className="space-x-4">
          <Link to="/profile" className="text-white hover:text-gray-200">Profile</Link>
          <Link to="/earnings" className="text-white hover:text-gray-200">Earnings</Link>
          <button className="px-4 py-2 text-blue-500 transition bg-white rounded-full hover:bg-gray-100">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl px-4 py-12 mx-auto">
        <div className="p-8 bg-white/10 backdrop-blur-lg rounded-xl">
          <h1 className="mb-8 text-3xl font-bold text-white">Driver Dashboard</h1>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
            <div className="p-6 rounded-lg bg-white/10">
              <h3 className="mb-2 text-lg font-semibold text-gray-200">Today's Earnings</h3>
              <p className="text-3xl font-bold text-white">$150.00</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10">
              <h3 className="mb-2 text-lg font-semibold text-gray-200">Total Rides</h3>
              <p className="text-3xl font-bold text-white">24</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10">
              <h3 className="mb-2 text-lg font-semibold text-gray-200">Rating</h3>
              <p className="text-3xl font-bold text-white">4.9</p>
            </div>
          </div>

          {/* Offer Ride Form */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-white">Offer a Ride</h2>
            <RideForm type="offer" />
          </div>

          {/* Active and Past Rides */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-white">Your Rides</h2>
            <RideList />
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

export default Driver;