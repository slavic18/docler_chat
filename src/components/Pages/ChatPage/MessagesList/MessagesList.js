import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import components
import Message from './Message/Message';

// import styles
import './MessagesList.scss';

class MessagesList extends React.Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const messagesContainerNode = this.chatContainerRef.firstChild;
    this.chatContainerRef.scrollTop = messagesContainerNode.scrollHeight;
  }

  render() {
    return (
      <div className="container--chat--messages">
        <div className="chat--messages" ref={(el) => this.chatContainerRef = el}>
          <ReactCSSTransitionGroup
            component="div"
            className="chat--messages__animated-list"
            transitionName="messages--list--animation"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.props.messages.map((item, i) => <Message key={i} {...item}/>)}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

MessagesList.propTypes = {
  messages: PropTypes.array,
};

MessagesList.defaultProps = {
  messages: [],
};

export default MessagesList;
