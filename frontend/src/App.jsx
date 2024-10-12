// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RideForm from './components/RideForm';
import PriceComparison from './components/PriceComparison';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Ride-Share Price Comparison</h1>
        <RideForm />
        <PriceComparison />
        <BookingConfirmation />
      </div>
    </Provider>
  );
}

export default App;