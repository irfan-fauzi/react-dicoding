import React from 'react';

function InputTextMedium({
  onChange, value, className, placeholder,
}) {
  return (
    <input type="text" className={className} placeholder={placeholder} onChange={onChange} value={value} />
  );
}

export default InputTextMedium;
