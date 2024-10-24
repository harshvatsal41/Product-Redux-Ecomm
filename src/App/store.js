import { configureStore } from '@reduxjs/toolkit';
import productCartReducer from '../Features/productCartSlice.js';



export const store = configureStore({
    reducer: {
        cart: productCartReducer,
    },
});

export default store;
