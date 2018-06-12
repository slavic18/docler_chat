import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';

// import services
import WebsocketService from "../../../../services/WebsocketService";

// import icons
import SendMessageIcon from '../../../../../public/images/icons/send-message.svg';

// import styles
import './SendMessageForm.scss';


class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.textareaRef = null;
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.textareaRef.focus();
  };

  handleChange = () => {
    const value = this.textareaRef.innerText;
    this.setState({
      message: value
    })
  };

  handleKeyDown = (e) => {
    const {sendMessageOnCtrlEnter} = this.props;
    const ENTER_KEY_CODE = 13;
    const currentKeyCode = (e.keyCode || e.which);
    const isCtrlButtonPressed = e.ctrlKey;
    if (currentKeyCode === ENTER_KEY_CODE && sendMessageOnCtrlEnter && isCtrlButtonPressed) {
      this.handleSubmit(e);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.message.trim();
    if (!value.length) {
      return false;
    }

    this.setState({message: ''});
    this.textareaRef.innerHTML = '';
    this.sendMessage(this.state.message);
  };


  sendMessage = (messageText) => {
    const {currentUserName} = this.props;
    const preparedMessage = {
      user: currentUserName,
      message: messageText,
    };
    WebsocketService.emit(WebsocketService.eventsName.MESSAGE, preparedMessage);
  };

  getTextAreaRef = (el) => {
    this.textareaRef = el;
  };

  /**
   * paste text without formatting
   * @param e {event}
   */
  onPaste = (e) => {
    e.preventDefault();
    try {
      const text = e.clipboardData.getData("text");
      document.execCommand('insertText', false, text);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const {intl} = this.props;
    const {message} = this.state;
    const disabledButtonClassName = !message.length ? 'form__submit--disabled' : '';
    const hasPlaceHolderClassName = !message.length ? 'form__textarea--has-placeholder' : '';
    const translatedTextAreaPlaceholder = intl.formatMessage({id: "Write a message"});
    return (
      <div className="container--form--send--message">
        <form className="form form--send--message" onSubmit={this.handleSubmit}>
          <div className="container--form__textarea">
            <div
              ref={this.getTextAreaRef}
              className={`form__textarea ${hasPlaceHolderClassName}`}
              contentEditable={true}
              placeholder={translatedTextAreaPlaceholder}
              defaultValue={message}
              onKeyUp={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onPaste={this.onPaste}
            />
          </div>
          <button
            className={`form__submit ${disabledButtonClassName}`}
            type="submit"
            onClick={this.handleSubmit}
          >
            <SendMessageIcon/>
          </button>
        </form>
      </div>
    )
  }
}

SendMessageForm.propTypes = {
  currentUserName: PropTypes.string,
  sendMessageOnCtrlEnter: PropTypes.bool,
};
SendMessageForm.defaultProps = {
  currentUserName: '',
  sendMessageOnCtrlEnter: false,
};
export default injectIntl(SendMessageForm);
