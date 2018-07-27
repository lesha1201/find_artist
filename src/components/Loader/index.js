import React from 'react';

import './styles.scss';

const Loader = () => {
  return (
    <div className="pulse-loader">
      <div className="pulse-loader__circle pulse-loader__circle--01" />
      <div className="pulse-loader__circle pulse-loader__circle--02" />
    </div>
  );
};

export default Loader;
