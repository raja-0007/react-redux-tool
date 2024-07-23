import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';
import testReducer from './Components/TestSlice2'
const store = configureStore({
  reducer: {
    cart: cartReducer,
    test: testReducer,
  },
});

export default store;