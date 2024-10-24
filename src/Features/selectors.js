import { createSelector } from 'reselect';

// Base selector to get cart state
const selectCartState = (state) => state.cart;

// Memoized selector for cart items
export const selectCartItems = createSelector(
    [selectCartState],
    (cartState) => cartState.cart
);

// Memoized selector for total amount
export const selectTotalAmount = createSelector(
    [selectCartState],
    (cartState) => cartState.totalAmount
);
