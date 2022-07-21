/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { FormInputNote } from '../..';
import { AppContext } from '../../../utils/context/appContex';

function InputSection() {
  return (
    <section className="bg-gray-900 w-full h-full  p-3  fixed m-auto z-10">
      <FormInputNote />
    </section>
  );
}

export default InputSection;
