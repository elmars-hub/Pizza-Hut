import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <div className="card p-4 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🍕</span>
          <div>
            <p className="font-semibold text-stone-800">{name}</p>
            <p className="text-sm text-stone-600">
              Quantity: {quantity}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-gradient">
            {formatCurrency(totalPrice)}
          </p>
          <p className="text-sm text-stone-500">
            {formatCurrency(totalPrice / quantity)} each
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
