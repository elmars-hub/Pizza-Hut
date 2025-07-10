import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="card p-8 max-w-md w-full text-center fade-in">
        <div className="mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-stone-200 to-stone-300 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🛒</span>
          </div>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Your cart is empty
          </h2>
          <p className="text-stone-600 mb-8">
            Start adding some delicious pizzas to your cart!
          </p>
        </div>

        <LinkButton to="/menu" className="w-full text-lg py-4">
          🍕 Browse Menu
        </LinkButton>
      </div>
    </div>
  );
}

export default EmptyCart;
