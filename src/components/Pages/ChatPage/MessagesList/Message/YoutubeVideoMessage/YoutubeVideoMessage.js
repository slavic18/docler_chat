import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './YoutubeVideoMessage.scss';
import Iframe from "../../../../../Controls/Iframe/Iframe";

class YoutubeVideoMessage extends Component {
  render() {
    const {videoUrl, message} = this.props;
    return (
      <React.Fragment>
        {message}
        <Iframe src={videoUrl}/>
      </React.Fragment>
    );
  }
}

YoutubeVideoMessage.propTypes = {
  videoUrl: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};
YoutubeVideoMessage.defaultProps = {
  videoUrl: '',
  message:''
};

export default YoutubeVideoMessage;
