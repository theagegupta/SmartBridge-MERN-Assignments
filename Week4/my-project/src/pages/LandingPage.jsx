import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from 'react-router-dom';

const LandingPage = ({products}) => {
   
    // const [products, setProducts] = useState([]);
    const navigate = useNavigate();
  
    // useEffect(() => {
    //   fetch("https://fakestoreapi.com/products?limit=9")
    //     .then(res => res.json())
    //     .then(data => setProducts(data));
    // }, []);


  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-900 shadow-2xl py-3 px-10 flex  justify-between  items-center fixed w-full">
        <h1 className="text-2xl font-bold text-gray-200">MyShop</h1>
        <ul className="flex space-x-6 text-gray-200 text-lg font-semibold">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Products</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-32 bg-black mt-14">
        <h2 className="text-5xl lg:text-7xl md:text-6xl sm:text-5xl font-bold text-yellow-400 mb-4 ">Welcome to MyShop</h2>
        <p className="text-lg small:text-lg md:text-lg lg:text-xl text-gray-300 font-normal">Find the best products at unbeatable prices.</p>
      </section>

      {/* Product Section */}
      <section className="pb-20 pt-0 px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
       <ProductCard onClick={() => navigate(`/product/${product.id}`)} key={product.id} product={product}></ProductCard>
      ))}
    </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-10 mt-auto">
        <p>&copy; 2025 MyShop. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Facebook</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
