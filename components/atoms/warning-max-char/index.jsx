import React from 'react';

function WarningMaxChar({ inputTitle, maxChar }) {
  return (
    <p className={`px-3 text-sm text-red-50 ${inputTitle.length > maxChar - 5 ? 'bg-red-500' : 'bg-green-700'}  w-max rounded-lg`}>{`karakter tersisa ${maxChar - inputTitle.length}`}</p>
  );
}

export default WarningMaxChar;
