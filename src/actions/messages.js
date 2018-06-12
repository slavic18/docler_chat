import {emojify} from 'react-emojione';

// import constants
import {INCREASE_UNREAD_MESSAGES_COUNT, NEW_MESSAGE, RESET_UNREAD_MESSAGES_COUNT} from "../constants/messages";

// import helpers
import {convertPlainTextIntoLinks, getMessageAdditionalParams} from "../helpers/parseString";


const emojifyOptions = {
  style: {
    backgroundImage: 'url("/images/emojione-3.1.2-64x64.png")',
    height: 32,
    margin: 4,
  },
};


let fakeMessageId = 0;

export const newMessage = (message, currentUserName, userCanReadMessages) => {
  const messageId = ++fakeMessageId;

  let updatedMessage = {
    id: messageId,
    date: new Date(),
    ...message,
  };

  const messageText = updatedMessage.message;
  const botUserSentMessage = ' sent a message with content: ';
  const botUserSentMessagePosition = messageText.search(botUserSentMessage);
  // check if received message is sent by current user and also remove Bot message
  if (botUserSentMessagePosition > -1) {
    // split message text
    const userNickName = messageText.slice(0, botUserSentMessagePosition);
    updatedMessage.message = messageText.slice((botUserSentMessage.length + botUserSentMessagePosition));
    const isMe = userNickName === currentUserName;

    updatedMessage.user = userNickName;
    updatedMessage.me = isMe;
  }

  const isUnreadMessage = !userCanReadMessages && !updatedMessage.me;

  // get messages additional params such as message type, image url, video url
  const additionalMessageParams = getMessageAdditionalParams(updatedMessage.message);

  updatedMessage = {...updatedMessage, ...additionalMessageParams};

  // replace smileys with emoji react elements
  updatedMessage.message = emojify(updatedMessage.message, emojifyOptions);

  updatedMessage.message = convertPlainTextIntoLinks(updatedMessage.message);

  return {
    type: NEW_MESSAGE,
    message: updatedMessage,
    isUnreadedMessage: isUnreadMessage
  }
};

export const increaseUnreadMessagesCount = () => ({
  type: INCREASE_UNREAD_MESSAGES_COUNT
});

export const resetUnreadMessagesCount = () => ({
  type: RESET_UNREAD_MESSAGES_COUNT
});
