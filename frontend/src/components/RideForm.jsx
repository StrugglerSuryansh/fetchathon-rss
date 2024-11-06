import React, { useState } from 'react';

const RideForm = ({ type }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: '1',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="from" className="block mb-2 text-gray-200">From</label>
          <input
            type="text"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white placeholder-gray-400 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter pickup location"
          />
        </div>
        <div>
          <label htmlFor="to" className="block mb-2 text-gray-200">To</label>
          <input
            type="text"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white placeholder-gray-400 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter destination"
          />
        </div>
        <div>
          <label htmlFor="date" className="block mb-2 text-gray-200">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="time" className="block mb-2 text-gray-200">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="seats" className="block mb-2 text-gray-200">Available Seats</label>
          <select
            id="seats"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 text-gray-200">Price per Seat</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white placeholder-gray-400 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price in USD"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full px-8 py-3 font-semibold text-blue-500 transition duration-300 bg-white rounded-full shadow-lg hover:bg-gray-200"
      >
        {type === 'offer' ? 'Offer Ride' : 'Find Ride'}
      </button>
    </form>
  );
};

export default RideForm;