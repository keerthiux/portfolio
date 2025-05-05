import { useState, useEffect } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import './styles.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change "50" to the scroll position you want
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
