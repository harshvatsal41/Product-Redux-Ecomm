import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component

const ProductList = () => {
    const products = useSelector(state => state.cart.products); // Updated state path
    const [selectedCategory, setSelectedCategory] = useState('All'); // Default to show all products

    // Extract unique categories
    const categories = Array.from(new Set(products.map(product => product.category)));

    // Include "All" category for displaying all products
    const allCategories = ['All', ...categories];

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            {/* Category Buttons */}
            <div className="mb-1 my-14">
                {allCategories.map((category) => (
                    <button
                        key={category}
                        className={`mx-2 p-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Cards */}
            <div className=" flex flex-wrap justify-center items-center">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="m-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
