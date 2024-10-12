import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

function Header() {
  const { user } = useAppContext();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">RideShare</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/rider" className="hover:text-blue-200">Rider</Link></li>
            <li><Link to="/driver" className="hover:text-blue-200">Driver</Link></li>
          </ul>
        </nav>
        {user ? (
          <span className="bg-blue-500 px-3 py-1 rounded">Welcome, {user.name}</span>
        ) : (
          <span className="bg-blue-500 px-3 py-1 rounded">Please log in</span>
        )}
      </div>
    </header>
  );
}

export default Header;