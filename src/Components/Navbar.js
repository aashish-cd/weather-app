import React from 'react';

const Navbar = () => {
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          {navLinks.map(({ name, path }, index) => (
            <a key={index} className='mr-5 hover:text-gray-900' href={path}>
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Weather',
    path: '/weather',
  },
];

export default Navbar;
