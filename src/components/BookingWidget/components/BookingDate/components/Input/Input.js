import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onClick, placeholder, value }) => (
  <input disabled onClick={onClick} placeholder={placeholder} value={value} />
);

Input.defaultProps = {
  placeholder: '',
  value: '',
};

Input.propTypes = {
  onClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
