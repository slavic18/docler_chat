import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Iframe.scss';

class Iframe extends Component {
  render() {
    const {src} = this.props;
    if (!src) return null;
    return (
      <div className="container--iframe">
        <iframe className="iframe" src={src} width="100%" height="100%"/>
      </div>
    )
  }
}

Iframe.propTypes = {
  src: PropTypes.string,
};
Iframe.defaultProps = {
  src: ''
};

export default Iframe;
