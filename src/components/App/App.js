import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import WebsocketService from "../../services/WebsocketService";
import Header from "../Header/Header";
import {increaseUnreadMessagesCount, newMessage} from "../../actions/messages";

import './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.initSocketListeners();
  }

  /**
   * init socket listeners
   * @method
   * @return {void}
   */
  initSocketListeners() {
    const {receiveMessage} = this.props;
    WebsocketService.init();
    WebsocketService.listen(WebsocketService.eventsName.MESSAGE, (message) => {
      const {currentUserName} = this.props;
      const userCanReadMessages = this.userCanReadMessages();

      // dispatch new message action
      receiveMessage(message, currentUserName, userCanReadMessages);
    });
  }

  /**
   * check if user can read messages
   * @method
   * @return {boolean}
   */
  userCanReadMessages() {
    return this.isCurrentPageChat();
  }

  /**
   * check if is current page chat
   * @method
   * @return {boolean}
   */
  isCurrentPageChat() {
    const {location: {pathname}} = this.props;
    return pathname === '/chat';
  }


  render() {
    const {theme, children} = this.props;
    return (
      <div className={`app--container theme--${theme}`}>
        <Header/>
        <div className="page--content">
          {children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUserName: state.settings.currentUserName,
  theme: state.settings.interfaceColor,
});

const mapDispatchToProps = dispatch => ({
  receiveMessage: (message, currentUserName, userCanReadMessages) =>
    dispatch(newMessage(message, currentUserName, userCanReadMessages)),
});

App.propTypes = {
  children: PropTypes.node,
  currentUserName: PropTypes.string,
  theme: PropTypes.string,
};
App.defaultProps = {
  children: null,
  currentUserName: '',
  theme: '',
};
export {
  App
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
