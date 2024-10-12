import React from 'react';
import RideForm from '../components/RideForm';
import RideList from '../components/RideList';

function Rider() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Find a Ride</h1>
      <RideForm type="request" />
      <RideList />
    </div>
  );
}

export default Rider;