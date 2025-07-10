import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick, icon, className = '' }) {
  const baseStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    small: 'btn-small',
    round: 'btn-round',
  };

  const buttonClass = `${baseStyles[type] || baseStyles.primary} ${className}`;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (to)
    return (
      <Link to={to} className={buttonClass}>
        {content}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={buttonClass}>
        {content}
      </button>
    );

  return (
    <button disabled={disabled} className={buttonClass}>
      {content}
    </button>
  );
}

export default Button;
