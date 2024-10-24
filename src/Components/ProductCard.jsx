import React, { useState } from 'react';
import {FaChevronDown} from "react-icons/fa";
import {Tooltip} from "react-tooltip";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decreaseAmount, increaseAmount, removeFromCart} from "../Features/productCartSlice.js";
import {IoTrashBin, IoTrashBinOutline} from "react-icons/io5";


const ProductCard = ({ product }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart); // Adjust the path based on your state structure

    // Find the product in the cart
    const itemInCart = cart.find(item => item.id === product.id);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleIncrease = () => {
        dispatch(increaseAmount(product.id));
    };

    const handleDecrease = () => {
        dispatch(decreaseAmount(product.id));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
    };


    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };
    const toggleTitle = () => {
        setIsVisible(!isVisible);
    };



    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover px-4" src={product.image} alt={product.title}/>
            <div className="px-6 py-4">

                <div className="flex items-center justify-between">
                    <Link to={`/product/${product.id}`} className="no-underline">
                        <div title={product.title}>
                            <p className={`font-bold text-xl mb-2 ${isVisible ? '' : 'line-clamp-1'}`}>
                                {product.title}
                            </p>
                        </div>
                    </Link>
                    <button onClick={toggleTitle} className="text-blue-500 mt-2 hover:underline">
                        <FaChevronDown/>
                    </button>
                </div>
                <p className="text-gray-900 font-semibold mt-2">${product.price.toFixed(2)}</p>
                <p className="text-gray-600 mt-1">
                    <strong>Category:</strong> {product.category}
                </p>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500">{'★'.repeat(Math.floor(product.rating.rate))}</span>
                    <span className="text-gray-600 ml-1">({product.rating.count} reviews)</span>
                </div>
                <div>
                    <p className={`text-gray-700 text-base mt-4 ${isExpanded ? '' : 'line-clamp-2'}`}>
                        {product.description}
                    </p>
                    <button onClick={toggleDescription} className="text-blue-500 mt-0">
                        {isExpanded ? 'read less' : 'Read more..'}
                    </button>
                </div>
            </div>
            <div className="px-6 pt-4 pb-6">
                {itemInCart ? (
                    <div className="flex items-center space-x-2.5">
                        <button onClick={handleDecrease}
                                className="bg-red-500 text-2xl hover:bg-red-700 text-white font-bold py-1.5 px-3 rounded-l">
                            -
                        </button>
                        <span className="text-lg font-semibold">{itemInCart.quantity}</span>
                        <button onClick={handleIncrease}
                                className="bg-green-500 text-2xl hover:bg-green-700 text-white font-bold py-1.5 px-3 rounded-r">
                            +
                        </button>
                        <button onClick={handleRemoveFromCart}
                                className=" text-3xl bg-auto text-blue-400 hover:text-red-600 py-2 px-4 rounded">
                            <IoTrashBin/>
                        </button>
                    </div>
                ) : (
                    <button onClick={handleAddToCart}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
