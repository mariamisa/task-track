import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'antd';

import './style.css';

const CommonInput = ({ handelChange, className, type, ...rest }) => {
  const InputType = type === 'password' ? Input.Password : Input;
  return (
    <InputType
      onChange={handelChange}
      type={type}
      className={className}
      {...rest}
    />
  );
};

CommonInput.propTypes = {
  className: PropTypes.string,
  handelChange: PropTypes.func,
  type: PropTypes.string,
};

CommonInput.defaultProps = {
  className: 'input',
  type: 'text',
  handelChange: () => {},
};

export default CommonInput;
