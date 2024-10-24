import { configureStore } from '@reduxjs/toolkit';
import productCartReducer from '../features/productCartSlice.js';
import { clearCart,removeFromCart,addToCart,decreaseAmount,increaseAmount } from "../Features/productCartSlice.js"



export const store = configureStore({
    reducer: {
        cart: productCartReducer,
    },
});

export default store;
