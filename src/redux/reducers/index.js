import { combineReducers } from 'redux';
import todos from './todosReducer';
import filters from './filtersReducer';

export default combineReducers({
  todos,
  filters
});