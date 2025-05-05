import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '/src/assets/icons/Menu.svg';
import close from '/src/assets/icons/Close.svg';

const Navbar = () => {
  const [icon, setIcon] = useState(true);
  const [currentActive, setCurrentActive] = useState(
    localStorage.getItem('activeTab') || 'Portfolio',
  );
  const boxRef = useRef(null);

  const handleLinkClick = (e) => {
    if (boxRef.current) {
      boxRef.current.classList.remove('active');
      setIcon(true);
      localStorage.setItem('activeTab', e.target.innerText);
      setCurrentActive(e.target.innerText);
      document.body.classList.remove('no-scroll');
    }
  };

  return (
    <nav>
      <img
        className="hamburger"
        onClick={() => {
          setIcon((prev) => !prev);
          if (icon) {
            document.body.classList.add('no-scroll');
          } else {
            document.body.classList.remove('no-scroll');
          }
        }}
        src={icon ? hamburger : close}
        alt="hamburger"
      />
      <ul ref={boxRef} className={`menu ${icon ? '' : 'active'}`}>
        <li>
          <Link
            to="/"
            className={currentActive === 'Portfolio' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={currentActive === 'About' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={currentActive === 'Contact' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* <ul className="menu desktop">
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
