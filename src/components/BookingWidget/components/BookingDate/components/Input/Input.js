import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({ onClick, placeholder, value }) => (
  <input className="booking-date__field" onClick={onClick} placeholder={placeholder} readOnly value={value} />
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
