// src/components/RideForm.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { comparePrices } from '../redux/actions'; // For action creators
// or if using a slice: import { comparePrices } from '../redux/priceSlice';

function RideForm() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(comparePrices(from, to)); // Dispatching the action
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="From"
                required
            />
            <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="To"
                required
            />
            <button type="submit">Compare Prices</button>
        </form>
    );
}

export default RideForm;
