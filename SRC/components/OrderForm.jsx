import React, { useState } from "react";

const OrderForm = ({ product }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    payment: "Zelle",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Order Confirmed!\n\nProduct: ${product?.name || "Not selected"}\nPayment: ${formData.payment}`
    );
  };

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-xl mx-auto bg-[#111] border border-yellow-500 rounded-2xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-8">
          Complete Your Order
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white"
            required
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white"
            rows="4"
            required
          />

          <select
            name="payment"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white"
          >
            <option>Zelle</option>
            <option>Apple Pay</option>
            <option>Chime</option>
            <option>Bitcoin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition"
          >
            Place Order
          </button>

        </form>

      </div>
    </section>
  );
};

export default OrderForm;
