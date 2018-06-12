import React from 'react';
import Proptypes from 'prop-types';
import './Option.scss';

const Option = ({ value, title }) => (
  <option value={value} >
    {title}
  </option>
);

Option.propTypes = {
  value: Proptypes.oneOfType([Proptypes.number, Proptypes.string]),
  title: Proptypes.string,
};

Option.defaultProps = {
  value: 0,
  title: '',
};

export default Option;
