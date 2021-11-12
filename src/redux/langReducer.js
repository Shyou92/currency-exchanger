import { USER_LANG } from './types';

const initialState = {
  lang: '',
};

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LANG: {
      return { ...state, lang: action.payload };
    }
    default:
      return state;
  }
};
