import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import './styles.css';

const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
