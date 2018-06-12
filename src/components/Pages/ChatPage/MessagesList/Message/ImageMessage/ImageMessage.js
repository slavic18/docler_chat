import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ImageMessage.scss';

class ImageMessage extends Component {
  render() {
    const {message, url} = this.props;
    return (
      <React.Fragment>
        {message}
        <div className="message__image">
          <div className="img--container">
            <img src={url}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ImageMessage.propTypes = {
  url: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};
ImageMessage.defaultProps = {
  url: '',
  message:''
};

export default ImageMessage;
