import { configureStore } from '@reduxjs/toolkit';
import useReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

const Store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});

export default Store;
