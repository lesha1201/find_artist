import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const HeadingDot = ({ text }) => {
  return (
    <h1 className="heading-dot">
      {text}
      <span className="heading-dot__dot">.</span>
    </h1>
  );
};

HeadingDot.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingDot;
