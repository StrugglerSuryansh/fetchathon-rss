import React from 'react';
import RideItem from './RideItem';
import { useAppContext } from '../contexts/AppContext';

function RideList() {
  const { rides } = useAppContext();

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Available Rides</h2>
      {rides.length > 0 ? (
        <div className="space-y-4">
          {rides.map((ride) => <RideItem key={ride.id} ride={ride} />)}
        </div>
      ) : (
        <p className="text-gray-600">No rides available at the moment.</p>
      )}
    </div>
  );
}

export default RideList;