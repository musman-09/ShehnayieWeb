import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  console.log("ProductCard rendered, product:", product);

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)} // 👈 this is the key
      className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-400 text-sm">No Image</span>
        )}
      </div>
      <h3 className="text-gray-800 font-medium text-sm mb-1">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.price}</p>
    </div>
  );
};

export default ProductCard;
