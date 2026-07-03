import React from "react";

const Hero = () => {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">

        <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-500 mb-6 tracking-widest">
          LUXURY COLLECTION
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl mb-10">
          Discover premium products with an exclusive shopping experience.
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-full transition duration-300 shadow-lg">
          ORDER NOW
        </button>

      </div>
    </section>
  );
};

export default Hero;
