import React from 'react';
import assert from 'assert';

import reducer, {initialState} from './../../src/reducers/settings';
import {UPDATE_SETTING, RESET_SETTINGS} from "../../src/constants/settings";
import {updateSetting, resetSettings} from "../../src/actions/settings";
// unit tests for settings reducer
describe('Settings reducer', () => {
  it('should return the initial state', () => {
    assert.deepStrictEqual(reducer(undefined, {}), initialState);
  });

  it(`should handle ${UPDATE_SETTING}`, () => {
    const settingName = 'test';
    const settingValue = 'test12312312';
    const action = updateSetting(settingName, settingValue);
    assert.deepStrictEqual(reducer(undefined, action)[settingName], settingValue);
  });

  it(`should handle ${RESET_SETTINGS}`, () => {

    const settingName = 'test';
    const settingValue = 'test12312312';
    const updateSettingsAction = updateSetting(settingName, settingValue);
    reducer(undefined, updateSettingsAction);

    const resetSettingsAction = resetSettings();
    assert.deepStrictEqual(reducer(undefined, resetSettingsAction), initialState);
  });
});
