import React from 'react';
import RideForm from '../components/RideForm';
import RideList from '../components/RideList';

function Driver() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Offer a Ride</h1>
      <RideForm type="offer" />
      <RideList />
    </div>
  );
}

export default Driver;