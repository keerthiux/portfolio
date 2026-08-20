import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    document.body.classList.remove('no-scroll');
  }, [location.pathname]);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle('no-scroll', next);
      return next;
    });
  };

  return (
    <nav>
      <button
        className={`hamburger ${open ? 'active' : ''}`}
        onClick={toggle}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span />
        <span />
      </button>
      <ul ref={boxRef} className={`menu ${open ? 'active' : ''}`}>
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={location.pathname === link.to ? 'active' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="menu-cta">
          <a
            href="https://wa.me/919618670515?text=Hi%20Keerthi%2C%20I%27d%20like%20to%20get%20in%20touch!"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-cta-link"
          >
            Say hello
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
