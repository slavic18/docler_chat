import {combineReducers} from 'redux';
// main reducers
import messages from './messages';
import settings from './settings';

// combine reducers in one object
export const reducers = combineReducers({
  messages,
  settings,
});
