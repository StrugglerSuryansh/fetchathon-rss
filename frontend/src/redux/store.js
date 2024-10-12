// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import priceReducer from './priceSlice';

const store = configureStore({
    reducer: {
        prices: priceReducer,
    },
});

export default store;
