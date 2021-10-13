import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const LayoutPage = ({ children }) => {
  return (
    <>
      <h1>hi from layout page</h1>
    </>
  );
};

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPage;
