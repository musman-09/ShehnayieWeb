import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import CategorySection from "../../Components/CategorySection";
import necklace from "../../assets/images/necklace.jpeg";

const productsData = {
  necklace: [
    { id: 1, name: "Gold Necklace", price: "PKR 5,500", image: necklace },
    { id: 2, name: "Silver Necklace", price: "PKR 4,200", image: "" },
    { id: 3, name: "Pearl Necklace", price: "PKR 6,000", image: "" },
    { id: 4, name: "Diamond Necklace", price: "PKR 12,000", image: "" },
    { id: 5, name: "Rose Gold Necklace", price: "PKR 8,500", image: "" },
    { id: 6, name: "Bridal Necklace", price: "PKR 15,000", image: "" },
  ],
  "ear-rings": [
    { id: 7, name: "Pearl Earrings", price: "PKR 2,200", image: "" },
    { id: 8, name: "Diamond Earrings", price: "PKR 3,800", image: "" },
    { id: 9, name: "Gold Hoops", price: "PKR 2,800", image: "" },
    { id: 10, name: "Silver Drops", price: "PKR 1,900", image: "" },
    { id: 11, name: "Jhumka", price: "PKR 1,500", image: "" },
    { id: 12, name: "Bridal Earrings", price: "PKR 5,000", image: "" },
  ],
  "hand-bags": [
    { id: 13, name: "Bridal Hand Bag", price: "PKR 8,000", image: "" },
    { id: 14, name: "Velvet Hand Bag", price: "PKR 6,500", image: "" },
    { id: 15, name: "Clutch Bag", price: "PKR 4,200", image: "" },
    { id: 16, name: "Embroidered Bag", price: "PKR 7,000", image: "" },
    { id: 17, name: "Potli Bag", price: "PKR 3,500", image: "" },
    { id: 18, name: "Silk Bag", price: "PKR 5,800", image: "" },
  ],
};

const categoryTitles = {
  necklace: "Necklace",
  "ear-rings": "Ear Rings",
  "hand-bags": "Hand Bags",
};

const ProductsPage = () => {
  const { category } = useParams(); // gets "necklace" from URL

  const items = productsData[category] || [];
  const title = categoryTitles[category] || category;

  return (
    <>
      <Navbar />
      <div className="px-8 py-10">
        {items.length > 0 ? (
          <CategorySection category={title} items={items} />
        ) : (
          <p className="text-gray-500 text-center mt-20">Category not found.</p>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
