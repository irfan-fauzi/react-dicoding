/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext } from 'react';
import { CardNoteContent, TextMedium } from '../..';
import { AppContext } from '../../../utils/context/appContex';

function CardsNotesContents({ data }) {
  const context = useContext(AppContext);
  const { colorNote } = context.stateColor;
  return (
    <>
      {data.length ? (
        <section className="grid grid-cards gap-4">
          {data.map((notes) => (
            <CardNoteContent
              key={Math.random()}
              notes={notes}
              randomNumber={Math.floor(Math.random() * colorNote.length)}
            />
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center">
          <img src="empty.png" alt="empty illustration" className="w-[200px]" />
          <TextMedium caption="tidak ada catatan" className="text-gray-700" />
        </div>
      )}
    </>
  );
}

export default CardsNotesContents;
