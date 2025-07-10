import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { getCart, clearCart } from './cartSlice';
import { getUser } from '../user/userSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  const username = useSelector(getUser);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <LinkButton to="/menu" className="mb-4 sm:mb-6">
            ← Back to Menu
          </LinkButton>

          <div className="card p-4 sm:p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-2">
              Your Cart, {username} 🛒
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Review your order before checkout
            </p>
          </div>
        </div>

        <div className="card p-3 sm:p-6 mb-4 sm:mb-6">
          <ul className="space-y-3 sm:space-y-4">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>
        </div>

        <div className="card p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button to="/order/new" type="primary" className="flex-1 order-2 sm:order-1">
              🚀 Order Pizzas
            </Button>
            <Button type="secondary" onClick={handleClearCart} className="flex-1 order-1 sm:order-2">
              🗑️ Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
