import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import helpers
import {formatDate} from "../../../../../../helpers/date";


// import styles
import './MessageTime.scss';
class MessageTime extends Component {
  render() {
    const {date, timeFormat} = this.props;
    if (!date) {
      return (
        null
      );
    }

    const formatedDateString = formatDate(date, timeFormat);
    return (
      <span className="message__time">
        {formatedDateString}
      </span>
    )
  }
}

MessageTime.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  timeFormat: PropTypes.oneOf(['12', '24']),
};
MessageTime.defaultProps = {
  date: '',
  timeFormat: '24',
};

const mapStateToProps = (state) => {
  return {
    timeFormat: state.settings.clockDisplayFormat,
  }
};

export default connect(mapStateToProps)(MessageTime);
