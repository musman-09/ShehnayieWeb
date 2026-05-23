import React from "react";
import Navbar from "../../Components/Navbar";
import CategorySection from "../../Components/CategorySection";
import shehnayieLogo from "../../assets/images/shehnayieText.png";
import productsData from "../../data/productsData"; // 👈 import from data file
import HeroBackground from "../../assets/images/HeroBackground.png";

// group flat array by category
const grouped = productsData.reduce((acc, product) => {
  if (!acc[product.category]) acc[product.category] = [];
  acc[product.category].push(product);
  return acc;
}, {});

const HeroSection = () => {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{ position: "relative" }}
      className="flex flex-col items-center justify-center py-20 px-8 text-center"
    >
      {/* background image with opacity */}
      <div
        style={{
          backgroundImage: `url(${HeroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3, // 👈 change this 0.1 to 1.0
          position: "absolute",
          inset: 0,
        }}
      ></div>

      {/* content stays fully visible */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={shehnayieLogo}
          alt="Shehnayie"
          className="h-24 object-contain mb-6"
        />
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Elegance in Every Detail
        </h1>
        <p className="text-gray-500 text-base max-w-lg mb-8">
          Discover our handcrafted collection of necklaces, earrings, and
          handbags — designed for women who appreciate timeless beauty.
        </p>
        <button
          onClick={scrollToProducts}
          className="bg-yellow-500 text-white text-sm font-medium px-8 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Explore Collection
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div id="products" className="px-8 py-10 flex flex-col gap-12">
        {Object.entries(grouped).map(([category, items]) => (
          <CategorySection key={category} category={category} items={items} />
        ))}
      </div>
    </>
  );
};

export default Home;
