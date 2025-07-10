import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to, className = '' }) {
  const navigate = useNavigate();
  const baseClassName = 'text-sm font-semibold text-stone-600 hover:text-stone-800 hover:scale-105 transition-all duration-200 flex items-center gap-2';

  if (to === '-1')
    return (
      <button 
        className={`${baseClassName} ${className}`} 
        onClick={() => navigate(-1)}
      >
        ← Go back
      </button>
    );

  return (
    <Link to={to} className={`${baseClassName} ${className}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
