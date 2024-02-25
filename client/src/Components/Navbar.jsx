import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const location = useLocation();
  const pages = [
    { text: 'Home', path: '/freelancehome' },
    { text: 'Categories', path: '/categories' },
    { text: 'My Profile', path: '/profile' },
    isUserSignedIn ? { text: 'My Profile', path: '/profile' } : { text: 'Sign In', path: '/signin' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const logoStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  };

  const menuIconStyle = {
    cursor: 'pointer',
  };

  return (
    <nav className="bg-blue-500 p-4" style={{ backgroundColor: '#0F4C75' }}>
      <div className="container mx-auto flex justify-between items-center">
      <div style={logoStyle}>
  <Link to="/" className="font-poppins text-white">
    <span className="font-bold">Work</span>
    <span className="font-bold font-poppins text-blue-400">Wagon</span>
  </Link>
</div>
        <div className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <Link
              key={page.text}
              to={page.path}
              className={`text-white text-lg font-poppins ${location.pathname === page.path ? 'font-semibold' : ''}`}
            >
              {page.text}
            </Link>
          ))}
        </div>
        <div className="md:hidden" style={menuIconStyle}>
          {isMobileMenuOpen ? (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMobileMenu}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMobileMenu}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden text-white mt-4`}
      >
        {pages.map((page) => (
          <Link
            key={page.text}
            to={page.path}
            className={`block px-4 py-2 hover:font-semibold text-lg font-poppins ${location.pathname === page.path ? 'font-semibold' : ''}`}
          >
            {page.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
