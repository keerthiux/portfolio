import logo from '/src/assets/Logo_Web.svg';
import './styles.css';

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
