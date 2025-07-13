import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <div className="card space-y-3 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🍕</span>
          <div>
            <p className="font-semibold text-stone-800">{name}</p>
            <p className="text-sm text-stone-600">Quantity: {quantity}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gradient text-lg font-bold">
            {formatCurrency(totalPrice)}
          </p>
          <p className="text-sm text-stone-500">
            {formatCurrency(totalPrice / quantity)} each
          </p>
        </div>
      </div>

      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients.join(',')}
      </p>
    </div>
  );
}

export default OrderItem;
