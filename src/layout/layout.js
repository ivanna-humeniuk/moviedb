import React, { useState, useEffect } from 'react';

const Layout = (props) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <header>header</header>
      <main>Main</main>
    </>
  );
};

export default Layout;
