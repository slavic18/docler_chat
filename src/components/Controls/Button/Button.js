import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import './Button.scss';

const Button = ({title, onClick, disabled, type, name, className, intl}) => {
  const translatedTitle = title.length ? intl.formatMessage({id: title}) : '';
  return (
    <button
      type={type}
      name={name}
      className={`button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {translatedTitle}
    </button>
  );
};


Button.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
};
Button.defaultProps = {
  title: '',
  name: '',
  onClick: () => {
  },
  disabled: false,
  type: 'submit',
  className: '',
};

export default injectIntl(Button);
