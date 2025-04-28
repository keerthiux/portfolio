import './button.css';

const Button = ({ fill = false, children, type = 'button' }) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};

export default Button;
