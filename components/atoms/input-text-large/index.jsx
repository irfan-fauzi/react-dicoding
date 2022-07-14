import React from 'react';

function InputTextLarge({
  onChange, value, className, placeholder,
}) {
  return (
    <textarea name="note-content" id="" cols="50" rows="13" className={className} placeholder={placeholder} onChange={onChange} value={value} />
  );
}

export default InputTextLarge;
