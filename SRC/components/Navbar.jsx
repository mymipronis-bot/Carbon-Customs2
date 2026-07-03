import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black border-b border-yellow-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-yellow-500 tracking-widest">
          LUXURY STORE
        </h1>

        <ul className="hidden md:flex gap-8 text-white text-lg">
          <li className="hover:text-yellow-500 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-yellow-500 cursor-pointer transition">
            Products
          </li>

          <li className="hover:text-yellow-500 cursor-pointer transition">
            Order
          </li>

          <li className="hover:text-yellow-500 cursor-pointer transition">
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
