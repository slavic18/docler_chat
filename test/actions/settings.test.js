import React from 'react';
import assert from 'assert';
import {resetSettings, updateSetting} from "../../src/actions/settings";
import {RESET_SETTINGS, UPDATE_SETTING} from "../../src/constants/settings";

// unit tests for settings actions
describe('Settings actions', () => {
  describe('updateSetting', () => {
    it('should return correct response', () => {
      const settingName = 'test_setting';
      const settingValue = 'test_setting_value';
      const response = updateSetting(settingName, settingValue);
      const expectedResponse = {
        type: UPDATE_SETTING,
        name: settingName,
        value: settingValue,
      };
      assert.deepStrictEqual(response, expectedResponse);
    });
  });

  describe('resetSettings', () => {
    it('should return correct response', () => {
      const response = resetSettings();
      const expectedResponse = {
        type: RESET_SETTINGS
      };
      assert.deepStrictEqual(response, expectedResponse);
    });
  });
});
