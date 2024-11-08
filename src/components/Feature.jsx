import React from 'react';

export const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl">
      <span className="mb-4 text-4xl">{icon}</span>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-center text-gray-200">{description}</p>
    </div>
  );
}