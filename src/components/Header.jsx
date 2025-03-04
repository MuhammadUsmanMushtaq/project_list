import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search } from './Search';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center  p-4 bg-green-700 '>
        <img src='/logo.jpg' alt='logo' width={98} />
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
    </header>
  );
};

export default Header;
