import React from 'react';
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { FadeLeftAdv } from "../Utility/Animation.js";
import { clearCart, decreaseAmount, increaseAmount, removeFromCart } from "../Features/productCartSlice.js";

const Cart = ({ toggleCart }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    // Staggered animation for items
    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <motion.div
            variants={FadeLeftAdv(0.1)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 w-96 h-full bg-white shadow-2xl rounded-l-lg p-6 my-16 z-50"
        >
            <motion.h1
                variants={FadeLeftAdv(0.3)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-xl font-bold mb-4">Your Cart</motion.h1>
            {cartItems.length > 0 ? (
                <ul className="space-y-2">
                    {cartItems.map((item, index) => (
                        <motion.li
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            key={item.id}
                            transition={{ duration: 0.3, delay: index * 0.1 }} // Staggering effect
                            className="flex justify-between items-center border-b pb-2"
                        >
                            <div className="flex items-center">
                                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-2" />
                                <div>
                                    <span className="block">{item.title}</span>
                                    <div className="flex items-center mt-1">
                                        <button
                                            onClick={() => dispatch(decreaseAmount(item.id))}
                                            className="bg-gray-300 px-2 py-1 rounded-l"
                                        >
                                            -
                                        </button>
                                        <span className="px-2">{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch(increaseAmount(item.id))}
                                            className="bg-gray-300 px-2 py-1 rounded-r"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>${item.totalPrice.toFixed(2)}</span>
                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="ml-2 text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        </motion.li>
                    ))}
                    <motion.button
                        variants={FadeLeftAdv(0.3)}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => dispatch(clearCart())}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Clear Cart
                    </motion.button>
                </ul>
            ) : (
                <motion.p
                    variants={FadeLeftAdv(0.3)}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
                    Your cart is empty
                </motion.p>
            )}
            <motion.div
                variants={FadeLeftAdv(0.3)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-4">
                <h2 className="font-bold">Total: ${totalAmount.toFixed(2)}</h2>
            </motion.div>
            <motion.button
                variants={FadeLeftAdv(0.5)}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={toggleCart}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
                Close
            </motion.button>
        </motion.div>
    );
};

export default Cart;
