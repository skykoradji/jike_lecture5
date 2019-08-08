import { AUTHENTICATE, DEAUTHENTICATE } from '../types';

const initialState = {
  isAuthenticated: false,
  username: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...action.payload, isAuthenticated: true };
    case DEAUTHENTICATE:
      return { username: null, isAuthenticated: false };
    default:
      return state;
  }
};
