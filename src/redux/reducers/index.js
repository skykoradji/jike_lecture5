import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { DEAUTHENTICATE, DEFAULT } from '../types';

const appReducer = combineReducers({
  authentication: authReducer
});

const rootReducer = (state, action) => {
  let currentState = state;
  const currentAction = action;
  if (action.type === DEAUTHENTICATE) {
    currentAction.type = DEFAULT;
    currentState = {};
  }
  return appReducer(currentState, action);
};

export default rootReducer;
