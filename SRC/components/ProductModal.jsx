import React from "react";

const ProductModal = ({ product, isOpen, onClose, onOrder }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

      <div className="bg-[#111] border border-yellow-500 rounded-2xl max-w-lg w-full p-6">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-xl"
        />

        <h2 className="text-3xl font-bold text-yellow-500 mt-6">
          {product.name}
        </h2>

        <p className="text-gray-300 mt-4">
          {product.description}
        </p>

        <h3 className="text-white text-2xl font-bold mt-5">
          ${product.price}
        </h3>

        <div className="flex gap-4 mt-8">

          <button
            onClick={() => onOrder(product)}
            className="flex-1 bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Order Now
          </button>

          <button
            onClick={onClose}
            className="flex-1 border border-yellow-500 text-yellow-500 font-bold py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductModal;
