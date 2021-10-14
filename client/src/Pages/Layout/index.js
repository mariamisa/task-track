/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const LayoutPage = ({ children }) => (
  <>
    <h1>hi from layout page</h1>
    {children}
  </>
);

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPage;
