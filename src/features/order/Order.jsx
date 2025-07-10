// Test ID: IIDSAT
import { getOrder } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import OrderItem from './OrderItem';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';

function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Order Header */}
        <div className="card p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-2">
                Order #{id}
              </h2>
              <p className="text-stone-600">Track your order status</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {priority && (
                <span className="badge-warning">
                  ⚡ Priority Order
                </span>
              )}
              <span className="badge-success">
                {status} order
              </span>
            </div>
          </div>
        </div>

        {/* Delivery Status */}
        <div className="card p-6 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                {deliveryIn >= 0 ? '🚚' : '✅'}
              </span>
              <div>
                <p className="font-semibold text-stone-800 text-lg">
                  {deliveryIn >= 0
                    ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                    : 'Order should have arrived'}
                </p>
                <p className="text-sm text-stone-600">
                  Estimated delivery: {formatDate(estimatedDelivery)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="card p-6">
          <h3 className="text-xl font-bold text-stone-800 mb-4">Order Items</h3>
          <div className="space-y-4">
            {cart.map((item) => (
              <OrderItem item={item} key={item.pizzaId} />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="card p-6 bg-gradient-to-r from-stone-50 to-stone-100">
          <h3 className="text-xl font-bold text-stone-800 mb-4">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-stone-600">Pizza Total:</span>
              <span className="font-semibold">{formatCurrency(orderPrice)}</span>
            </div>
            {priority && (
              <div className="flex justify-between">
                <span className="text-stone-600">Priority Fee:</span>
                <span className="font-semibold text-orange-600">{formatCurrency(priorityPrice)}</span>
              </div>
            )}
            <div className="border-t border-stone-200 pt-3">
              <div className="flex justify-between">
                <span className="font-bold text-lg">Total to pay on delivery:</span>
                <span className="font-bold text-lg text-gradient">{formatCurrency(orderPrice + priorityPrice)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderID);
  return order;
}

export default Order;
