import { useSelector } from 'react-redux';
import { getUser } from './userSlice';

function Username() {
  const username = useSelector(getUser);
  if (!username) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">👤</span>
      <span className="hidden text-sm font-semibold text-stone-800 md:block">
        {username}
      </span>
    </div>
  );
}

export default Username;
