// import helpers
import Storage from './../helpers/localStorage';

// import constants
import {RESET_SETTINGS, STORAGE_SETTINGS_FIELD, UPDATE_SETTING} from "../constants/settings";

const initialState = {
  currentUserName: 'Guest10001',
  interfaceColor: 'light',
  clockDisplayFormat: '12', // can be 12 or 24
  sendMessageOnCtrlEnter: 'off',
  language: 'en',
};

const lsSavedSettings = Storage.get(STORAGE_SETTINGS_FIELD);
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_SETTING]: (state, action) => {
    const updatedStore = {
      ...state,
      [action.name]: action.value,
    };

    Storage.set(STORAGE_SETTINGS_FIELD, updatedStore);

    return updatedStore;
  },
  [RESET_SETTINGS]: () => {
    Storage.remove(STORAGE_SETTINGS_FIELD);
    return initialState;
  },
};

export {
  initialState
};
// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = (lsSavedSettings || initialState), action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
