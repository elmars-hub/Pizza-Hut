import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex items-center justify-center px-4 sm:py-12">
      <div className="max-w-2xl w-full text-center fade-in">
        <div className="mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <span className="text-3xl sm:text-4xl">🍕</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-3 sm:mb-4">
            The best pizza.
            <br />
            <span className="text-gradient">
              Straight out of the oven, straight to you.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-stone-600 mb-6 sm:mb-8">
            Experience the authentic taste of Italy with our handcrafted pizzas made with the finest ingredients.
          </p>
        </div>

        {username === '' ? (
          <CreateUser />
        ) : (
          <div className="space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg text-stone-600">
              Welcome back, <span className="font-semibold text-stone-800">{username}</span>!
            </p>
            <Button type="primary" to="/menu" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              🍕 Continue Ordering
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
