/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import {
  InputTextMedium, InputTextLarge, ButtonSmall, Gap,
} from '../..';
import { AppContext } from '../../../utils/context/appContex';

function FormInputNote() {
  const context = useContext(AppContext);
  const { setIsShowForm } = context.stateShowForm;
  const { createNote, setInputType } = context.action;
  const { warningMsg, setWarningMsg } = context.stateWarningMsg;
  const { title, setTitle } = context.stateTitle;
  const { content, setContent } = context.stateContent;

  useEffect(() => {
    setWarningMsg('');
  }, []);

  return (
    <div>
      <Gap className="h-5" />
      <div className="flex w-full justify-between">
        <ButtonSmall
          onClick={() => setIsShowForm(false)}
          className="bg-gray-800 p-3 rounded-xl"
        >
          <FiChevronLeft size={20} color="white" />
        </ButtonSmall>
        <ButtonSmall onClick={createNote} className="bg-gray-800 px-6 rounded-xl text-white" title="save" />
      </div>
      <Gap className="h-5" />

      <div className="flex flex-col">
        <div className="flex justify-end">
          <p className={`px-3 text-sm text-red-50 ${title.length > 40 ? 'bg-red-500' : 'bg-green-700'}  w-max rounded-lg`}>{`karakter tersisa ${50 - title.length}`}</p>
        </div>
        <Gap className="h-4" />
        <InputTextMedium
          onChange={(e) => setInputType(e, 50, setTitle)}
          value={title}
          className="bg-gray-800 text-white p-3 rounded-lg text-2xl"
          placeholder="Title"
        />
        <Gap className="h-4" />
        <div className="flex justify-between">
          <p className={`text-white ${warningMsg ? 'bg-red-600' : 'bg-transparent'} rounded-lg text-sm px-3`}>{warningMsg}</p>
          <p className={`px-3 text-sm text-red-50 ${content.length > 90 ? 'bg-red-500' : 'bg-green-700'}  rounded-lg`}>{`karakter tersisa ${90 - content.length}`}</p>
        </div>
        <Gap className="h-3" />
        <InputTextLarge
          onChange={(e) => setInputType(e, 100, setContent)}
          value={content}
          className="bg-gray-800 text-white rounded-lg p-3"
          placeholder="isi notes ..."
        />
        <Gap className="h-4" />

        <p>{warningMsg}</p>
      </div>
      <Gap className="h-3" />

    </div>

  );
}

export default FormInputNote;
