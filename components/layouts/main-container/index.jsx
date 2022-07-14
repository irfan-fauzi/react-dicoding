import React from 'react';

function MainContainer({ children }) {
  return (
    <section className="max-w-screen-lg mx-auto px-3">
      {children}
    </section>
  );
}

export default MainContainer;
