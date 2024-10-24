import { configureStore } from '@reduxjs/toolkit';
import productCartReducer from '../features/productCartSlice';

export const store = configureStore({
    reducer: {
        cart: productCartReducer,
    },
});

export default store;
