/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';
import {
  CardsNotesContents, TextMedium, MainContainer, Gap, WarningDelete,
} from '..';
import { AppContext } from '../../utils/context/appContex';

function NotesApp() {
  const context = useContext(AppContext);
  const { dbNotArchived } = context.stateDbNotArchived;
  const { dbArchived } = context.stateDbArchived;
  const { warningDelete } = context.stateWarningDelete;

  return (
    <div className="font-montserrat bg-gray-50 min-h-screen">
      <Gap className="h-8" />
      <MainContainer>
        <TextMedium caption="Notes App" className="text-gray-600 text-2xl" />
        <Gap className="h-5" />
        <CardsNotesContents data={dbNotArchived} />
        <Gap className="h-10" />
        <TextMedium caption="archived notes :" className="text-gray-600 capitalize underline" />
        <Gap className="h-5" />
        <CardsNotesContents data={dbArchived} />
      </MainContainer>
      <Gap className="h-10" />
      <Link href="/form">
        <a className="bg-gray-800 rounded-full p-4 fixed bottom-5 right-5">
          <AiOutlinePlus color="white" />
        </a>
      </Link>
      {
        warningDelete && (
          <WarningDelete />
        )
      }
    </div>
  );
}

export default NotesApp;
