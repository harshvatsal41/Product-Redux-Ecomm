import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {IoArrowBackCircleOutline, IoTrashBin} from "react-icons/io5";
import {addToCart, decreaseAmount, increaseAmount, removeFromCart} from "../Features/productCartSlice.js";
import {IoMdArrowRoundBack} from "react-icons/io";

const ProductDetails = () => {
    const { id } = useParams();
    const productId = parseInt(id); // Convert id to a number
    const products = useSelector((state) => state.cart.products); // Access products from the Redux store

    // Find the product with the matching id
    const product = products.find((product) => product.id === productId);

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

    const navigate = useNavigate();

    const handleBackNavigation = () => {
        navigate(-1); // This will take the user back to the previous page
    };

    if (!product) {
        return <div className="text-center mt-10">Product not found</div>; // Handle the case where the product doesn't exist
    }



    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row p-6 max-w-4xl w-full">
                <div>
                    <button className=" hover:bg-gray-200 text-4xl rounded-2xl border-amber-100" onClick={handleBackNavigation}><IoArrowBackCircleOutline /></button>

                </div>
                {/* Product Image */}
                <div className="flex-shrink-0">
                    <img
                        className="w-80 h-80 object-contain rounded-lg"
                        src={product.image}
                        alt={product.title}
                    />
                </div>

                {/* Product Info */}
                <div className="lg:ml-6 mt-4 lg:mt-0 flex-grow">
                    <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <p className="text-xl font-semibold text-gray-800 mt-4">₹{product.price.toFixed(2)}</p>
                    <p className="text-gray-600 mt-1"><strong>Category:</strong> {product.category}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500">{'★'.repeat(Math.floor(product.rating.rate))}</span>
                        <span className="text-gray-600 ml-1">({product.rating.count} reviews)</span>
                    </div>

                    {/* Add to Cart Button */}
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
            </div>
        </div>
    );
};

export default ProductDetails;
