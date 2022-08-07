/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { TextMedium, Gap, MainContainer } from '../components';
import { showFormattedDate } from '../utils/sampleNote';

function Details() {
  const router = useRouter();
  const { query } = router;
  const [data, setData] = useState({});
  useEffect(() => {
    setData(query);
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-gray-600">
        <MainContainer>
          <div className="h-[4rem] flex items-center">
            <TextMedium caption="Detail Notes" className="text-xl text-white" />
          </div>
        </MainContainer>
      </header>
      <main className="flex-1">
        <MainContainer>
          <Gap className="h-10" />
          <TextMedium className="text-3xl text-gray-800" caption={data.title} />
          <Gap className="h-5" />
          <TextMedium className="text-gray-800" caption={showFormattedDate(data.createdAt)} />
          <Gap className="h-5" />
          <TextMedium className="text-gray-800" caption={data.body} />
        </MainContainer>
      </main>
      <footer className="text-white bg-gray-800">
        <MainContainer>
          <div className="flex items-center h-[5rem]">
            <p>nemo molestias eius, eligendi libero architecto?</p>
          </div>
        </MainContainer>
      </footer>
    </div>
  );
}

export default Details;
