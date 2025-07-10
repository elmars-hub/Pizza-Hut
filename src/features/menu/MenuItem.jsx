import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  return (
    <div className="card p-2 hover:scale-95 transition-all duration-300 group">
      <div className="relative mb-4">
        <img
          src={imageUrl}
          alt={name}
          className={`w-full h-48 object-cover rounded-xl ${
            soldOut ? 'opacity-50 grayscale' : 'group-hover:scale-105 transition-transform duration-300'
          }`}
        />
        {soldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-900/50 rounded-xl">
            <span className="badge-error text-lg font-bold">SOLD OUT</span>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold text-stone-800 mb-2">{name}</h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            {ingredients.join(', ')}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            {formatCurrency(unitPrice)}
          </div>

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              🍕 Add to Cart
            </Button>
          )}

          {isInCart && (
            <div className="flex items-center gap-3">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
