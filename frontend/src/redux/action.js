// src/redux/actions.js
export const BOOK_RIDE = 'BOOK_RIDE';

export const bookRide = (platform) => {
  return {
    type: BOOK_RIDE,
    payload: platform,
  };
};
