import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";

const App = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <div className="overflow-hidden">
            <Router>
                <Header className="flex justify-between items-center p-4 bg-blue-600 text-white" toggleCart={toggleCart} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
                {cartOpen && <Cart toggleCart={toggleCart}   />}
                <Footer />
            </Router>
        </div>
    );
};

export default App;
