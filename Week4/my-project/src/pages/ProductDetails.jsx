import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data));
  }, [id]);
  
  if(!product)
  {
    return (<div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center space-y-4">
        <div className='flex space-x-4'>
          <div className="w-3 h-3 border-2 border-blue-500 rounded-full animate-bounce [animation-delay:0s]"></div>
          <div className="w-3 h-3 border-2 border-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-3 h-3 border-2 border-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
        <p className="text-white text-lg font-medium">Loading product details...</p>
      </div>
    </div>
    );
  }
  

  return (
    <div className="max-w-full min-h-screen px-10 flex py-6">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-gray-950 shadow-lg shadow-gray-400 rounded-xl">
        <div className=' rounded-l-xl p-8 flex justify-center items-center bg-white'>
          <img src={product.image} alt={product.title} className="  w-7/12 object-contain" />
          </div>
        <div className='px-16 py-14  md:text-left sm:text-justify'>
          <h2 className="text-4xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-400 mt-8">{product.description}</p>
          <p className="text-xl mt-4 font-semibold text-blue-700">₹{product.price*15}</p>
          <p className="mt-3 text-sm text-gray-500">Category: {product.category}</p>
          <p className="mt-1 text-sm text-gray-500">Rating: ⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
