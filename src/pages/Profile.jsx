import React from 'react';
import { User, Star, Car, Clock } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">DRide</h1>
          <div className="space-x-4">
            <a href="/dashboard" className="text-gray-600 hover:text-blue-600 transition duration-200">Dashboard</a>
            <a href="/earnings" className="text-gray-600 hover:text-blue-600 transition duration-200">Earnings</a>
            <button className="text-gray-600 hover:text-blue-600 transition duration-200">Logout</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg border border-gray-100">
          <div className="p-6">
            {/* Profile Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-sm">
                <User size={48} className="text-gray-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">XYZ</h2>
                <p className="text-gray-600">Driver since January 2024</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition duration-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="text-yellow-500" />
                  <span className="font-semibold text-gray-700">Rating</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">4.9</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition duration-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Car className="text-blue-500" />
                  <span className="font-semibold text-gray-700">Total Rides</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">324</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition duration-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="text-green-500" />
                  <span className="font-semibold text-gray-700">Hours Online</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200">
                Vehicle Information
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-600 text-sm">Make/Model</p>
                  <p className="font-medium text-gray-900 mt-1">Toyota Camry</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-600 text-sm">Year</p>
                  <p className="font-medium text-gray-900 mt-1">2020</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-600 text-sm">License Plate</p>
                  <p className="font-medium text-gray-900 mt-1">ABC 123</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-600 text-sm">Color</p>
                  <p className="font-medium text-gray-900 mt-1">Silver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;