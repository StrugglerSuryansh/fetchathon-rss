import React from 'react';

const RideList = () => {
  const rides = [
    {
      id: 1,
      from: 'San Francisco, CA',
      to: 'Los Angeles, CA',
      date: '2024-01-20',
      time: '09:00',
      seats: 3,
      price: 45,
      status: 'active'
    },
    {
      id: 2,
      from: 'San Jose, CA',
      to: 'Sacramento, CA',
      date: '2024-01-22',
      time: '14:00',
      seats: 2,
      price: 35,
      status: 'pending'
    }
  ];

  return (
    <div className="space-y-4">
      {rides.map(ride => (
        <div
          key={ride.id}
          className="p-6 transition duration-300 rounded-lg bg-white/10 hover:bg-white/20"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {ride.from} → {ride.to}
              </h3>
              <p className="text-gray-200">
                {new Date(ride.date).toLocaleDateString()} at {ride.time}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              ride.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
            }`}>
              {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-200">
            <div>
              <span className="mr-4">{ride.seats} seats available</span>
              <span>${ride.price} per seat</span>
            </div>
            <button className="px-4 py-2 text-white transition rounded-lg bg-white/10 hover:bg-white/20">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RideList;