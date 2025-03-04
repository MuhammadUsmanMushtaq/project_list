import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search } from './Search';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center  p-4 bg-green-700 '>
        {/* <h2 className='text-2xl text-white font--bold'>NovoIT</h2> */}
        <img src='public/logo.jpg' alt='logo' width={98} />
        <ul className='flex gap-4 text-white'>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 '
                  : 'hover:text-green-300 hover'
              }
              to='/'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 '
                  : 'hover:text-green-300 hover'
              }
              to='/invoices'
            >
              Invoices
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <div className='p-8 bg-green-700  flex justify-center '>
        <h2 className='text-white text-center text-4xl w-[640px] tracking-wider'>
          Simplifying project tracking with clear financial reporting and
          accurate invoicing.
        </h2>
      </div> */}
    </header>
  );
};

export default Header;
