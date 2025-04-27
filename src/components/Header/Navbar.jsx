import { useState } from 'react';
import hamburger from '/src/assets/Menu.svg';
import close from '/src/assets/Close.svg';

const Navbar = () => {
  const [icon, setIcon] = useState(true);

  return (
    <nav>
      <img
        className="hamburger"
        onClick={() => setIcon((prev) => !prev)}
        src={icon ? hamburger : close}
        alt="hamburger"
      />
      {icon ? null : (
        <ul className="menu">
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
      <ul className="menu desktop">
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
