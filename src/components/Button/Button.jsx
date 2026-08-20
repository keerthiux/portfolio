import './button.css';

const Button = ({
  fill = true,
  children,
  type = 'button',
  href,
  target,
  download,
  onClick,
  disabled,
  className = '',
}) => {
  const classes = `button ${fill ? 'button-fill' : 'button-ghost'} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target ? 'noopener noreferrer' : undefined}
        download={download}
        className={classes}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
