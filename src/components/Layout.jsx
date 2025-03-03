import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <nav className='p-4 bg-green-600'>
        <h2 className='text-2xl text-white font--bold'>NovoIT</h2>
      </nav>

      <main>{children}</main>
    </>
  );
};

export default Layout;
