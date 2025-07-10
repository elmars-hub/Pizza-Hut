import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="glass border-t border-stone-200/50 px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🛒</span>
            <span className="font-semibold text-stone-800 text-sm sm:text-base">
              {totalCartQuantity} {totalCartQuantity === 1 ? 'pizza' : 'pizzas'}
            </span>
          </div>
          <div className="text-base sm:text-lg font-bold text-gradient">
            {formatCurrency(totalCartPrice)}
          </div>
        </div>
        
        <Link 
          to="/cart" 
          className="btn-primary text-xs sm:text-sm px-4 sm:px-6 py-2 hover:scale-105 transition-transform duration-200 w-full sm:w-auto text-center"
        >
          Open Cart →
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
