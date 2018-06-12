import React from 'react';
import assert from 'assert';
import {increaseUnreadMessagesCount, newMessage, resetUnreadMessagesCount} from "../../src/actions/messages";
import {INCREASE_UNREAD_MESSAGES_COUNT, NEW_MESSAGE, RESET_UNREAD_MESSAGES_COUNT} from "../../src/constants/messages";
// unit tests for messages actions
describe('Messages actions', () => {
  describe('newMessage', () => {
    it('should return correct response', () => {
      const messageDate = new Date();
      const response = newMessage({
        date: messageDate,
        user: 'test123',
        message: 'test'
      }, 'test', true);

      const expectedResponse = {
        type: NEW_MESSAGE,
        isUnreadedMessage: false,
        message: {
          id: 1,
          user: 'test123',
          date: messageDate,
          message: ['test'],
          type: "simple"
        }
      };
      assert.deepStrictEqual(response, expectedResponse);
    });
  });

  describe('increaseUnreadMessagesCount', () => {
    it('should return correct response', () => {
      const response = increaseUnreadMessagesCount();
      const expectedResponse = {
        type: INCREASE_UNREAD_MESSAGES_COUNT
      };
      assert.deepStrictEqual(response, expectedResponse);
    });
  });

  describe('resetUnreadMessagesCount', () => {
    it('should return correct response', () => {
      const response = resetUnreadMessagesCount();
      const expectedResponse = {
        type: RESET_UNREAD_MESSAGES_COUNT
      };
      assert.deepStrictEqual(response, expectedResponse);
    });
  });
});
