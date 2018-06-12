import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// import actions
import {resetUnreadMessagesCount} from "../../../actions/messages";

// import components
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import MessagesList from "./MessagesList/MessagesList";

// import styles
import './ChatPage.scss';

class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    props.resetUnreadMessagesCount();
  }
  render() {
    const {
      messages,
      currentUserName,
      canSendMessageOnCtrlEnter
    } = this.props;
    return (
      <div className="page page--chat">
        <MessagesList messages={messages}/>
        <SendMessageForm
          currentUserName={currentUserName}
          onSubmit={this.sendMessage}
          sendMessageOnCtrlEnter={canSendMessageOnCtrlEnter}
        />
      </div>
    )
  }
}

ChatPage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  })),
  currentUserName: PropTypes.string,
  canSendMessageOnCtrlEnter: PropTypes.bool,
};

ChatPage.defaultProps = {
  messages: [],
  currentUserName: '',
  canSendMessageOnCtrlEnter: false,
};

const mapStateToProps = (state) => ({
  messages: state.messages.items,
  currentUserName: state.settings.currentUserName,
  canSendMessageOnCtrlEnter: state.settings.sendMessageOnCtrlEnter === 'on',
});


const mapDispatchToProps = dispatch => ({
  resetUnreadMessagesCount: () => dispatch(resetUnreadMessagesCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
