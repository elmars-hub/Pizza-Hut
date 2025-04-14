import { configureStore } from '@reduxjs/toolkit';
import useReducer from './features/user/userSlice';

const Store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default Store;
