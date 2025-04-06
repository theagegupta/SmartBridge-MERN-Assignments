import React from 'react'

const ProductCard = ({product, onClick}) => {
  return (
   
     <div 
          key={product.id}
          className="border rounded-xl shadow-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-500 transition-all"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 p-5 object-contain rounded-xl rounded-b-none bg-white"
          />
          <div className="p-4">
          <h3 className="text-lg w-full font-semibold line-clamp-1 text-ellipsis text-left ">{product.title}</h3>
            <a onClick={onClick} className='text-sm text-blue-500 cursor-pointer hover:text-blue-600' href={onClick}><i>View Details &gt;</i></a>
          <p className="text-blue-600  font-bold mt-1">₹{Math.round(product.price * 15)}</p>
          </div>
        </div>
        
  )
}

export default ProductCard