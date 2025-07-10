import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === 'loading';

  const isOrderPage = location.pathname.startsWith('/order');
  const isCartPage = location.pathname === '/cart';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-auto">
        <main className="mx-auto max-w-5xl">
          <Outlet />
        </main>
      </div>

      {!isOrderPage && !isCartPage && <CartOverview />}
    </div>
  );
}

export default AppLayout;
