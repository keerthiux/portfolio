import { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
      <ul className="menu desktop">
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
