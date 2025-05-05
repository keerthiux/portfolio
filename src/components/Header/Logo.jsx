import { Link } from 'react-router-dom';
import logo from '/src/assets/icons/Logo_Web.svg';
import './styles.css';

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
