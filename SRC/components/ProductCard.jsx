import React from "react";

const ProductCard = ({ product, onView }) => {
  return (
    <div className="bg-[#111] rounded-2xl overflow-hidden shadow-xl border border-yellow-600 hover:scale-105 duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold text-yellow-500">
          {product.name}
        </h2>

        <p className="text-gray-300 mt-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-6">

          <span className="text-3xl font-bold text-white">
            ${product.price}
          </span>

          <button
            onClick={() => onView(product)}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg transition"
          >
            View
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;
