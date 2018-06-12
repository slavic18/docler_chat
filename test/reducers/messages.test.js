import React from 'react';
import assert from 'assert';

import reducer, {initialState} from './../../src/reducers/messages';
import {NEW_MESSAGE, RESET_UNREAD_MESSAGES_COUNT} from "../../src/constants/messages";
import {newMessage, resetUnreadMessagesCount} from "../../src/actions/messages";
// unit tests for messages reducer
describe('Messages reducer', () => {
  it('should return the initial state', () => {
    assert.deepStrictEqual(reducer(undefined, {}), initialState);
  });

  it(`should handle ${RESET_UNREAD_MESSAGES_COUNT}`, () => {
    const action = resetUnreadMessagesCount();
    assert.deepStrictEqual(reducer({
      unreadMessagesCount: 10,
    }, action).unreadMessagesCount, 0);
  });

  it(`should handle ${NEW_MESSAGE}`, () => {
    const action = newMessage({
      user: 'test',
      message:'test',
    }, 'test123', false);
    assert.deepStrictEqual(reducer(undefined, action).items.length, 1);
  });
});
