import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import { fetchAddress, getUser } from '../user/userSlice';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const username = useSelector(getUser);
  const dispatch = useDispatch();

  const formErrors = useActionData();
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="card p-8 mb-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-2">
            Ready to order? Let's go! 🚀
          </h2>
          <p className="text-stone-600 mb-6">
            Complete your order details below
          </p>

          <Button 
            type="secondary" 
            onClick={() => dispatch(fetchAddress())}
            className="mb-6"
          >
            📍 Get My Location
          </Button>
        </div>

        <div className="card p-8">
          <Form method="POST" action="/order/new" className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="customer"
                  required
                  className="input w-full"
                  defaultValue={username}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Phone Number
                </label>
                <input 
                  className="input w-full" 
                  type="tel" 
                  name="phone" 
                  required 
                />
                {formErrors?.phone && (
                  <p className="mt-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                    {formErrors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Delivery Address
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  className="input w-full"
                />
              </div>
            </div>

            <div className="card p-4 bg-stone-50">
              <div className="flex items-center gap-3">
                <input
                  className="h-5 w-5 accent-yellow-500 focus:ring-2 focus:ring-yellow-400"
                  type="checkbox"
                  name="priority"
                  id="priority"
                  value={withPriority}
                  onChange={(e) => setWithPriority(e.target.checked)}
                />
                <label htmlFor="priority" className="font-semibold text-stone-800">
                  Want to give your order priority? (20% additional cost)
                </label>
              </div>
            </div>

            <div className="card p-4 bg-gradient-to-r from-yellow-50 to-yellow-100">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-600">Cart Total:</span>
                  <span className="font-semibold">{formatCurrency(totalCartPrice)}</span>
                </div>
                {withPriority && (
                  <div className="flex justify-between">
                    <span className="text-stone-600">Priority Fee:</span>
                    <span className="font-semibold text-orange-600">{formatCurrency(priorityPrice)}</span>
                  </div>
                )}
                <div className="border-t border-stone-200 pt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Total:</span>
                    <span className="font-bold text-lg text-gradient">{formatCurrency(totalPrice)}</span>
                  </div>
                </div>
              </div>
            </div>

            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            
            <Button type="primary" disabled={isSubmitting} className="w-full text-lg py-4">
              {isSubmitting ? 'Placing order...' : `Order now for ${formatCurrency(totalPrice)}`}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  // Do NOT overuse
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
