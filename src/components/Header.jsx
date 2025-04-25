import React from 'react';
import { IoLogoJavascript } from 'react-icons/io';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center  p-4 bg-blue-400 '>
        <IoLogoJavascript color='white' size={48} />
      </nav>
    </header>
  );
};

export default Header;
