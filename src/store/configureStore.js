import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import patients from '../reducers/patients';
import searchTerm from '../reducers/searchTerm';

const loggerMiddleware = createLogger();
const reducer = combineReducers({ patients, searchTerm });

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
