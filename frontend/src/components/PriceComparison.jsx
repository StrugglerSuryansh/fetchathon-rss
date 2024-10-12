// src/components/PriceComparison.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookRide } from '../redux/actions'; // For action creators

function PriceComparison() {
  const prices = useSelector(state => state.prices);
  const dispatch = useDispatch();

  const handleBooking = (platform) => {
    dispatch(bookRide(platform));
  };

  return (
    <div>
      <h2>Price Comparison</h2>
      {prices.map((price, index) => (
        <div key={index}>
          <p>{price.platform}: ${price.fare}</p>
          <button onClick={() => handleBooking(price.platform)}>Book</button>
        </div>
      ))}
    </div>
  );
}

export default PriceComparison;