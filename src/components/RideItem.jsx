import React from 'react';

function RideItem({ ride }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">
        {ride.type === 'offer' ? 'Ride Offer' : 'Ride Request'}
      </h3>
      <p className="text-gray-600 mb-1">From: {ride.origin}</p>
      <p className="text-gray-600 mb-1">To: {ride.destination}</p>
      <p className="text-gray-600 mb-3">
        Date & Time: {new Date(ride.dateTime).toLocaleString()}
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Contact {ride.type === 'offer' ? 'Driver' : 'Rider'}
      </button>
    </div>
  );
}

export default RideItem;