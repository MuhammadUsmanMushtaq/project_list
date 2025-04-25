import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='p-4 '>{children}</main>
      <footer className='flex flex-col text-sm text-center border-t p-8 bg-blue-400 text-white'>
        <span>MUHAMMAD USMAN</span>
      </footer>
    </>
  );
};

export default Layout;
