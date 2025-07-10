import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="card p-3 sm:p-4 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <div className="flex-1">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <span className="text-xl sm:text-2xl">🍕</span>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-stone-800 text-sm sm:text-base truncate">{name}</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Quantity: {quantity}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
          <div className="text-right">
            <p className="text-base sm:text-lg font-bold text-gradient">
              {formatCurrency(totalPrice)}
            </p>
            <p className="text-xs sm:text-sm text-stone-500">
              {formatCurrency(totalPrice / quantity)} each
            </p>
          </div>

          <div className="flex items-center gap-2">
            <UpdateItemQuantity
              pizzaId={pizzaId}
              currentQuantity={currentQuantity}
            />
            <DeleteItem pizzaId={pizzaId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
