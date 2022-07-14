/* eslint-disable react/button-has-type */

import React from 'react';

function ButtonSmall({
  title, className, onClick, children,
}) {
  return (
    <button className={className} onClick={onClick}>
      {title}
      {children}
    </button>
  );
}

export default ButtonSmall;
