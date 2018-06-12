import {NEW_MESSAGE, RESET_UNREAD_MESSAGES_COUNT} from "../constants/messages";

const initialState = {
  items: [],
  unreadMessagesCount: 0,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [NEW_MESSAGE]: (state, action) => ({
        ...state,
        items: [
          ...state.items,
          action.message
        ],
        unreadMessagesCount: (action.isUnreadedMessage ? state.unreadMessagesCount + 1 : state.unreadMessagesCount)
      }
    ),
    [RESET_UNREAD_MESSAGES_COUNT]: (state, action) => ({
      ...state,
      unreadMessagesCount: 0,
    })
  }
;

export {
  initialState
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
