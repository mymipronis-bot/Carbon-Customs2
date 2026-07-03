import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-500 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        <h2 className="text-2xl font-bold text-yellow-500">
          LUXURY STORE
        </h2>

        <p className="text-gray-400 mt-4">
          Premium Quality • Secure Payments • Fast Delivery
        </p>

        <div className="flex justify-center gap-6 mt-6 text-white">
          <span>Zelle</span>
          <span>Apple Pay</span>
          <span>Chime</span>
          <span>Bitcoin</span>
        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © 2026 Luxury Store. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
