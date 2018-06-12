// import constants
import {RESET_SETTINGS, UPDATE_SETTING} from "../constants/settings";

export const updateSetting = (name, value) => {
  return {
    type: UPDATE_SETTING,
    name,
    value,
  }
};

export const resetSettings = () => {
  return {
    type: RESET_SETTINGS
  }
};
