import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { useApi } from '../hooks/useApi';

function RideForm({ type }) {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [dateTime, setDateTime] = useState('');
  const { user } = useAppContext();
  const { request, loading, error } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await request('post', '/rides', {
        type,
        origin,
        destination,
        dateTime,
        userId: user.id,
      });
      console.log('Ride created:', result);
      // Handle successful ride creation (e.g., show a success message, update rides list)
    } catch (err) {
      console.error('Error creating ride:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="Origin"
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination"
          required
        />
      </div>
      <div className="mb-6">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
          disabled={loading}
        >
          {type === 'offer' ? 'Offer Ride' : 'Request Ride'}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
    </form>
  );
}

export default RideForm;