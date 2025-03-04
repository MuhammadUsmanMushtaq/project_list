import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between p-4 bg-green-700 '>
        {/* <h2 className='text-2xl text-white font--bold'>NovoIT</h2> */}
        <img src='public/logo.jpg' alt='logo' width={72} />
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
      <div>
        <h2></h2>
      </div>
    </header>
  );
};

export default Header;
