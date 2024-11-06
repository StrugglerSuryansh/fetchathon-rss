import React from 'react';

export const TeamMember = ({ image, name, role, description }) => {
  return (
    <div className="flex flex-col items-center p-6 transition duration-300 transform bg-white/10 backdrop-blur-lg rounded-xl hover:scale-105">
      <img 
        src={image} 
        alt={name} 
        className="object-cover w-32 h-32 mb-4 border-4 rounded-full border-white/20"
      />
      <h3 className="mb-2 text-xl font-semibold text-white">{name}</h3>
      <p className="mb-3 text-blue-200">{role}</p>
      <p className="text-sm text-center text-gray-200">{description}</p>
    </div>
  );
}