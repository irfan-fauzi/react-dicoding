/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineCloseCircle } from 'react-icons/ai';
import { getInitialData } from '../../utils/sampleNote';
import {
  CardsNotesContents, InputSection, TextMedium, MainContainer, ButtonSmall, Gap, WarningDelete,
} from '..';
import { AppContext } from '../../utils/context/appContex';

function NotesApp() {
  const context = useContext(AppContext);
  const { dbNotArchived, setDbNotArchived } = context.stateDbNotArchived;
  const { dbArchived } = context.stateDbArchived;
  const { isShowForm, setIsShowForm } = context.stateShowForm;
  const { warningDelete } = context.stateWarningDelete;
  const { isShowDetail, setIsShowDetail } = context.stateShowDetail;
  const { value } = context.stateValue;

  useEffect(() => {
    setDbNotArchived(getInitialData());
  }, []);

  return (
    <div className="font-montserrat bg-gray-800 min-h-screen">
      {isShowForm && (
      <InputSection />
      )}
      <Gap className="h-8" />
      <MainContainer>
        <TextMedium caption="Notes" className="text-white text-2xl" />
        <Gap className="h-5" />
        <CardsNotesContents data={dbNotArchived} />
        <Gap className="h-10" />
        <TextMedium caption="archived notes" className="text-white" />
        <Gap className="h-5" />
        <CardsNotesContents data={dbArchived} />
      </MainContainer>
      <Gap className="h-10" />
      <ButtonSmall onClick={() => setIsShowForm(true)} className="bg-gray-700 rounded-full p-4 fixed bottom-5 right-5 ">
        <AiOutlinePlus size={27} color="white" />
      </ButtonSmall>
      {
        warningDelete && (
          <WarningDelete />
        )
      }
      {
        isShowDetail && (
          <article className="bg-gray-900 fixed top-0 min-h-screen w-full px-3">
            <Gap className="h-10" />
            <div className="flex justify-end">
              <ButtonSmall className="text-white" onClick={() => setIsShowDetail(false)}>
                <AiOutlineCloseCircle size={50} />
              </ButtonSmall>
            </div>
            <Gap className="h-8" />
            <section className="h-[400px] lg:overflow-visible lg:h-auto overflow-auto border rounded-xl max-w-screen-lg mx-auto p-5">
              <Gap className="h-4" />
              <TextMedium caption={value.title} className="text-gray-50 text-2xl" />
              <Gap className="h-5" />
              <TextMedium caption={value.body} className="text-gray-50" />
            </section>
          </article>
        )
      }
    </div>
  );
}

export default NotesApp;
