import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Luxury Product",
      description: "Premium quality product with an exclusive design.",
      price: 199,
      image: "https://via.placeholder.com/500x500.png?text=Luxury+Product",
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={openModal}
            />
          ))}
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={closeModal}
        onOrder={() => {
          closeModal();
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      />

      <OrderForm product={selectedProduct} />

      <Footer />
    </div>
  );
}

export default App;
