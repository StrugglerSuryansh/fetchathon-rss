import React from 'react';
import RideForm from '../components/RideForm';
import RideList from '../components/RideList';

function Rider() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="mb-6 text-3xl font-bold">Find a Ride</h1>
      <RideForm type="request" />
      <RideList />
    </div>
  );
}

export default Rider;