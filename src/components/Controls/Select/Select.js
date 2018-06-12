import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';

// import components
import Option from './Option/Option';


// import styles
import './Select.scss';

class Select extends React.Component {
  render() {
    const {
      name,
      defaultValue,
      onChange,
      choices,
      className,
      label,
      intl,
      withEmptyValue
    } = this.props;

    return (

      <div className="form--row">
        <label className="form--row__title">{intl.formatMessage({id: label})}</label>
        <select
          className={`select form--select ${className}`}
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
        >
          {withEmptyValue ? <Option value="" title="Select an option"/> : null}
          {choices.map((item, index) => <Option key={item.value + index} {...item} />)}
        </select>
      </div>
    )
  }
}

Select.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
  withEmptyValue: PropTypes.bool,
  choices: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
  }))
};

Select.defaultProps = {
  label: '',
  onChange: () => {
  },
  name: '',
  className: '',
  withEmptyValue: false,
  choices: [],
};

export default injectIntl(Select);
