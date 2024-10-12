// src/redux/priceSlice.js

import { createSlice } from '@reduxjs/toolkit';

const priceSlice = createSlice({
    name: 'prices',
    initialState: {
        from: '',
        to: '',
    },
    reducers: {
        comparePrices(state, action) {
            state.from = action.payload.from;
            state.to = action.payload.to;
        },
    },
});

export const { comparePrices } = priceSlice.actions;
export default priceSlice.reducer;
