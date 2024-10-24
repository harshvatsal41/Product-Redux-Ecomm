import React from 'react';
import { IoMdCart } from 'react-icons/io';
import {useSelector} from "react-redux";

const Header = ({ toggleCart }) => {
    const cartItems = useSelector((state) => state.cart.cart);

    return (
        <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-blue-600 text-white z-50">
            <h1 className="text-2xl font-bold">E-commerce Store</h1>
            <button className="bg-blue-800 px-4 py-2 rounded-2xl hover:bg-blue-900" onClick={toggleCart}>
                <IoMdCart />
                {cartItems.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 rounded-full w-3 h-3 my-3.5 mx-3.5" />
                )}
            </button>
        </header>
    );
};

export default Header;
