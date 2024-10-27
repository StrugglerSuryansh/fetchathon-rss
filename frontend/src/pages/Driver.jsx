import React from 'react';
import RideForm from '../components/RideForm';
import RideList from '../components/RideList';
// this is a comment
function Driver() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Offer a Ride</h1>
      <RideForm type="offer" />
      <RideList />
    </div>
  );
}

export default Driver;