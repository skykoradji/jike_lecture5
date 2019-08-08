import { AUTHENTICATE, DEAUTHENTICATE } from '../types';


// gets the token from the cookie and saves it in the store
const authenticate = (isAuthenticated, username) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, payload: { isAuthenticated, username } });
  };
};

// removing the token
const deauthenticate = () => {
  return async dispatch => {
    dispatch({ type: DEAUTHENTICATE });
  };
};

export default {
  authenticate,
  deauthenticate
};
