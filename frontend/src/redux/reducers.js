const initialState = {
    prices: [],
    booking: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRICES':
        return { ...state, prices: action.payload };
      case 'SET_BOOKING':
        return { ...state, booking: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;