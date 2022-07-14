/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { AppContext } from '../../../utils/context/appContex';
import { TextMedium, Gap, ButtonSmall } from '../..';

function WarningDelete() {
  const context = useContext(AppContext);
  const { value } = context.stateValue;
  const { deleteNote } = context.action;
  const { setWarningDelete } = context.stateWarningDelete;
  const deleteN = () => {
    deleteNote(value);
    setWarningDelete(false);
  };
  return (
    <div className="bg-gray-700  fixed top-0 w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <TextMedium className="text-white capitalize" caption="apakah anda yakin akan menghapus" />
        <TextMedium className="text-white" caption={`"${value.title}" ?`} />
        <Gap className="h-5" />
        <div className="flex gap-5 w-full justify-center">
          <ButtonSmall className="rounded-sm text-xl bg-gray-100 px-10 py-3 hover:bg-red-500 hover:text-white transition-all" onClick={deleteN}>ya</ButtonSmall>
          <ButtonSmall className="rounded-sm text-xl text-white border bg-gray-700 px-10 py-3 hover:bg-white hover:text-black transition-all" onClick={() => setWarningDelete(false)}>tidak</ButtonSmall>
        </div>
      </div>
    </div>
  );
}

export default WarningDelete;
