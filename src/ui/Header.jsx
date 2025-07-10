import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="glass border-b border-stone-200/50 px-4 py-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
        >
          <span className="text-3xl">🍕</span>
          <span className="tracking-wider">Pizza Hut</span>
        </Link>

        <div className="flex items-center gap-4">
          <SearchOrder />
          <Username />
        </div>
      </div>
    </header>
  );
}

export default Header;
