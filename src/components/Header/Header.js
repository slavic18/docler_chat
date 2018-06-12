import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

// import styles
import './Header.scss';

class Header extends React.Component {
  render() {
    const {intl, unreadMessagesCount} = this.props;
    const unreadMessagesClassName = unreadMessagesCount > 0 ? 'nav--link__with--unread--messages' : '';
    return (
      <div className="header">
        <div className="nav--link--container">
          <NavLink
            className={`nav--link ${unreadMessagesClassName}`}
            to={"/chat"}
            activeClassName={"nav--link__active"}>
            {intl.formatMessage({id: 'Chat'})}
            <sup className="unread--messages">{unreadMessagesCount}</sup>
          </NavLink>
          <NavLink
            to={"/settings"}
            className={"nav--link"}
            activeClassName={"nav--link__active"}>
            {intl.formatMessage({id: 'Settings'})}
          </NavLink>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  intl: PropTypes.object,
  unreadMessagesCount: PropTypes.number,
};
Header.defaultProps = {
  intl: {},
  unreadMessagesCount: 0,
};

const mapStateToProps = (state) => ({
  unreadMessagesCount: state.messages.unreadMessagesCount,
});

export default withRouter(connect(mapStateToProps)(injectIntl(Header)));
