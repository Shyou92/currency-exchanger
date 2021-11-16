import { FETCH_DATA } from './types';

const initialState = {
  currency: [],
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, currency: action.payload };
    default:
      return state;
  }
};
