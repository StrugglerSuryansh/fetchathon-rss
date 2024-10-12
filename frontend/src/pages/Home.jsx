import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Decentralized Ride Sharing</h1>
      <p className="text-xl mb-8">Choose your role:</p>
      <div className="space-x-4">
        <Link to="/rider" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
          I'm a Rider
        </Link>
        <Link to="/driver" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
          I'm a Driver
        </Link>
      </div>
    </div>
  );
}

export default Home;