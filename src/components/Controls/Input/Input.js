import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';

import './Input.scss';

class Input extends React.Component {
  renderErrorMessage() {
    const {errorMessage} = this.props;
    if (errorMessage) {
      return (
        <div className="input__error__message">
          {errorMessage}
        </div>
      )
    }
  }

  renderInputFields() {
    const {
      id,
      name,
      type,
      value,
      placeholder,
      inputClass,
      onChange,
      defaultValue,
      required,
      choices,
      intl,
    } = this.props;
    const translatedPlaceHolder = placeholder.length ? intl.formatMessage({id: placeholder}) : '';
    if (type === 'radio' && choices.length > 1) {
      return choices.map((choice, i) => {
          const translatedTitle = choice.title.length ? intl.formatMessage({id: [choice.title]}) : '';
          return (
            <label key={i}>
              <input
                type={type}
                name={name}
                onChange={onChange}
                value={choice.value}
                checked={choice.value === defaultValue}
              />
              <span>{translatedTitle}</span>
            </label>
          )
        }
      )
    }

    // return default input
    return (
      <input
        type={type}
        name={name}
        onChange={onChange}
        id={id}
        className={`form--input ${inputClass}`}
        placeholder={translatedPlaceHolder}
        value={value}
        defaultValue={defaultValue}
        required={required}
      />
    )
  }

  render() {
    const {
      id,
      className,
      errorMessage,
      label,
      intl,
    } = this.props;
    const translatedLabel = label.length ? intl.formatMessage({id: [label]}) : '';
    return (
      <div className={`form--row ${className} ${errorMessage ? ' errorMessage' : ''}`}>
        {
          label && <label className="form--row__title" htmlFor={id}>
            {translatedLabel}
          </label>
        }
        {this.renderInputFields()}
        {this.renderErrorMessage()}
      </div>
    )
  }
}

Input.defaultProps = {
  id: '',
  type: 'text',
  className: '',
  onChange: () => {
  },
  placeholder: '',
  inputClass: '',
  errorMessage: '',
  choices: [],
  label: '',
  value: undefined,
  defaultValue: undefined,
  required: false,
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  choices: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  })),
  type: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
};


export default injectIntl(Input);
