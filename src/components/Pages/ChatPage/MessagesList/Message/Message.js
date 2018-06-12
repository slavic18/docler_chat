import React from 'react';

// import components
import YoutubeVideoMessage from "./YoutubeVideoMessage/YoutubeVideoMessage";
import ImageMessage from "./ImageMessage/ImageMessage";
import MessageTime from './MessageTime/MessageTime';

// import styles
import './Message.scss';

export default class Message extends React.Component {
  renderMessageBasedOnType() {
    const {
      type,
      message
    } = this.props;

    switch (type) {
      case 'youtube':
        return <YoutubeVideoMessage {...this.props}/>;
        break;
      case 'image':
        return <ImageMessage {...this.props}/>;
        break;
      // simple message
      default:
        return message;
    }
  }

  render() {
    const {me, date, user} = this.props;
    const additionalClassName = me ? 'comment--container__me' : 'comment--container__another';

    return (
      <div className="conversation--part">
        <div className={`comment--container ${additionalClassName}`}>
          <div className="comment">
            {this.renderMessageBasedOnType()}
          </div>
          <div className="comment__meta">
            <span className="comment__user">
              {user}
            </span>
            <MessageTime date={date}/>
          </div>
        </div>
      </div>
    )
  }
}
