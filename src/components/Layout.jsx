import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='p-4 '>{children}</main>
      <footer className='flex flex-col text-sm text-center border-t p-2 '>
        <span>ALL RIGHTS RESERVED</span>
        <span>NOVO IT</span>
      </footer>
    </>
  );
};

export default Layout;
