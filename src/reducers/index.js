import { combineReducers } from 'redux';

import reducerBook from "./reducer-books.js"

import activeReducerBook from "./reducer-active.js"
import userReducer from "./reducer-users.js"

const rootReducer = combineReducers({
  books:reducerBook,
  activeBook:activeReducerBook,
  users:userReducer
});

export default rootReducer;
