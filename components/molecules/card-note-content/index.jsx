/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import Link from 'next/link';
import { AiOutlineSwap } from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { FiTrash } from 'react-icons/fi';
import { ButtonSmall, Gap, TextMedium } from '../..';
import { AppContext } from '../../../utils/context/appContex';
import { showFormattedDate } from '../../../utils/sampleNote';

function CardNoteContent({ notes, randomNumber }) {
  const context = useContext(AppContext);
  const { colorNote } = context.stateColor;
  const { changeStatusArchived, beforeDelete } = context.action;

  return (
    <article className={`${colorNote[randomNumber]} rounded-2xl p-4 shadow-md`}>
      <Gap className="h-1" />
      <TextMedium className="text-xl font-semibold" caption={notes.title} />
      <Gap className="h-3" />
      <Link
        href={{
          pathname: '/detail',
          query: notes,
        }}
        as="/detail"
      >
        <a>
          <TextMedium caption={notes.body} className="font-medium text-gray-800 line-clamp-4" />
        </a>
      </Link>

      <Gap className="h-3" />
      <TextMedium className="text-xs text-gray-700" caption={showFormattedDate(notes.createdAt)} />
      <Gap className="h-5" />
      <div className="flex w-full justify-between">
        <ButtonSmall
          className="flex px-3 items-center gap-1 rounded-lg bg-white shadow-xl"
          onClick={() => changeStatusArchived(notes)}
        >
          { notes.archived ? <AiOutlineSwap /> : <BsFillJournalBookmarkFill />}
          <TextMedium caption={notes.archived ? 'undo' : 'arsipkan'} className="text-xs" />
        </ButtonSmall>
        <ButtonSmall
          className="flex items-center p-3 gap-1 rounded-lg bg-white shadow-xl"
          onClick={() => beforeDelete(notes)}
        >
          <FiTrash />
          <TextMedium caption="hapus" className="text-xs" />
        </ButtonSmall>
      </div>
      <Gap className="h-2" />
    </article>
  );
}

export default CardNoteContent;
